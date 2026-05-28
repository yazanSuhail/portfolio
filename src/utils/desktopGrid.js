import { ICON_ORDER, DESKTOP_ICON_META } from "../Mocks/DesktopContextMenuMock";
import {
  DEFAULT_ICON_SIZE_ID,
  getIconSizePreset,
} from "../Mocks/desktopIconSizes";

export { ICON_ORDER };

/** Fine snap while dragging — overlaps allowed */
export const DESKTOP_DRAG_SNAP = {
  stepX: 8,
  stepY: 8,
  paddingX: 8,
  paddingY: 8,
};

export const GRID_SIZE = DESKTOP_DRAG_SNAP.stepX;

export function getLayout(iconSizeId = DEFAULT_ICON_SIZE_ID) {
  return getIconSizePreset(iconSizeId).layout;
}

export function snapPixelPosition(x, y) {
  const { stepX, stepY, paddingX, paddingY } = DESKTOP_DRAG_SNAP;
  const snap = (value, step, origin) =>
    origin + Math.round((value - origin) / step) * step;

  return {
    x: Math.max(paddingX, snap(x, stepX, paddingX)),
    y: Math.max(paddingY, snap(y, stepY, paddingY)),
  };
}

export function layoutSlotToPixels(col, row, layout) {
  const { slotWidth, slotHeight, paddingX, paddingY, rowGap } = layout;
  return {
    x: paddingX + col * slotWidth,
    y: paddingY + row * (slotHeight + rowGap),
  };
}

export function clampToDesktop(x, y, bounds, layout) {
  const { slotWidth, slotHeight, taskbarHeight } = layout;
  const maxX = Math.max(0, bounds.width - slotWidth - 4);
  const maxY = Math.max(0, bounds.height - slotHeight - taskbarHeight - 4);
  return {
    x: Math.min(Math.max(0, x), maxX),
    y: Math.min(Math.max(0, y), maxY),
  };
}

export function resolveDropPosition(position) {
  return snapPixelPosition(position.x, position.y);
}

export function snapAllPositions(positions) {
  return Object.fromEntries(
    Object.entries(positions).map(([id, pos]) => [
      id,
      snapPixelPosition(pos.x, pos.y),
    ]),
  );
}

export function autoArrangePositions(
  order = ICON_ORDER,
  iconSizeId = DEFAULT_ICON_SIZE_ID,
) {
  const layout = getLayout(iconSizeId);
  return order.reduce((acc, iconId, index) => {
    acc[iconId] = layoutSlotToPixels(0, index, layout);
    return acc;
  }, {});
}

export const DEFAULT_ICON_POSITIONS = autoArrangePositions(ICON_ORDER);

export function sortIconOrder(order, sortBy) {
  const meta = DESKTOP_ICON_META;
  const next = [...order];

  switch (sortBy) {
    case "name":
      next.sort((a, b) => meta[a].name.localeCompare(meta[b].name));
      break;
    case "type":
      next.sort((a, b) => meta[a].type.localeCompare(meta[b].type));
      break;
    case "size":
      next.sort((a, b) => meta[b].name.length - meta[a].name.length);
      break;
    case "modified":
      next.reverse();
      break;
    default:
      break;
  }

  return next;
}

/** @deprecated */
export function snapToGrid(position) {
  return snapPixelPosition(position.x, position.y);
}
