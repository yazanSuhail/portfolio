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
import { useModal } from "./contexts/use-modal";
function App() {
  const menus = [fileMenu, editMenu, viewMenu, toolsMenu, helpMenu, favorites];
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <WindowsXPModal
        icone={computer}
        title="My Computer"
        menus={menus}
        content={[]}
        isVisible={isModalOpen}
        closeModal={closeModal}
      />
      <button onClick={openModal}>Open Modal</button>
      <button onClick={closeModal}>Close Modal</button>
      <StartMenu />
    </>
  );
}

export default App;
