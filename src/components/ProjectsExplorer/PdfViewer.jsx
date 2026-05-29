import { useState } from "react";
import { createPortal } from "react-dom";
import { closeIcon, max, minimize, pdfIcon } from "../../assets";
import {
  getProjectPdfDescription,
  getProjectPdfFileName,
  getProjectPdfTitle,
} from "../../Mocks/projectsData";
import { downloadTextAsPdf } from "../../utils/downloadTextPdf";
import { useTaskbarWindows } from "../../contexts/taskbar-windows";
import ModalHeader from "../Modals/ModalStructure/ModalHeader";
import ResizableDraggableWindow from "../ResizableWindow/ResizableDraggableWindow";
import { GifViewerPortal } from "./styles";
import {
  PdfWindow,
  PdfMenuBar,
  PdfMenuItem,
  PdfToolbar,
  PdfToolButton,
  PdfToolbarDivider,
  PdfZoomSelect,
  PdfDocumentArea,
  PdfPage,
  PdfPageTitle,
  PdfPageBody,
  PdfStatusBar,
} from "./pdfStyles";

const PDF_DEFAULT_SIZE = { width: 720, height: 560 };
const ZOOM_LEVELS = [50, 75, 100, 125, 150, 200];
const MENU_ITEMS = [
  "File",
  "Edit",
  "View",
  "Document",
  "Tools",
  "Window",
  "Help",
];

function PdfViewer({ windowId, file, onClose, onMinimize, onFocus }) {
  const [isFullWidth, setIsFullWidth] = useState(false);
  const [zoom, setZoom] = useState(100);
  const { getWindowZIndex } = useTaskbarWindows();

  if (!file) return null;

  const zIndex = getWindowZIndex(windowId);
  const pdfFileName = getProjectPdfFileName(file);
  const description = getProjectPdfDescription(file);
  const zoomIndex = ZOOM_LEVELS.indexOf(zoom);

  const changeZoom = (delta) => {
    const nextIndex = Math.min(
      ZOOM_LEVELS.length - 1,
      Math.max(0, (zoomIndex === -1 ? 2 : zoomIndex) + delta)
    );
    setZoom(ZOOM_LEVELS[nextIndex]);
  };

  const isResume = file.id === "resume";

  const handleDownload = () => {
    const downloadName = isResume ? "yazan alzubi.pdf" : pdfFileName;
    downloadTextAsPdf(description, downloadName);
  };

  return createPortal(
    <GifViewerPortal
      className="pdf-viewer-root"
      style={{ zIndex }}
      onMouseDownCapture={(e) => {
        e.stopPropagation();
        onFocus?.();
      }}
    >
      <ResizableDraggableWindow
        isMaximized={isFullWidth}
        onToggleMaximize={() => setIsFullWidth((prev) => !prev)}
        defaultSize={PDF_DEFAULT_SIZE}
        defaultPosition={{ x: 120, y: 72 }}
        minWidth={420}
        minHeight={320}
      >
        {({ toggleMaximize, isMaximized }) => (
          <PdfWindow $maximized={isMaximized}>
            <ModalHeader
              setModalWidth={toggleMaximize}
              icone={pdfIcon}
              title={getProjectPdfTitle(file)}
              minimize={minimize}
              max={max}
              closeIcon={closeIcon}
              closeModal={onClose}
              onMinimize={onMinimize}
            />

            <PdfMenuBar>
              {MENU_ITEMS.map((item) => (
                <PdfMenuItem key={item}>{item}</PdfMenuItem>
              ))}
            </PdfMenuBar>

            <PdfToolbar>
              <PdfToolButton
                type="button"
                title="Zoom Out"
                disabled={zoom <= ZOOM_LEVELS[0]}
                onClick={() => changeZoom(-1)}
              >
                −
              </PdfToolButton>
              <PdfZoomSelect
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                aria-label="Zoom level"
              >
                {ZOOM_LEVELS.map((level) => (
                  <option key={level} value={level}>
                    {level}%
                  </option>
                ))}
              </PdfZoomSelect>
              <PdfToolButton
                type="button"
                title="Zoom In"
                disabled={zoom >= ZOOM_LEVELS[ZOOM_LEVELS.length - 1]}
                onClick={() => changeZoom(1)}
              >
                +
              </PdfToolButton>
              <PdfToolbarDivider />
              <PdfToolButton
                type="button"
                title="Fit Page"
                onClick={() => setZoom(100)}
              >
                Fit
              </PdfToolButton>
              {isResume && (
                <>
                  <PdfToolbarDivider />
                  <PdfToolButton
                    type="button"
                    title="Save a copy"
                    onClick={handleDownload}
                  >
                    Save
                  </PdfToolButton>
                </>
              )}
            </PdfToolbar>

            <PdfDocumentArea>
              <PdfPage $zoom={zoom}>
                <PdfPageTitle $zoom={zoom}>{file.folderName}</PdfPageTitle>
                <PdfPageBody $zoom={zoom}>
                  {description || "Add your project description in pdfDescription."}
                </PdfPageBody>
              </PdfPage>
            </PdfDocumentArea>

            <PdfStatusBar>
              <span>{pdfFileName}</span>
              <span>
                Page 1 of 1 · {zoom}%
              </span>
            </PdfStatusBar>
          </PdfWindow>
        )}
      </ResizableDraggableWindow>
    </GifViewerPortal>,
    document.body
  );
}

export default PdfViewer;
