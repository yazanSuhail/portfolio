import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { computer, folder } from "../../assets";
import { getProjectFileName } from "../../Mocks/projectsData";

export const EXPLORER_WINDOW_ID = "explorer-modal";
export const WINDOW_KIND = {
  EXPLORER: "explorer",
  GIF: "gif",
};

const TaskbarWindowsContext = createContext(null);

const initialState = {
  windows: [],
  activeWindowId: null,
  zIndexCounter: 1000,
};

function getTopVisibleWindow(windows) {
  return windows
    .filter((w) => !w.isMinimized)
    .reduce(
      (top, window) =>
        !top || window.zIndex > top.zIndex ? window : top,
      null
    );
}

function getExplorerMeta(explorerType) {
  return {
    title: explorerType === "myProjects" ? "My Projects" : "My Computer",
    icon: explorerType === "myProjects" ? folder : computer,
  };
}

function taskbarReducer(state, action) {
  switch (action.type) {
    case "OPEN_EXPLORER": {
      const { explorerType } = action.payload;
      const { title, icon } = getExplorerMeta(explorerType);
      const existing = state.windows.find((w) => w.id === EXPLORER_WINDOW_ID);

      if (existing) {
        const zIndex = state.zIndexCounter + 1;
        return {
          ...state,
          activeWindowId: EXPLORER_WINDOW_ID,
          zIndexCounter: zIndex,
          windows: state.windows.map((w) =>
            w.id === EXPLORER_WINDOW_ID
              ? {
                  ...w,
                  title,
                  icon,
                  explorerType,
                  isMinimized: false,
                  zIndex,
                }
              : w
          ),
        };
      }

      const zIndex = state.zIndexCounter + 1;
      return {
        activeWindowId: EXPLORER_WINDOW_ID,
        zIndexCounter: zIndex,
        windows: [
          ...state.windows,
          {
            id: EXPLORER_WINDOW_ID,
            kind: WINDOW_KIND.EXPLORER,
            title,
            icon,
            explorerType,
            isMinimized: false,
            zIndex,
          },
        ],
      };
    }

    case "OPEN_GIF": {
      const { project } = action.payload;
      const id = getGifWindowId(project.id);
      const title = getProjectFileName(project);
      const existing = state.windows.find((w) => w.id === id);

      if (existing) {
        const zIndex = state.zIndexCounter + 1;
        return {
          ...state,
          activeWindowId: id,
          zIndexCounter: zIndex,
          windows: state.windows.map((w) =>
            w.id === id
              ? {
                  ...w,
                  title,
                  icon: project.image,
                  gifProject: project,
                  isMinimized: false,
                  zIndex,
                }
              : w
          ),
        };
      }

      const zIndex = state.zIndexCounter + 1;
      return {
        activeWindowId: id,
        zIndexCounter: zIndex,
        windows: [
          ...state.windows,
          {
            id,
            kind: WINDOW_KIND.GIF,
            title,
            icon: project.image,
            gifProject: project,
            isMinimized: false,
            zIndex,
          },
        ],
      };
    }

    case "CLOSE_WINDOW": {
      const { id } = action.payload;
      return {
        ...state,
        windows: state.windows.filter((w) => w.id !== id),
        activeWindowId:
          state.activeWindowId === id ? null : state.activeWindowId,
      };
    }

    case "UPDATE_EXPLORER": {
      const { title, icon } = action.payload;
      return {
        ...state,
        windows: state.windows.map((w) =>
          w.id === EXPLORER_WINDOW_ID ? { ...w, title, icon } : w
        ),
      };
    }

    case "MINIMIZE": {
      const { id } = action.payload;
      return {
        ...state,
        windows: state.windows.map((w) =>
          w.id === id ? { ...w, isMinimized: true } : w
        ),
        activeWindowId:
          state.activeWindowId === id ? null : state.activeWindowId,
      };
    }

    case "FOCUS": {
      const { id } = action.payload;
      const exists = state.windows.some((w) => w.id === id);
      if (!exists) return state;

      const zIndex = state.zIndexCounter + 1;
      return {
        ...state,
        activeWindowId: id,
        zIndexCounter: zIndex,
        windows: state.windows.map((w) =>
          w.id === id ? { ...w, isMinimized: false, zIndex } : w
        ),
      };
    }

    case "SELECT_TASKBAR": {
      const { id } = action.payload;
      const target = state.windows.find((w) => w.id === id);
      if (!target) return state;

      if (target.isMinimized) {
        const zIndex = state.zIndexCounter + 1;
        return {
          activeWindowId: id,
          zIndexCounter: zIndex,
          windows: state.windows.map((w) =>
            w.id === id ? { ...w, isMinimized: false, zIndex } : w
          ),
        };
      }

      const topWindow = getTopVisibleWindow(state.windows);
      const isTopmost = topWindow?.id === id;

      if (isTopmost) {
        return {
          ...state,
          activeWindowId: null,
          windows: state.windows.map((w) =>
            w.id === id ? { ...w, isMinimized: true } : w
          ),
        };
      }

      const zIndex = state.zIndexCounter + 1;
      return {
        activeWindowId: id,
        zIndexCounter: zIndex,
        windows: state.windows.map((w) =>
          w.id === id ? { ...w, isMinimized: false, zIndex } : w
        ),
      };
    }

    default:
      return state;
  }
}

const LEGACY_STORAGE_KEY = "portfolio-xp-taskbar-windows";

export function TaskbarWindowsProvider({ children }) {
  const [state, dispatch] = useReducer(taskbarReducer, initialState);

  useEffect(() => {
    sessionStorage.removeItem(LEGACY_STORAGE_KEY);
  }, []);

  const openExplorer = useCallback((explorerType) => {
    dispatch({ type: "OPEN_EXPLORER", payload: { explorerType } });
  }, []);

  const openGif = useCallback((project) => {
    dispatch({ type: "OPEN_GIF", payload: { project } });
  }, []);

  const closeWindow = useCallback((id) => {
    dispatch({ type: "CLOSE_WINDOW", payload: { id } });
  }, []);

  const updateExplorer = useCallback((title, icon) => {
    dispatch({ type: "UPDATE_EXPLORER", payload: { title, icon } });
  }, []);

  const minimizeWindow = useCallback((id) => {
    dispatch({ type: "MINIMIZE", payload: { id } });
  }, []);

  const focusWindow = useCallback((id) => {
    dispatch({ type: "FOCUS", payload: { id } });
  }, []);

  const selectTaskbarWindow = useCallback((id) => {
    dispatch({ type: "SELECT_TASKBAR", payload: { id } });
  }, []);

  const getWindow = useCallback(
    (id) => state.windows.find((w) => w.id === id),
    [state.windows]
  );

  const getWindowZIndex = useCallback(
    (id) => state.windows.find((w) => w.id === id)?.zIndex ?? 1000,
    [state.windows]
  );

  const explorerWindow = useMemo(
    () => state.windows.find((w) => w.id === EXPLORER_WINDOW_ID),
    [state.windows]
  );

  const visibleGifWindows = useMemo(
    () =>
      state.windows.filter(
        (w) => w.kind === WINDOW_KIND.GIF && !w.isMinimized
      ),
    [state.windows]
  );

  const topVisibleWindowId = useMemo(
    () => getTopVisibleWindow(state.windows)?.id ?? null,
    [state.windows]
  );

  const value = useMemo(
    () => ({
      windows: state.windows,
      activeWindowId: state.activeWindowId,
      topVisibleWindowId,
      explorerWindow,
      visibleGifWindows,
      openExplorer,
      openGif,
      closeWindow,
      updateExplorer,
      minimizeWindow,
      focusWindow,
      selectTaskbarWindow,
      getWindow,
      getWindowZIndex,
      isExplorerOpen: Boolean(explorerWindow),
      isExplorerVisible: Boolean(
        explorerWindow && !explorerWindow.isMinimized
      ),
    }),
    [
      state.windows,
      state.activeWindowId,
      topVisibleWindowId,
      explorerWindow,
      visibleGifWindows,
      openExplorer,
      openGif,
      closeWindow,
      updateExplorer,
      minimizeWindow,
      focusWindow,
      selectTaskbarWindow,
      getWindow,
      getWindowZIndex,
    ]
  );

  return (
    <TaskbarWindowsContext.Provider value={value}>
      {children}
    </TaskbarWindowsContext.Provider>
  );
}

export function useTaskbarWindows() {
  const context = useContext(TaskbarWindowsContext);
  if (!context) {
    throw new Error(
      "useTaskbarWindows must be used within TaskbarWindowsProvider"
    );
  }
  return context;
}

export function getGifWindowId(projectId) {
  return `gif-${projectId}`;
}
