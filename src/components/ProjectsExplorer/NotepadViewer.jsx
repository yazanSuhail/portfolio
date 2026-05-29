import { useState } from "react";
import { createPortal } from "react-dom";
import { closeIcon, max, minimize } from "../../assets";
import { getProjectFileName } from "../../Mocks/projectsData";
import { useTaskbarWindows } from "../../contexts/taskbar-windows";
import ModalHeader from "../Modals/ModalStructure/ModalHeader";
import ResizableDraggableWindow from "../ResizableWindow/ResizableDraggableWindow";
import { GifViewerPortal, NotepadWindow, NotepadBody } from "./styles";

const NOTEPAD_DEFAULT_SIZE = { width: 640, height: 480 };

function NotepadViewer({ windowId, file, onClose, onMinimize, onFocus }) {
  const [isFullWidth, setIsFullWidth] = useState(false);
  const { getWindowZIndex } = useTaskbarWindows();

  if (!file) return null;

  const zIndex = getWindowZIndex(windowId);

  return createPortal(
    <GifViewerPortal
      className="gif-viewer-root"
      style={{ zIndex }}
      onMouseDownCapture={(e) => {
        e.stopPropagation();
        onFocus?.();
      }}
    >
      <ResizableDraggableWindow
        isMaximized={isFullWidth}
        onToggleMaximize={() => setIsFullWidth((prev) => !prev)}
        defaultSize={NOTEPAD_DEFAULT_SIZE}
        defaultPosition={{ x: 160, y: 96 }}
        minWidth={360}
        minHeight={280}
      >
        {({ toggleMaximize, isMaximized }) => (
          <NotepadWindow isfullwidth={`${isMaximized}`}>
            <ModalHeader
              setModalWidth={toggleMaximize}
              icone={file.image}
              title={getProjectFileName(file)}
              minimize={minimize}
              max={max}
              closeIcon={closeIcon}
              closeModal={onClose}
              onMinimize={onMinimize}
            />
            <NotepadBody isfullwidth={`${isMaximized}`}>
              <img src={file.image} alt={getProjectFileName(file)} />
            </NotepadBody>
          </NotepadWindow>
        )}
      </ResizableDraggableWindow>
    </GifViewerPortal>,
    document.body
  );
}

export default NotepadViewer;
