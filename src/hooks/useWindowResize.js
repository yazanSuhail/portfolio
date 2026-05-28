import { useCallback, useRef } from "react";

export const TASKBAR_HEIGHT = 30;

export const WINDOW_MIN = { width: 420, height: 300 };

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function useWindowResize({
  enabled,
  size,
  setSize,
  position,
  setPosition,
  minWidth = WINDOW_MIN.width,
  minHeight = WINDOW_MIN.height,
}) {
  const resizeSession = useRef(null);

  const startResize = useCallback(
    (direction, event) => {
      if (!enabled) return;

      event.preventDefault();
      event.stopPropagation();

      resizeSession.current = {
        direction,
        startX: event.clientX,
        startY: event.clientY,
        startWidth: size.width,
        startHeight: size.height,
        startPosX: position.x,
        startPosY: position.y,
      };

      const onMouseMove = (moveEvent) => {
        const session = resizeSession.current;
        if (!session) return;

        const dx = moveEvent.clientX - session.startX;
        const dy = moveEvent.clientY - session.startY;
        const { direction: dir } = session;

        let nextWidth = session.startWidth;
        let nextHeight = session.startHeight;
        let nextX = session.startPosX;
        let nextY = session.startPosY;

        if (dir.includes("e")) {
          const maxW = window.innerWidth - session.startPosX - 8;
          nextWidth = clamp(session.startWidth + dx, minWidth, maxW);
        }

        if (dir.includes("w")) {
          const proposedWidth = session.startWidth - dx;
          const maxW = session.startPosX + session.startWidth - 8;
          nextWidth = clamp(proposedWidth, minWidth, maxW);
          nextX = session.startPosX + (session.startWidth - nextWidth);
        }

        if (dir.includes("s")) {
          const maxH =
            window.innerHeight - TASKBAR_HEIGHT - session.startPosY - 8;
          nextHeight = clamp(session.startHeight + dy, minHeight, maxH);
        }

        if (dir.includes("n")) {
          const proposedHeight = session.startHeight - dy;
          const maxH =
            session.startPosY + session.startHeight - TASKBAR_HEIGHT - 8;
          nextHeight = clamp(proposedHeight, minHeight, maxH);
          nextY = session.startPosY + (session.startHeight - nextHeight);
        }

        setSize({ width: nextWidth, height: nextHeight });
        if (dir.includes("w") || dir.includes("n")) {
          setPosition({ x: nextX, y: nextY });
        }
      };

      const onMouseUp = () => {
        resizeSession.current = null;
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        document.body.style.removeProperty("user-select");
        document.body.style.removeProperty("cursor");
      };

      document.body.style.userSelect = "none";
      document.body.style.cursor = event.target.style.cursor || "default";
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [enabled, size, position, setSize, setPosition, minWidth, minHeight],
  );

  return { startResize };
}
