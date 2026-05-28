import React, { useState } from "react";
import ModalStaticContent from "../Modals/StaticContent";
import ResizableDraggableWindow from "../ResizableWindow/ResizableDraggableWindow";
import { useTaskbarWindows } from "../../contexts/taskbar-windows";

const EXPLORER_DEFAULT_SIZE = { width: 920, height: 620 };

const WindowsXPModal = ({
  windowId,
  title,
  menus,
  isVisible,
  icone,
  closeModal,
  onMinimize,
  onFocus,
  type,
}) => {
  const [isFullWidth, setIsFullWidth] = useState(false);
  const { getWindowZIndex } = useTaskbarWindows();

  const zIndex = getWindowZIndex(windowId);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex,
        pointerEvents: "none",
      }}
      onMouseDownCapture={onFocus}
    >
      <ResizableDraggableWindow
        isMaximized={isFullWidth}
        onToggleMaximize={() => setIsFullWidth((prev) => !prev)}
        defaultSize={EXPLORER_DEFAULT_SIZE}
        defaultPosition={{ x: 48, y: 24 }}
      >
        {({ toggleMaximize, isMaximized }) => (
          <ModalStaticContent
            isFullWidth={isMaximized}
            onToggleMaximize={toggleMaximize}
            icone={icone}
            type={type}
            title={title}
            menus={menus}
            isVisible
            closeModal={closeModal}
            onMinimize={onMinimize}
          />
        )}
      </ResizableDraggableWindow>
    </div>
  );
};

export default WindowsXPModal;
