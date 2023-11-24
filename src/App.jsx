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
  const [selectedIcon, setSelectedIcon] = useState(null);

  useEffect(() => {
    const handleDocumentClick = () => {
      setSelectedIcon(null);
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <>
      <DesktopIcons
        openModal={openModal}
        setType={setType}
        selectedIcon={selectedIcon}
        setSelectedIcon={setSelectedIcon}
      />
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
