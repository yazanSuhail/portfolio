import {
  windowsLogo,
  computer,
  back,
  forward,
  search,
  folder,
  folderWithList,
  folderWithBackToStart,
} from "../assets";

export const fileMenu = {
  label: "File",
  items: ["Create shortcut", "Delete", "Rename", "Properties", "close"],
};

export const editMenu = {
  label: "Edit",
  items: [
    "Undo",
    "Cut",
    "Copy",
    "Paste",
    "Paste Shortcut",
    "Copy To Folder...",
    "Move To Folder...",
    "Select All",
    "Invert Selection",
  ],
};

export const viewMenu = {
  label: "View",
  items: [
    "ToolBars",
    "Status Bar",
    "Explorer Bar",
    "Thumbnails",
    "Titles",
    "Icons",
    "List",
    "Details",
    "Arrange Icons By",
    "Choose Details",
    "Go to",
    "Refresh",
  ],
};

export const toolsMenu = {
  label: "Tools",
  items: [
    "Map Network Drive...",
    "Desconnect Network Drive",
    "Syncronize...",
    "FilderOptions",
  ],
};

export const helpMenu = {
  label: "Help",
  items: [
    "Help and Support Center",
    "Is this copy of Windows Legal",
    "About Windows",
  ],
};

export const submenuItems = [
  { iconSrc: back, label: "Back" },
  { iconSrc: forward, label: "" },
  { iconSrc: folderWithBackToStart, label: "" },
  { iconSrc: search, label: "Search" },
  { iconSrc: folder, label: "Folders" },
  { iconSrc: folderWithList, label: "Folder" },
];
