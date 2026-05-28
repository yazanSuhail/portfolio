/** Windows XP desktop & icon context menus (classic shell) */

export const DESKTOP_CONTEXT_MENU = [
  {
    id: "arrange",
    label: "Arrange Icons By",
    submenu: [
      { id: "arrange-name", label: "Name" },
      { id: "arrange-size", label: "Size" },
      { id: "arrange-type", label: "Type" },
      { id: "arrange-modified", label: "Modified" },
      { type: "separator" },
      {
        id: "show-desktop-icons",
        label: "Show Desktop Icons",
        checkable: true,
      },
      {
        id: "desktop-cleanup",
        label: "Desktop Cleanup Wizard...",
        disabled: true,
      },
      { id: "auto-arrange", label: "Auto Arrange", checkable: true },
      {
        id: "lock-web-items",
        label: "Lock Web Items on Desktop",
        disabled: true,
      },
      { id: "align-to-grid", label: "Align to Grid", checkable: true },
    ],
  },
  { id: "refresh", label: "Refresh" },
  { type: "separator" },
  { id: "paste", label: "Paste", disabled: true },
  { id: "paste-shortcut", label: "Paste Shortcut", disabled: true },
  { type: "separator" },
  {
    id: "new",
    label: "New",
    submenu: [
      { id: "new-folder", label: "Folder" },
      { id: "new-shortcut", label: "Shortcut" },
      { id: "new-bmp", label: "Bitmap Image", disabled: true },
      { id: "new-contact", label: "Contact", disabled: true },
    ],
  },
  { type: "separator" },
  { id: "properties", label: "Properties" },
];

const iconMenuBase = [
  { id: "open", label: "Open" },
  { type: "separator" },
  { id: "create-shortcut", label: "Create Shortcut", disabled: true },
  { id: "delete", label: "Delete", disabled: true },
  { id: "rename", label: "Rename", disabled: true },
  { type: "separator" },
  { id: "properties", label: "Properties" },
];

export const ICON_CONTEXT_MENUS = {
  myComputer: [
    { id: "open", label: "Open" },
    { id: "explore", label: "Explore" },
    { type: "separator" },
    { id: "create-shortcut", label: "Create Shortcut", disabled: true },
    { id: "delete", label: "Delete", disabled: true },
    { id: "rename", label: "Rename", disabled: true },
    { type: "separator" },
    { id: "properties", label: "Properties" },
  ],
  myProjects: iconMenuBase,
  myMusic: [
    { id: "open", label: "Open" },
    { type: "separator" },
    { id: "create-shortcut", label: "Create Shortcut", disabled: true },
    { id: "delete", label: "Delete", disabled: true },
    { id: "rename", label: "Rename", disabled: true },
    { type: "separator" },
    { id: "properties", label: "Properties" },
  ],
};

export const DESKTOP_ICON_META = {
  myComputer: {
    name: "My Computer",
    type: "System Folder",
    location: "Portfolio Desktop",
    target: "myComputer",
  },
  myProjects: {
    name: "My Projects",
    type: "File Folder",
    location: "Portfolio Desktop",
    target: "myProjects",
  },
  myMusic: {
    name: "My Favorite Song",
    type: "MP3 Audio",
    location: "Portfolio Desktop",
    target: "myMusic",
  },
};

export const DEFAULT_ICON_POSITIONS = {
  myComputer: { x: 16, y: 16 },
  myProjects: { x: 16, y: 130 },
  myMusic: { x: 16, y: 244 },
};

export const ICON_ORDER = ["myComputer", "myProjects", "myMusic"];

export const GRID_SIZE = 8;
