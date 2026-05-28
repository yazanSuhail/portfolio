export const DESKTOP_ICON_SIZES = [
  {
    id: "small",
    label: "Small icons",
    iconPx: 32,
    fontSize: 10,
    labelMaxWidth: 76,
    layout: {
      slotWidth: 88,
      slotHeight: 84,
      paddingX: 16,
      paddingY: 16,
      rowGap: 10,
      taskbarHeight: 30,
    },
  },
  {
    id: "medium",
    label: "Medium icons",
    iconPx: 48,
    fontSize: 11,
    labelMaxWidth: 100,
    layout: {
      slotWidth: 108,
      slotHeight: 100,
      paddingX: 16,
      paddingY: 16,
      rowGap: 14,
      taskbarHeight: 30,
    },
  },
  {
    id: "large",
    label: "Large icons",
    iconPx: 64,
    fontSize: 12,
    labelMaxWidth: 120,
    layout: {
      slotWidth: 132,
      slotHeight: 118,
      paddingX: 16,
      paddingY: 16,
      rowGap: 16,
      taskbarHeight: 30,
    },
  },
];

export const DEFAULT_ICON_SIZE_ID = "medium";

export function getIconSizePreset(id) {
  return (
    DESKTOP_ICON_SIZES.find((s) => s.id === id) ??
    DESKTOP_ICON_SIZES.find((s) => s.id === DEFAULT_ICON_SIZE_ID)
  );
}
