import React from "react";
import Header from "./components/MainStartMenu";
import WindowsXPModal from "./components/Modals";
import { computer } from "./assets";
import {
  fileMenu,
  editMenu,
  viewMenu,
  toolsMenu,
  helpMenu,
} from "./Mocks/DesktopMenuMock";

function App() {
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
