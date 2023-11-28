import React, { useEffect, useState } from "react";
import StartMenu from "../../components/MainStartMenu";
import WindowsXPModal from "../../components/Modals";
import { computer } from "../../assets";
import {
  fileMenu,
  editMenu,
  viewMenu,
  toolsMenu,
  helpMenu,
  favorites,
} from "../../Mocks/DesktopMenuMock";
import { useModal } from "../../contexts/use-modal";
import DesktopIcons from "../../components/DesktopIcons";
import { DesktopContainer } from "./styles";
import Mobile from "../Mobile";
function MainPage() {
  const menus = [fileMenu, editMenu, viewMenu, toolsMenu, helpMenu, favorites];
  const { isModalOpen, openModal, closeModal } = useModal();
  const [type, setType] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleDocumentClick = () => {
      setSelectedIcon(null);
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      console.log("screenWidth", window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {screenWidth <= 720 ? (
        <Mobile />
      ) : (
        <DesktopContainer>
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
        </DesktopContainer>
      )}
    </>
  );
}

export default MainPage;
