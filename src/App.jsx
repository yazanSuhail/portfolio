import React, { useEffect, useState } from "react";
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
import { useModal } from "./contexts/use-modal";
import DesktopIcons from "./components/DesktopIcons";

function App() {
  const menus = [fileMenu, editMenu, viewMenu, toolsMenu, helpMenu, favorites];
  const { isModalOpen, openModal, closeModal } = useModal();
  const [type, setType] = useState("");

  return (
    <>
      <DesktopIcons openModal={openModal} setType={setType} />
      <WindowsXPModal
        icone={computer}
        title="My Computer"
        menus={menus}
        content={[]}
        isVisible={isModalOpen}
        closeModal={closeModal}
        type={type}
      />
      <StartMenu />
    </>
  );
}

export default App;
