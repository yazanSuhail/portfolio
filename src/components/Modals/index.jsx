import React, { useState } from "react";
import Draggable from "react-draggable";
import ModalStaticContent from "../Modals/StaticContent";
import { useTaskbarWindows } from "../../contexts/taskbar-windows";

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
  const modalRef = React.createRef();
  const [isFullWidth, setIsFullWidth] = useState(false);
  const { getWindowZIndex } = useTaskbarWindows();

  const zIndex = getWindowZIndex(windowId);

  const modalContent = (
    <ModalStaticContent
      isFullWidth={isFullWidth}
      setIsFullWidth={setIsFullWidth}
      icone={icone}
      type={type}
      title={title}
      menus={menus}
      content={[]}
      isVisible={isVisible}
      closeModal={closeModal}
      onMinimize={onMinimize}
    />
  );

  return (
    <>
      {isVisible && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex,
            pointerEvents: "none",
          }}
          onMouseDownCapture={onFocus}
        >
          {isFullWidth ? (
            <div style={{ pointerEvents: "auto", height: "100%" }}>
              {modalContent}
            </div>
          ) : (
            <Draggable nodeRef={modalRef} handle=".modal-drag-handle">
              <div ref={modalRef} style={{ pointerEvents: "auto" }}>
                {modalContent}
              </div>
            </Draggable>
          )}
        </div>
      )}
    </>
  );
};

export default WindowsXPModal;
