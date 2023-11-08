import React, { useState } from "react";
import StartMenu from "./components/MainStartMenu";
import WindowsXPModal from "./components/Modals";
import { computer } from "./assets";
import {
  fileMenu,
  editMenu,
  viewMenu,
  toolsMenu,
  helpMenu,
  favorites,
} from "./Mocks/DesktopMenuMock";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const menus = [fileMenu, editMenu, viewMenu, toolsMenu, helpMenu, favorites];

  return (
    <>
      <WindowsXPModal
        icone={computer}
        title="My Computer"
        menus={menus}
        content={[]}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <StartMenu />
    </>
  );
}

export default App;
