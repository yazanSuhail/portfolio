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
}) {
  return (
    <ModalHeaderContainer onDoubleClick={setModalWidth}>
      <div>
        <div>
          <Icons src={icone} alt="windows Logo" width="50rem" />
        </div>
      </div>
      <div>{title}</div>
      <IconsContainer>
        <Icons width="1.5rem" height="1.5rem" src={minimize} alt="minimize" />
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
    </ModalHeaderContainer>
  );
}

export default ModalHeader;
