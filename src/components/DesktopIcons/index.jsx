import styled from "styled-components";
import React, { useEffect, useState, useRef } from "react";
import { computer, folder } from "../../assets";
import Draggable from "react-draggable";
import { IconsContainer, Icon } from "./styles";

function DesktopIcons({ openModal, setType, selectedIcon, setSelectedIcon }) {
  const iconRef1 = useRef(null);
  const iconRef2 = useRef(null);

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
      <Draggable nodeRef={iconRef1}>
        <Icon
          ref={iconRef1}
          onDoubleClick={() => openModal()}
          isselected={`${selectedIcon === "myComputer"}`}
          onClick={() => handleClick("myComputer")}>
          <img src={computer} alt="My Computer" />
          <span>My Computer</span>
        </Icon>
      </Draggable>

      <Draggable nodeRef={iconRef2}>
        <Icon
          ref={iconRef2}
          onDoubleClick={() => openModal()}
          isselected={`${selectedIcon === "myProjects"}`}
          onClick={() => handleClick("myProjects")}>
          <img src={folder} alt="My Projects" />
          <span>My Projects</span>
        </Icon>
      </Draggable>
    </IconsContainer>
  );
}

export default DesktopIcons;
