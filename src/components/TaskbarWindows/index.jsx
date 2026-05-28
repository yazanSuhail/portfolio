import { useTaskbarWindows } from "../../contexts/taskbar-windows";
import { TaskbarWindowButton, TaskbarWindowsList } from "../MainStartMenu/styles";

function TaskbarWindows() {
  const { windows, topVisibleWindowId, selectTaskbarWindow } =
    useTaskbarWindows();

  if (windows.length === 0) {
    return null;
  }

  return (
    <TaskbarWindowsList
      onMouseDown={(event) => event.stopPropagation()}
      onClick={(event) => event.stopPropagation()}
    >
      {windows.map((window) => {
        const isActive =
          topVisibleWindowId === window.id && !window.isMinimized;

        return (
          <TaskbarWindowButton
            key={window.id}
            type="button"
            $active={isActive}
            onMouseDown={(event) => event.stopPropagation()}
            onClick={(event) => {
              event.stopPropagation();
              selectTaskbarWindow(window.id);
            }}
            title={window.title}
          >
            <img src={window.icon} alt="" />
            <span>{window.title}</span>
          </TaskbarWindowButton>
        );
      })}
    </TaskbarWindowsList>
  );
}

export default TaskbarWindows;
