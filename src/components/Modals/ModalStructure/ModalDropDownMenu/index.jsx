import React from "react";
import { windowsLogo } from "../../../../assets";
import {
  ModalDropDownMenu,
  DropBtn,
  MenuContainer,
  DropdownContent,
  Items,
} from "../../styles";

function ModalDropDownSubMenu({
  menus,
  isMenuOpen,
  setOpenMenu,
  setIsMenuOpen,
  openMenu,
  closeModal,
}) {
  const handleIsMenuOpen = () => {
    setIsMenuOpen(false);
    setOpenMenu(null);
  };

  const toggleDropdownOnHover = (menuItem) => {
    if (isMenuOpen) {
      setOpenMenu((prevMenu) => (prevMenu === menuItem ? null : menuItem));
    }
  };

  const toggleDropdown = (menuItem) => {
    setIsMenuOpen(true);
    setOpenMenu((prevMenu) => (prevMenu === menuItem ? null : menuItem));
  };

  return (
    <>
      <ModalDropDownMenu onMouseEnter={() => handleIsMenuOpen()}>
        <div>
          {menus.map((menu) => (
            <DropBtn
              key={menu.label}
              onClick={() => toggleDropdown(menu.label)}
              onMouseEnter={() => toggleDropdownOnHover(menu.label)}>
              {menu.label}
            </DropBtn>
          ))}
        </div>
        <div>
          <img src={windowsLogo} alt="windows Logo" width="50rem" />
        </div>
      </ModalDropDownMenu>
      {menus.map((menu) => (
        <MenuContainer name={menu.label} key={menu.label}>
          {openMenu === menu.label && (
            <DropdownContent>
              {menu.items.map((item) => (
                <div key={item.label}>
                  <Items name={item.label} active={`${item.active}`}>
                    {item.label === "Close" ? (
                      <div onClick={closeModal}>close</div>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </Items>
                </div>
              ))}
            </DropdownContent>
          )}
        </MenuContainer>
      ))}
    </>
  );
}

export default ModalDropDownSubMenu;
