import React from "react";

import Draggable from "react-draggable";

import { ModalContainer, ModalTitle, ModalContent } from "./styles";

const WindowsXPModal = ({ title, content }) => {
  const modalRef = React.createRef();

  return (
    <Draggable nodeRef={modalRef}>
      <ModalContainer ref={modalRef}>
        <ModalTitle>
          <div>{title}</div>
        </ModalTitle>
        <ModalContent>{content}</ModalContent>
      </ModalContainer>
    </Draggable>
  );
};

export default WindowsXPModal;
