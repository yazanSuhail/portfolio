import { useRef, useState, useCallback, useEffect } from "react";
import { IconSlot } from "./styles";
import {
  clampToDesktop,
  snapPixelPosition,
  resolveDropPosition,
} from "../../utils/desktopGrid";

const DRAG_THRESHOLD = 4;

function DraggableDesktopIcon({
  iconId,
  position,
  alignToGrid,
  containerRef,
  iconLayout,
  slotWidth,
  slotHeight,
  onPositionChange,
  isSelected,
  onSelect,
  onOpen,
  onContextMenu,
  children,
}) {
  const [dragPos, setDragPos] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const offsetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const movedRef = useRef(false);
  const pointerIdRef = useRef(null);

  const displayPos = dragPos ?? position;

  const cancelRaf = useCallback(() => {
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  useEffect(() => cancelRaf, [cancelRaf]);

  const schedulePosition = useCallback(
    (next) => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        setDragPos(next);
        rafRef.current = null;
      });
    },
    []
  );

  const getBounds = useCallback(() => {
    const el = containerRef.current;
    if (!el) return { width: window.innerWidth, height: window.innerHeight };
    return { width: el.clientWidth, height: el.clientHeight };
  }, [containerRef]);

  const pointerToDesktop = useCallback(
    (clientX, clientY) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return { x: 0, y: 0 };
      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
    },
    [containerRef]
  );

  const computeDragPosition = useCallback(
    (clientX, clientY) => {
      const pointer = pointerToDesktop(clientX, clientY);
      let x = pointer.x - offsetRef.current.x;
      let y = pointer.y - offsetRef.current.y;
      ({ x, y } = clampToDesktop(x, y, getBounds(), iconLayout));
      if (alignToGrid) {
        ({ x, y } = snapPixelPosition(x, y));
      }
      return { x, y };
    },
    [alignToGrid, getBounds, iconLayout, pointerToDesktop]
  );

  const handlePointerDown = (e) => {
    if (e.button !== 0) return;
    const pointer = pointerToDesktop(e.clientX, e.clientY);
    offsetRef.current = {
      x: pointer.x - displayPos.x,
      y: pointer.y - displayPos.y,
    };
    movedRef.current = false;
    pointerIdRef.current = e.pointerId;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (pointerIdRef.current !== e.pointerId) return;

    const next = computeDragPosition(e.clientX, e.clientY);
    const dx = Math.abs(next.x - position.x);
    const dy = Math.abs(next.y - position.y);

    if (!isDragging && dx + dy < DRAG_THRESHOLD) return;

    if (!isDragging) {
      setIsDragging(true);
    }

    movedRef.current = true;
    schedulePosition(next);
  };

  const finishDrag = (e) => {
    if (pointerIdRef.current !== e.pointerId) return;

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* already released */
    }

    pointerIdRef.current = null;
    cancelRaf();

    if (isDragging && movedRef.current) {
      let final = dragPos ?? position;
      if (alignToGrid) {
        final = resolveDropPosition(final);
      }
      onPositionChange(iconId, final);
    }

    setDragPos(null);
    setIsDragging(false);
    movedRef.current = false;
  };

  const handleClick = (e) => {
    e.stopPropagation();
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    onSelect?.(iconId, e);
  };

  const handleDoubleClick = (e) => {
    e.stopPropagation();
    onOpen?.(iconId);
  };

  return (
    <IconSlot
      style={{
        transform: `translate3d(${Math.round(displayPos.x)}px, ${Math.round(displayPos.y)}px, 0)`,
      }}
      $slotWidth={slotWidth}
      $slotHeight={slotHeight}
      $dragging={isDragging}
      $selected={isSelected === true}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={finishDrag}
      onPointerCancel={finishDrag}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onContextMenu={onContextMenu}
    >
      {children}
    </IconSlot>
  );
}

export default DraggableDesktopIcon;
