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
  items: [
    { label: "Create shortcut", active: false },
    { label: "Delete", active: false },
    { label: "Rename", active: false },
    { label: "Properties", active: false },
    { label: "close", active: true },
  ],
};

export const editMenu = {
  label: "Edit",
  items: [
    { label: "Undo", active: false },
    { label: "Cut", active: false },
    { label: "Copy", active: false },
    { label: "Paste", active: false },
    { label: "Paste Shortcut", active: false },
    { label: "Move To Folder...", active: false },
    { label: "Select All", active: true },
    { label: "Invert Selection", active: true },
  ],
};

export const viewMenu = {
  label: "View",
  items: [
    { label: "ToolBars", active: false },
    { label: "Status Bar", active: false },
    { label: "Explorer Bar", active: true },
    { label: "Thumbnails", active: true },
    { label: "Titles", active: true },
    { label: "Icons", active: true },
    { label: "List", active: true },
    { label: "Details", active: true },
    { label: "Arrange Icons By", active: true },
    { label: "Choose Details", active: true },
    { label: "Go to", active: true },
    { label: "Refresh", active: true },
  ],
};

export const toolsMenu = {
  label: "Tools",
  items: [
    { label: "Map Network Drive...", active: false },
    { label: "Desconnect Network Drive", active: false },
    { label: "Syncronize...", active: false },
    { label: "FilderOptions", active: false },
  ],
};

export const helpMenu = {
  label: "Help",
  items: [
    { label: "Help and Support Center", active: false },
    { label: "Is this copy of Windows Legal", active: false },
    { label: "About Windows", active: false },
  ],
};

export const favorites = {
  label: "Favorites",
  items: [
    { label: "Add to Favorites", active: true },
    { label: "Organize Favorites...", active: true },
    { label: "Links", active: true },
    { label: "MSN.com", active: true },
    { label: "Radio Station Guide", active: true },
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
