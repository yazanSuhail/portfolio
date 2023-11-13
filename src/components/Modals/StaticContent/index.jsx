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
  Icons,
  Items,
  MenuContainer,
  GridSubContent,
  LeftSideMenu,
  RightSideContent,
  Title,
  Inner,
  ListContainer,
  Cell,
  CellContent,
  CellTitle,
  IconsContainer,
} from "../styles";

import {
  windowsLogo,
  computer,
  Go,
  halfArrouwDown,
  droparrows,
  viewInfo,
  ic2,
  wFjS,
  wf60,
  ccec,
  github,
  DoJ,
  O0N,
  mcu,
  minimize,
  vvfs,
  closeIcon,
  max,
} from "../../../assets";

import { submenuItems } from "../../../Mocks/DesktopMenuMock";

const ModalStaticContent = ({
  title,
  menus,
  isVisible,
  icone,
  closeModal,
  isFullWidth,
  setIsFullWidth,
}) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const toggleDropdown = (menuItem) => {
    setIsMenuOpen(true);
    setOpenMenu((prevMenu) => (prevMenu === menuItem ? null : menuItem));
  };

  const setModalWidth = () => {
    const currentPosition = { ...position };
    setPosition({ x: 0, y: 0 });
    setTimeout(() => {
      setIsFullWidth((prevMenu) => !prevMenu);
      setPosition(currentPosition);
    }, 100);
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
        <ModalContainer isfullwidth={`${isFullWidth}`}>
          <ModalTitle>
            <div>
              <div>
                <Icons src={icone} alt="windows Logo" width="50rem" />
              </div>
            </div>
            <div>{title}</div>
            <IconsContainer>
              <Icons
                width="1.5rem"
                height="1.5rem"
                src={minimize}
                alt="minimize"
              />
              <Icons
                onClick={setModalWidth}
                width="1.5rem"
                height="1.5rem"
                src={max}
                alt="close"
              />
              <Icons
                width="1.5rem"
                height="1.5rem"
                src={closeIcon}
                alt="close"
                onClick={closeModal}
              />
            </IconsContainer>
          </ModalTitle>
          <div>
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
          </div>
          <ModalContent onMouseEnter={() => handleIsMenuOpen()}>
            <GridSubContent>
              <LeftSideMenu>
                <Inner>
                  <Title>
                    System Tasks <img src={droparrows} />
                  </Title>
                  <ListContainer>
                    <span>
                      <img src={viewInfo} />
                      View system information
                    </span>
                    <span>
                      <img src={ic2} />
                      Add or remove programs
                    </span>

                    <span>
                      <img src={wFjS} />
                      Change a setting
                    </span>
                  </ListContainer>
                </Inner>
                <Inner>
                  <Title>
                    Other Places <img src={droparrows} />
                  </Title>
                  <ListContainer>
                    <span>
                      <img src={wf60} />
                      My Network Places
                    </span>
                    <span>
                      <img src={DoJ} />
                      My Documents
                    </span>
                    <span>
                      <img src={O0N} />
                      Shared Documents
                    </span>
                    <span>
                      <img src={wFjS} />
                      Control Panel
                    </span>
                  </ListContainer>
                </Inner>
                <Inner>
                  <Title>
                    System Tasks <img src={droparrows} />
                  </Title>
                  <ListContainer>
                    <span>
                      <img src={viewInfo} />
                      View system information
                    </span>
                    <span>
                      <img width="15rem" src={github} />
                      <a target="_blank" href="https://github.com/yazanSuhail">
                        Github
                      </a>
                    </span>

                    <span>
                      <img
                        width="15rem"
                        src="https://static.licdn.com/aero-v1/sc/h/8s162nmbcnfkg7a0k8nq9wwqo"
                      />
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/yazan-alzubi-023603204/">
                        Linkedin
                      </a>
                    </span>
                  </ListContainer>
                </Inner>
              </LeftSideMenu>
              <RightSideContent>
                <Cell>
                  <CellTitle>Files Stored on This Computer</CellTitle>
                  <CellContent>
                    <div>
                      <img src={ccec} />
                      <span>Shared Documents</span>
                    </div>
                    <div>
                      <img src={ccec} />
                      <span>Shared Documents</span>
                    </div>
                  </CellContent>
                </Cell>
                <Cell>
                  <CellTitle>Hard Disk Drives</CellTitle>
                  <CellContent>
                    <div>
                      <img src={mcu} /> <span> Local Disk ( C:)</span>
                    </div>
                  </CellContent>
                </Cell>
                <Cell>
                  <CellTitle>Devices with Removable Storage</CellTitle>
                  <CellContent>
                    <div>
                      <img src={vvfs} />
                      <span>CD Drive (D:)</span>
                    </div>
                  </CellContent>
                </Cell>
                <Cell>
                  <CellTitle>Files Stored on This Computer</CellTitle>
                  <CellContent>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/yazan-alzubi-023603204/">
                        <img src="https://static.licdn.com/aero-v1/sc/h/8s162nmbcnfkg7a0k8nq9wwqo" />
                      </a>
                    </div>
                    <div>
                      <a target="_blank" href="https://github.com/yazanSuhail">
                        <img width="15rem" src={github} />
                      </a>
                    </div>
                  </CellContent>
                </Cell>
              </RightSideContent>
            </GridSubContent>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

export default ModalStaticContent;
