import { useState } from "react";

import "./App.css";
import Header from "./components/MainStartMenu";
import WindowsXPModal from "./components/Modals";
import { computer } from "./assets";
function App() {
  const fileMenu = {
    label: "File",
    items: ["Create shortcut", "Delete", "Rename", "Properties", "close"],
  };

  const editMenu = {
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

  const viewMenu = {
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

  const toolsMenu = {
    label: "Tools",
    items: [
      "Map Network Drive...",
      "Desconnect Network Drive",
      "Syncronize...",
      "FilderOptions",
    ],
  };

  const helpMenu = {
    label: "Help",
    items: [
      "Help and Support Center",
      "Is this copy of Windows Legale",
      "About Windows",
    ],
  };

  const menus = [fileMenu, editMenu, viewMenu, toolsMenu, helpMenu];

  const modalContent =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quis corporis odio eos hic quae harum neque quo sequi labore, corrupti provident soluta laborum possimus enim laboriosam, nesciunt, deleniti porro.";

  return (
    <>
      <Header />
      <WindowsXPModal
        icone={computer}
        title="My Computer"
        menus={menus}
        content={modalContent}
        isVisible={true}
      />
    </>
  );
}

export default App;
