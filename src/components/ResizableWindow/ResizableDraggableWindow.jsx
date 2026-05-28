import { useCallback, useRef, useState } from "react";
import Draggable from "react-draggable";
import ResizeHandles from "./ResizeHandles";
import { MaximizedShell, ResizableShell } from "./styles";
import { TASKBAR_HEIGHT, useWindowResize } from "../../hooks/useWindowResize";

function ResizableDraggableWindow({
  children,
  isMaximized,
  onToggleMaximize,
  defaultSize,
  defaultPosition = { x: 60, y: 32 },
  minWidth,
  minHeight,
}) {
  const nodeRef = useRef(null);
  const savedBounds = useRef(null);
  const [size, setSize] = useState(defaultSize);
  const [position, setPosition] = useState(defaultPosition);

  const { startResize } = useWindowResize({
    enabled: !isMaximized,
    size,
    setSize,
    position,
    setPosition,
    minWidth,
    minHeight,
  });

  const handleToggleMaximize = useCallback(() => {
    if (!isMaximized) {
      savedBounds.current = { size, position };
      onToggleMaximize();
      return;
    }

    if (savedBounds.current) {
      setSize(savedBounds.current.size);
      setPosition(savedBounds.current.position);
    }
    onToggleMaximize();
  }, [isMaximized, onToggleMaximize, size, position]);

  const handleDragStop = useCallback((_event, data) => {
    setPosition({ x: data.x, y: data.y });
  }, []);

  if (isMaximized) {
    return (
      <MaximizedShell $taskbarHeight={TASKBAR_HEIGHT}>
        {children({ toggleMaximize: handleToggleMaximize, isMaximized: true })}
      </MaximizedShell>
    );
  }

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".modal-drag-handle"
      cancel=".window-resize-handle"
      position={position}
      onStop={handleDragStop}
    >
      <ResizableShell
        ref={nodeRef}
        style={{
          width: size.width,
          height: size.height,
          pointerEvents: "auto",
        }}
      >
        <ResizeHandles onStart={startResize} />
        {children({
          toggleMaximize: handleToggleMaximize,
          isMaximized: false,
        })}
      </ResizableShell>
    </Draggable>
  );
}

export default ResizableDraggableWindow;
