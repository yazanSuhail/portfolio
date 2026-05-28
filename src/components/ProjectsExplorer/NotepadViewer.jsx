import Draggable from "react-draggable";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { closeIcon, max, minimize } from "../../assets";
import { getProjectFileName } from "../../Mocks/projectsData";
import { useTaskbarWindows } from "../../contexts/taskbar-windows";
import ModalHeader from "../Modals/ModalStructure/ModalHeader";
import { GifViewerPortal, NotepadWindow, NotepadBody } from "./styles";

function NotepadViewer({ windowId, file, onClose, onMinimize, onFocus }) {
  const nodeRef = useRef(null);
  const [isFullWidth, setIsFullWidth] = useState(false);
  const { getWindowZIndex } = useTaskbarWindows();

  if (!file) return null;

  const zIndex = getWindowZIndex(windowId);

  const toggleFullWidth = () => {
    setIsFullWidth((prev) => !prev);
  };

  const windowContent = (
    <NotepadWindow isfullwidth={`${isFullWidth}`}>
      <ModalHeader
        setModalWidth={toggleFullWidth}
        icone={file.image}
        title={getProjectFileName(file)}
        minimize={minimize}
        max={max}
        closeIcon={closeIcon}
        closeModal={onClose}
        onMinimize={onMinimize}
      />
      <NotepadBody isfullwidth={`${isFullWidth}`}>
        <p>{file.description}</p>
        <img src={file.image} alt={getProjectFileName(file)} />
      </NotepadBody>
    </NotepadWindow>
  );

  return createPortal(
    <GifViewerPortal
      className="gif-viewer-root"
      style={{ zIndex }}
      onMouseDownCapture={(e) => {
        e.stopPropagation();
        onFocus?.();
      }}
    >
      {isFullWidth ? (
        windowContent
      ) : (
        <Draggable
          nodeRef={nodeRef}
          handle=".modal-drag-handle"
          defaultPosition={{ x: 160, y: 96 }}
        >
          <div ref={nodeRef}>{windowContent}</div>
        </Draggable>
      )}
    </GifViewerPortal>,
    document.body
  );
}

export default NotepadViewer;
