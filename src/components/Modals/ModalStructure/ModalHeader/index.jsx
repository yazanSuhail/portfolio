import React from "react";
import {
  ModalHeaderContainer,
  ModalTitleIcon,
  ModalTitleText,
  WindowControls,
  Icons,
} from "../../styles";

function ModalHeader({
  setModalWidth,
  icone,
  title,
  minimize,
  max,
  closeIcon,
  closeModal,
  onMinimize,
}) {
  return (
    <ModalHeaderContainer
      className="modal-drag-handle"
      onDoubleClick={setModalWidth}
    >
      <ModalTitleIcon src={icone} alt="" />
      <ModalTitleText>{title}</ModalTitleText>
      <WindowControls>
        <Icons
          src={minimize}
          alt="Minimize"
          onClick={(e) => {
            e.stopPropagation();
            onMinimize?.();
          }}
        />
        <Icons
          src={max}
          alt="Maximize"
          onClick={(e) => {
            e.stopPropagation();
            setModalWidth();
          }}
        />
        <Icons
          src={closeIcon}
          alt="Close"
          onClick={(e) => {
            e.stopPropagation();
            closeModal();
          }}
        />
      </WindowControls>
    </ModalHeaderContainer>
  );
}

export default ModalHeader;
