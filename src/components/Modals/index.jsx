import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import {
  ModalContainer,
  ModalTitle,
  ModalContent,
  ModalDropDownMenu,
  DropBtn,
  DropdownContent,
} from "./styles";

import { windowsLogo, computer } from "../../assets";

const WindowsXPModal = ({ title, menus, content, isVisible, icone }) => {
  const modalRef = React.createRef();
  const [openMenu, setOpenMenu] = useState(null);

  const toggleDropdown = (menuItem) => {
    setOpenMenu((prevMenu) => (prevMenu === menuItem ? null : menuItem));
  };

  return (
    <>
      {isVisible && (
        <Draggable nodeRef={modalRef}>
          <ModalContainer onMouseLeave={() => setOpenMenu(null)} ref={modalRef}>
            <ModalTitle>
              <div>
                {" "}
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
                      <span key={item}>{item}</span>
                    ))}
                    <div>Close</div>
                  </DropdownContent>
                )}
              </div>
            ))}
            <ModalContent>{content}</ModalContent>
          </ModalContainer>
        </Draggable>
      )}
    </>
  );
};

export default WindowsXPModal;
