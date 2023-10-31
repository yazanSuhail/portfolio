import React, { useState } from "react";

import Draggable from "react-draggable";

import {
  ModalContainer,
  ModalTitle,
  ModalContent,
  ModalDropDownMenu,
  DropBtn,
  DropdownContent,
} from "./styles";

const WindowsXPModal = ({ title, content }) => {
  const modalRef = React.createRef();
  const [isFileOpen, setIsFileOpen] = useState(false);

  const toggleDropdown = () => {
    setIsFileOpen(!isFileOpen);
  };

  return (
    <Draggable nodeRef={modalRef}>
      <ModalContainer ref={modalRef}>
        <ModalTitle>
          <div>{title}</div>
        </ModalTitle>
        <ModalDropDownMenu>
          <DropBtn className="dropbtn" onClick={toggleDropdown}>
            File
          </DropBtn>
          <DropBtn className="dropbtn" onClick={toggleDropdown}>
            Edit
          </DropBtn>
          <DropBtn className="dropbtn" onClick={toggleDropdown}>
            View
          </DropBtn>
          <DropBtn className="dropbtn" onClick={toggleDropdown}>
            Favorites
          </DropBtn>
          <DropBtn className="dropbtn" onClick={toggleDropdown}>
            Tools
          </DropBtn>
          <DropBtn className="dropbtn" onClick={toggleDropdown}>
            Help
          </DropBtn>
        </ModalDropDownMenu>
        <div>
          {isFileOpen && (
            <DropdownContent>
              <span>Create shortcut</span>
              <span>Delete file</span>
              <span>Rename file</span>
              <span>Properties</span>
              <div>Close</div>
            </DropdownContent>
          )}
        </div>

        <ModalContent>{content}</ModalContent>
      </ModalContainer>
    </Draggable>
  );
};

export default WindowsXPModal;
