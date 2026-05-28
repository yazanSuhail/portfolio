/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { ModalContainer } from "../styles";

import { minimize, closeIcon, max } from "../../../assets";

import { submenuItems } from "../../../Mocks/DesktopMenuMock";

import ModalContentController, {
  useProjectsNavigation,
} from "../ModalStructure/ModalContent";
import WindowHeader from "../ModalStructure/ModalContent/WindowHeader";
import {
  getProjectsAddress,
  getProjectsWindowTitle,
} from "../ModalStructure/getProjectsAddress";
import { useTaskbarWindows } from "../../../contexts/taskbar-windows";

const ModalStaticContent = ({
  title,
  menus,
  isVisible,
  icone,
  closeModal,
  isFullWidth,
  setIsFullWidth,
  type,
  onMinimize,
}) => {
  const { updateExplorer } = useTaskbarWindows();
  const [openMenu, setOpenMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const projectsNav = useProjectsNavigation(type);
  const address = getProjectsAddress(type, projectsNav.projectsPath);
  const windowTitle =
    type === "myProjects"
      ? getProjectsWindowTitle(projectsNav.projectsPath)
      : title;

  useEffect(() => {
    updateExplorer(windowTitle, icone);
  }, [windowTitle, icone, updateExplorer]);

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
            title={windowTitle}
            minimize={minimize}
            max={max}
            closeIcon={closeIcon}
            closeModal={closeModal}
            onMinimize={onMinimize}
            setIsMenuOpen={setIsMenuOpen}
            menus={menus}
            isMenuOpen={isMenuOpen}
            setOpenMenu={setOpenMenu}
            openMenu={openMenu}
            handleIsMenuOpen={handleIsMenuOpen}
            submenuItems={submenuItems}
            type={type}
            address={address}
            onProjectsBack={projectsNav.handleProjectsBack}
          />

          <ModalContentController
            handleIsMenuOpen={handleIsMenuOpen}
            isFullWidth={isFullWidth}
            type={type}
            projectsPath={projectsNav.projectsPath}
            setProjectsPath={projectsNav.setProjectsPath}
          />
        </ModalContainer>
      )}
    </>
  );
};

export default ModalStaticContent;
