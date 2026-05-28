import React from "react";
import {
  ModalDropDownMenu,
  MenuBarItems,
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
    <ModalDropDownMenu onMouseEnter={() => handleIsMenuOpen()}>
      <MenuBarItems>
        {menus.map((menu) => (
          <MenuContainer name={menu.label} key={menu.label}>
            <DropBtn
              type="button"
              onClick={() => toggleDropdown(menu.label)}
              onMouseEnter={() => toggleDropdownOnHover(menu.label)}
            >
              {menu.label}
            </DropBtn>
            {openMenu === menu.label && (
              <DropdownContent>
                {menu.items.map((item) => (
                  <div key={item.label}>
                    <Items name={item.label} active={`${item.active}`}>
                      {item.label === "Close" ? (
                        <div onClick={closeModal}>Close</div>
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
      </MenuBarItems>
    </ModalDropDownMenu>
  );
}

export default ModalDropDownSubMenu;
