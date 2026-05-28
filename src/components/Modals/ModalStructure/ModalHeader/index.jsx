import React from "react";
import { ModalHeaderContainer, IconsContainer, Icons } from "../../styles";

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
          onClick={(e) => {
            e.stopPropagation();
            onMinimize?.();
          }}
        />
        <Icons
          onClick={(e) => {
            e.stopPropagation();
            setModalWidth();
          }}
          width="1.5rem"
          height="1.5rem"
          src={max}
          alt="maximize"
        />
        <Icons
          width="1.5rem"
          height="1.5rem"
          src={closeIcon}
          alt="close"
          onClick={(e) => {
            e.stopPropagation();
            closeModal();
          }}
        />
      </IconsContainer>
    </ModalHeaderContainer>
  );
}

export default ModalHeader;
