import { ResizeHandle } from "./styles";

const EDGES = ["n", "s", "e", "w", "ne", "nw", "se", "sw"];

function ResizeHandles({ onStart }) {
  return (
    <>
      {EDGES.map((edge) => (
        <ResizeHandle
          key={edge}
          className="window-resize-handle"
          $edge={edge}
          onMouseDown={(event) => onStart(edge, event)}
        />
      ))}
    </>
  );
}

export default ResizeHandles;
