import React, { useEffect, useState } from "react";
import {
  ModalContainer,
  ModalContent,
  SubMenu,
  GridSubContent,
  LeftSideMenu,
  RightSideContent,
  Title,
  Inner,
  ListContainer,
  Cell,
  CellContent,
  CellTitle,
} from "../styles";

import {
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

import ModalHeader from "../ModalStructure/ModalHeader";

import ModalDropDownSubMenu from "../ModalStructure/ModalDropDownMenu";

import FakeSearchMenu from "../ModalStructure/FakeSearchMenu";

import NavSubMenu from "../ModalStructure/NavSubMenu";

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
      {isVisible && type === "myComputer" && (
        <ModalContainer isfullwidth={`${isFullWidth}`}>
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
          <ModalContent onMouseEnter={() => handleIsMenuOpen()}>
            <GridSubContent isfullwidth={`${isFullWidth}`}>
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
