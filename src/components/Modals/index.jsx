import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import {
  ModalContainer,
  ModalTitle,
  ModalContent,
  ModalDropDownMenu,
  DropBtn,
  DropdownContent,
  SubMenu,
  SearchMenu,
  FakeInputContainer,
  Close,
  Items,
} from "./styles";

import { windowsLogo, computer, Go, halfArrouwDown } from "../../assets";
import { submenuItems } from "../../Mocks/DesktopMenuMock";

const WindowsXPModal = ({
  title,
  menus,
  content,
  isVisible,
  icone,
  setIsVisible,
}) => {
  const modalRef = React.createRef();
  const [openMenu, setOpenMenu] = useState(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleDropdown = (menuItem) => {
    setMenuIsOpen(true);
    setOpenMenu((prevMenu) => (prevMenu === menuItem ? null : menuItem));
  };

  const handleToggleDropdown = (menuItem) => {
    if (menuIsOpen) {
      toggleDropdown(menuItem);
    }
  };

  return (
    <>
      {isVisible && (
        <Draggable nodeRef={modalRef}>
          <ModalContainer ref={modalRef}>
            <ModalTitle>
              <div>
                <div>
                  <img src={icone} alt="windows Logo" width="50rem" />
                </div>
              </div>{" "}
              <div>{title}</div>
            </ModalTitle>
            <ModalDropDownMenu>
              <div>
                {menus.map((menu) => (
                  <DropBtn
                    onMouseEnter={() => handleToggleDropdown(menu.label)}
                    key={menu.label}
                    onClick={() => toggleDropdown(menu.label)}>
                    {menu.label}
                  </DropBtn>
                ))}
              </div>
              <div>
                <img src={windowsLogo} alt="windows Logo" width="50rem" />
              </div>
            </ModalDropDownMenu>
            {menus.map((menu) => (
              <div key={menu.label}>
                {openMenu === menu.label && (
                  <DropdownContent>
                    {menu.items.map((item) => (
                      <div key={item.label}>
                        <Items disabled={item.active} name={item.label}>
                          {item.label}
                        </Items>
                      </div>
                    ))}
                  </DropdownContent>
                )}
              </div>
            ))}

            <SubMenu onClick={() => setOpenMenu(null)}>
              {submenuItems.map((item, index) => (
                <button key={index}>
                  {item.iconSrc && <img src={item.iconSrc} alt={item.label} />}
                  <span>{item.label}</span>
                </button>
              ))}
            </SubMenu>

            <SearchMenu>
              <div>Address</div>
              <FakeInputContainer>
                <div>
                  <img src={computer} width={"18rem"} />
                </div>
                <div>My Computer</div>
                <div>
                  {" "}
                  <img src={halfArrouwDown} alt="" />
                </div>
              </FakeInputContainer>
              <div>
                <button>
                  <img src={Go} /> Go
                </button>
              </div>
            </SearchMenu>
            <ModalContent>{content}</ModalContent>
          </ModalContainer>
        </Draggable>
      )}
    </>
  );
};

export default WindowsXPModal;
