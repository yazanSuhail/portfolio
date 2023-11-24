import React from "react";

import ModalHeader from "../../ModalStructure/ModalHeader";

import ModalDropDownSubMenu from "../../ModalStructure/ModalDropDownMenu";

import FakeSearchMenu from "../../ModalStructure/FakeSearchMenu";

import NavSubMenu from "../../ModalStructure/NavSubMenu";

function WindowHeader({
  setModalWidth,
  icone,
  title,
  minimize,
  max,
  closeIcon,
  closeModal,
  setIsMenuOpen,
  menus,
  isMenuOpen,
  setOpenMenu,
  openMenu,
  handleIsMenuOpen,
  submenuItems,
}) {
  return (
    <>
      <ModalHeader
        onDoubleClick={setModalWidth}
        setModalWidth={setModalWidth}
        icone={icone}
        title={title}
        minimize={minimize}
        max={max}
        closeIcon={closeIcon}
        closeModal={closeModal}
      />
      <ModalDropDownSubMenu
        setIsMenuOpen={setIsMenuOpen}
        menus={menus}
        isMenuOpen={isMenuOpen}
        setOpenMenu={setOpenMenu}
        openMenu={openMenu}
        closeModal={closeModal}
      />
      <NavSubMenu
        handleIsMenuOpen={handleIsMenuOpen}
        submenuItems={submenuItems}
      />
      <FakeSearchMenu handleIsMenuOpen={handleIsMenuOpen} />
    </>
  );
}

export default WindowHeader;
