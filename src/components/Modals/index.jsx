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
  MenuContainer,
  GridSubContent,
  LeftSideMenu,
  RightSideContent,
  Title,
  Inner,
  ListContainer,
} from "./styles";

import {
  windowsLogo,
  computer,
  Go,
  halfArrouwDown,
  droparrows,
} from "../../assets";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleDropdown = (menuItem) => {
    setIsMenuOpen(true);
    setOpenMenu((prevMenu) => (prevMenu === menuItem ? null : menuItem));
  };

  const toggleDropdownOnHover = (menuItem) => {
    if (isMenuOpen) {
      setOpenMenu((prevMenu) => (prevMenu === menuItem ? null : menuItem));
    }
  };

  const handleIsMenuOpen = () => {
    setIsMenuOpen(false);
    setOpenMenu(null);
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
              </div>
              <div>{title}</div>
            </ModalTitle>
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
                        <Items name={item.label} active={item.active}>
                          {item.label}
                        </Items>
                      </div>
                    ))}
                  </DropdownContent>
                )}
              </MenuContainer>
            ))}

            <SubMenu onMouseEnter={() => handleIsMenuOpen()}>
              {submenuItems.map((item, index) => (
                <button key={index}>
                  {item.iconSrc && <img src={item.iconSrc} alt={item.label} />}
                  <span>{item.label}</span>
                </button>
              ))}
            </SubMenu>

            <SearchMenu onMouseEnter={() => handleIsMenuOpen()}>
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
            <ModalContent onMouseEnter={() => handleIsMenuOpen()}>
              <GridSubContent>
                <LeftSideMenu>
                  <Inner>
                    <Title>
                      System Tasks <img src={droparrows} />
                    </Title>
                    <ListContainer>
                      <span>View system information</span>
                      <span>Add or remove programs</span>
                      <span>Change a setting</span>
                    </ListContainer>
                  </Inner>
                  <div>
                    <span>Other Places</span>
                    <span>View system information</span>
                    <span>Add or remove programs</span>
                    <span>Change a setting</span>
                  </div>
                  <div>
                    <span>Details</span>
                    <span>View system information</span>
                    <span>Add or remove programs</span>
                    <span>Change a setting</span>
                  </div>
                </LeftSideMenu>
                <RightSideContent>{content}</RightSideContent>
              </GridSubContent>
            </ModalContent>
          </ModalContainer>
        </Draggable>
      )}
    </>
  );
};

export default WindowsXPModal;
