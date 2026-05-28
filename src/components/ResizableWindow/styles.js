import styled from "styled-components";

export const ResizableShell = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const MaximizedShell = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: ${({ $taskbarHeight }) => $taskbarHeight}px;
  pointer-events: auto;
  display: flex;
  flex-direction: column;
`;

export const ResizeHandle = styled.div`
  position: absolute;
  z-index: 20;
  touch-action: none;

  ${({ $edge }) => {
    switch ($edge) {
      case "n":
        return `
          top: 0;
          left: 8px;
          right: 8px;
          height: 4px;
          cursor: n-resize;
        `;
      case "s":
        return `
          bottom: 0;
          left: 8px;
          right: 8px;
          height: 4px;
          cursor: s-resize;
        `;
      case "e":
        return `
          top: 8px;
          right: 0;
          bottom: 8px;
          width: 4px;
          cursor: e-resize;
        `;
      case "w":
        return `
          top: 8px;
          left: 0;
          bottom: 8px;
          width: 4px;
          cursor: w-resize;
        `;
      case "ne":
        return `
          top: 0;
          right: 0;
          width: 8px;
          height: 8px;
          cursor: ne-resize;
        `;
      case "nw":
        return `
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          cursor: nw-resize;
        `;
      case "se":
        return `
          bottom: 0;
          right: 0;
          width: 12px;
          height: 12px;
          cursor: se-resize;
        `;
      case "sw":
        return `
          bottom: 0;
          left: 0;
          width: 8px;
          height: 8px;
          cursor: sw-resize;
        `;
      default:
        return "";
    }
  }}
`;
