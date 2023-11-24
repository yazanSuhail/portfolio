import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { computer, folder } from "../../assets";
import Draggable from "react-draggable";
import { IconsContainer, Icon } from "./styles";

function DesktopIcons({ openModal, setType, selectedIcon, setSelectedIcon }) {
  const handleClick = (type) => {
    event.stopPropagation();
    setSelectedIcon(type);
    setType(type);
  };

  useEffect(() => {
    if (selectedIcon) {
      const newSelectedIcons = { myComputer: false, myProjects: false };
      newSelectedIcons[selectedIcon] = true;
    }
  }, [selectedIcon]);

  return (
    <IconsContainer>
      <Draggable>
        <Icon
          onDoubleClick={() => openModal()}
          isSelected={selectedIcon === "myComputer"}
          onClick={() => handleClick("myComputer")}>
          <img src={computer} alt="My Computer" />
          <span>My Computer</span>
        </Icon>
      </Draggable>

      <Draggable>
        <Icon
          onDoubleClick={() => openModal()}
          isSelected={selectedIcon === "myProjects"}
          onClick={() => handleClick("myProjects")}>
          <img src={folder} alt="My Projects" />
          <span>My Projects</span>
        </Icon>
      </Draggable>
    </IconsContainer>
  );
}

export default DesktopIcons;
