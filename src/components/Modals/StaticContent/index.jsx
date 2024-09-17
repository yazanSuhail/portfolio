/* eslint-disable react/prop-types */
import  { useState } from "react";
import { ModalContainer } from "../styles";

import { minimize, closeIcon, max } from "../../../assets";

import { submenuItems } from "../../../Mocks/DesktopMenuMock";

import ModalContentController from "../ModalStructure/ModalContent";
import WindowHeader from "../ModalStructure/ModalContent/WindowHeader";

const ModalStaticContent = ({
  title,
  menus,
  isVisible,
  icone,
  closeModal,
  isFullWidth,
  setIsFullWidth,
  type,
}) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const setModalWidth = () => {
    const currentPosition = { ...position };
    setPosition({ x: 0, y: 0 });
    setTimeout(() => {
      setIsFullWidth((prevMenu) => !prevMenu);
      setPosition(currentPosition);
    }, 100);
  };

  const handleIsMenuOpen = () => {
    setIsMenuOpen(false);
    setOpenMenu(null);
  };

  return (
    <>
      {isVisible && (
        <ModalContainer isfullwidth={`${isFullWidth}`}>
          <WindowHeader
            setModalWidth={setModalWidth}
            icone={icone}
            title={title}
            minimize={minimize}
            max={max}
            closeIcon={closeIcon}
            closeModal={closeModal}
            setIsMenuOpen={setIsMenuOpen}
            menus={menus}
            isMenuOpen={isMenuOpen}
            setOpenMenu={setOpenMenu}
            openMenu={openMenu}
            handleIsMenuOpen={handleIsMenuOpen}
            submenuItems={submenuItems}
          />

          <ModalContentController
            handleIsMenuOpen={handleIsMenuOpen}
            isFullWidth={isFullWidth}
            type={type}
          />
        </ModalContainer>
      )}
    </>
  );
};

export default ModalStaticContent;
