import { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import StartMenu from "../../components/MainStartMenu";
import WindowsXPModal from "../../components/Modals";
import { computer, folder } from "../../assets";
import {
  fileMenu,
  editMenu,
  viewMenu,
  toolsMenu,
  helpMenu,
  favorites,
} from "../../Mocks/DesktopMenuMock";
import {
  DESKTOP_CONTEXT_MENU,
  ICON_CONTEXT_MENUS,
  DESKTOP_ICON_META,
} from "../../Mocks/DesktopContextMenuMock";
import {
  EXPLORER_WINDOW_ID,
  useTaskbarWindows,
} from "../../contexts/taskbar-windows";
import DesktopIcons from "../../components/DesktopIcons";
import DesktopContextMenu from "../../components/DesktopContextMenu";
import DesktopPropertiesDialog from "../../components/DesktopContextMenu/DesktopPropertiesDialog";
import NotepadViewer from "../../components/ProjectsExplorer/NotepadViewer";
import {
  autoArrangePositions,
  sortIconOrder,
  snapAllPositions,
  DEFAULT_ICON_POSITIONS,
  ICON_ORDER,
} from "../../utils/desktopGrid";
import { useDesktopSettings } from "../../hooks/useDesktopSettings";
import { DesktopContainer } from "./styles";
import Mobile from "../Mobile";

function MainPage() {
  const navigate = useNavigate();
  const menus = [fileMenu, editMenu, viewMenu, toolsMenu, helpMenu, favorites];
  const [showMusicPlayer, setShowMusicPlayer] = useState(false);
  const {
    explorerWindow,
    isExplorerVisible,
    visibleGifWindows,
    openExplorer,
    closeWindow,
    minimizeWindow,
    focusWindow,
  } = useTaskbarWindows();
  const [type, setType] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [iconPositions, setIconPositions] = useState(DEFAULT_ICON_POSITIONS);
  const [iconOrder, setIconOrder] = useState(ICON_ORDER);
  const [desktopPrefs, setDesktopPrefs] = useState({
    showIcons: true,
    autoArrange: false,
    alignToGrid: true,
  });
  const [contextMenu, setContextMenu] = useState(null);
  const [propertiesTarget, setPropertiesTarget] = useState(null);
  const {
    wallpaperId,
    position: wallpaperPosition,
    wallpaperUrl,
    iconSizeId,
    iconSize,
    applyDisplaySettings,
  } = useDesktopSettings();

  const explorerType = explorerWindow?.explorerType ?? type;

  const checkedMenuIds = useMemo(() => {
    const ids = new Set();
    if (desktopPrefs.showIcons) ids.add("show-desktop-icons");
    if (desktopPrefs.autoArrange) ids.add("auto-arrange");
    if (desktopPrefs.alignToGrid) ids.add("align-to-grid");
    return ids;
  }, [desktopPrefs]);

  useEffect(() => {
    const handleDocumentClick = () => {
      setSelectedIcon(null);
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpenExplorer = useCallback(
    (modalType) => {
      setType(modalType);
      openExplorer(modalType);
    },
    [openExplorer]
  );

  const openIcon = useCallback(
    (iconType) => {
      setSelectedIcon(iconType);
      setType(iconType);
      if (iconType === "myMusic") {
        setShowMusicPlayer(true);
        return;
      }
      handleOpenExplorer(iconType);
    },
    [handleOpenExplorer]
  );

  const applySort = useCallback(
    (sortBy) => {
      const nextOrder = sortIconOrder(iconOrder, sortBy);
      setIconOrder(nextOrder);
      setIconPositions(autoArrangePositions(nextOrder, iconSizeId));
      setDesktopPrefs((prev) => ({ ...prev, autoArrange: true }));
    },
    [iconOrder, iconSizeId]
  );

  const handleApplyDisplay = useCallback(
    (settings) => {
      const sizeChanged =
        settings.iconSizeId != null && settings.iconSizeId !== iconSizeId;
      applyDisplaySettings(settings);
      if (sizeChanged) {
        setIconPositions(
          autoArrangePositions(iconOrder, settings.iconSizeId)
        );
      }
    },
    [applyDisplaySettings, iconOrder, iconSizeId]
  );

  const handleContextAction = useCallback(
    (actionId) => {
      const ctx = contextMenu?.context;
      if (!ctx) return;

      if (ctx.menuType === "icon") {
        const iconType = ctx.iconType;
        switch (actionId) {
          case "open":
            openIcon(iconType);
            break;
          case "explore":
            handleOpenExplorer("myComputer");
            break;
          case "properties":
            setPropertiesTarget({
              kind: "icon",
              ...DESKTOP_ICON_META[iconType],
            });
            break;
          default:
            break;
        }
        return;
      }

      switch (actionId) {
        case "refresh":
          window.location.reload();
          break;
        case "show-desktop-icons":
          setDesktopPrefs((prev) => ({
            ...prev,
            showIcons: !prev.showIcons,
          }));
          break;
        case "auto-arrange":
          setDesktopPrefs((prev) => {
            const nextAuto = !prev.autoArrange;
            if (nextAuto) {
              setIconPositions(autoArrangePositions(iconOrder, iconSizeId));
            }
            return { ...prev, autoArrange: nextAuto };
          });
          break;
        case "align-to-grid":
          setDesktopPrefs((prev) => {
            const nextAlign = !prev.alignToGrid;
            if (nextAlign) {
              setIconPositions((positions) => snapAllPositions(positions));
            }
            return { ...prev, alignToGrid: nextAlign };
          });
          break;
        case "arrange-name":
          applySort("name");
          break;
        case "arrange-size":
          applySort("size");
          break;
        case "arrange-type":
          applySort("type");
          break;
        case "arrange-modified":
          applySort("modified");
          break;
        case "new-folder":
          handleOpenExplorer("myProjects");
          break;
        case "new-shortcut":
          window.open(
            "https://github.com/yazanSuhail",
            "_blank",
            "noopener,noreferrer"
          );
          break;
        case "properties":
          setPropertiesTarget({ kind: "desktop" });
          break;
        default:
          break;
      }
    },
    [contextMenu, iconOrder, iconSizeId, openIcon, handleOpenExplorer, applySort]
  );

  const handleDesktopContextMenu = useCallback((event) => {
    if (event.target.closest(".desktop-icon")) return;
    event.preventDefault();
    event.stopPropagation();
    setContextMenu({
      menu: DESKTOP_CONTEXT_MENU,
      x: event.clientX,
      y: event.clientY,
      context: { menuType: "desktop" },
    });
  }, []);

  const handleIconContextMenu = useCallback((iconType, event) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedIcon(iconType);
    setType(iconType);
    setContextMenu({
      menu: ICON_CONTEXT_MENUS[iconType],
      x: event.clientX,
      y: event.clientY,
      context: { menuType: "icon", iconType },
    });
  }, []);

  const handleStartMenuAction = useCallback(
    (action) => {
      switch (action) {
        case "myComputer":
        case "controlPanel":
        case "help":
        case "search":
          setType("myComputer");
          openExplorer("myComputer");
          break;
        case "myProjects":
        case "myDocuments":
        case "myPictures":
          setType("myProjects");
          openExplorer("myProjects");
          break;
        case "myMusic":
        case "mediaPlayer":
          setShowMusicPlayer(true);
          break;
        case "internet":
          window.open("https://github.com/yazanSuhail", "_blank", "noopener,noreferrer");
          break;
        case "email":
        case "linkedin":
          window.open(
            "https://www.linkedin.com/in/yazan-alzubi-023603204/",
            "_blank",
            "noopener,noreferrer"
          );
          break;
        case "github":
          window.open("https://github.com/yazanSuhail", "_blank", "noopener,noreferrer");
          break;
        case "logOff":
        case "turnOff":
          navigate("/");
          break;
        default:
          break;
      }
    },
    [navigate, openExplorer]
  );

  return (
    <>
      {screenWidth <= 720 ? (
        <Mobile />
      ) : (
        <DesktopContainer
          onContextMenu={handleDesktopContextMenu}
          $wallpaperUrl={wallpaperUrl}
          $position={wallpaperPosition}
        >
          <DesktopIcons
            openModal={handleOpenExplorer}
            setType={setType}
            selectedIcon={selectedIcon}
            setSelectedIcon={setSelectedIcon}
            showMusicPlayer={showMusicPlayer}
            setShowMusicPlayer={setShowMusicPlayer}
            showDesktopIcons={desktopPrefs.showIcons}
            iconPositions={iconPositions}
            setIconPositions={setIconPositions}
            iconOrder={iconOrder}
            alignToGrid={desktopPrefs.alignToGrid}
            iconSize={iconSize}
            onIconContextMenu={handleIconContextMenu}
          />
          {isExplorerVisible && (
            <WindowsXPModal
              windowId={EXPLORER_WINDOW_ID}
              icone={explorerType === "myProjects" ? folder : computer}
              title={
                explorerType === "myProjects" ? "My Projects" : "My Computer"
              }
              menus={menus}
              content={[]}
              isVisible
              closeModal={() => closeWindow(EXPLORER_WINDOW_ID)}
              onMinimize={() => minimizeWindow(EXPLORER_WINDOW_ID)}
              onFocus={() => focusWindow(EXPLORER_WINDOW_ID)}
              type={explorerType}
            />
          )}
          {visibleGifWindows.map((gifWindow) => (
            <NotepadViewer
              key={gifWindow.id}
              windowId={gifWindow.id}
              file={gifWindow.gifProject}
              onClose={() => closeWindow(gifWindow.id)}
              onMinimize={() => minimizeWindow(gifWindow.id)}
              onFocus={() => focusWindow(gifWindow.id)}
            />
          ))}
          <StartMenu onStartMenuAction={handleStartMenuAction} />
          {contextMenu && (
            <DesktopContextMenu
              menu={contextMenu.menu}
              position={{ x: contextMenu.x, y: contextMenu.y }}
              checkedIds={checkedMenuIds}
              onAction={handleContextAction}
              onClose={() => setContextMenu(null)}
            />
          )}
          <DesktopPropertiesDialog
            target={propertiesTarget}
            wallpaperId={wallpaperId}
            wallpaperPosition={wallpaperPosition}
            iconSizeId={iconSizeId}
            onApplyDisplay={handleApplyDisplay}
            onClose={() => setPropertiesTarget(null)}
          />
        </DesktopContainer>
      )}
    </>
  );
}

export default MainPage;
