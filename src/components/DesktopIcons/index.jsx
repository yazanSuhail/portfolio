import React, { useEffect, useState } from "react";
import { computer } from "../../assets";
import Draggable from "react-draggable";
import { IconsContainer, Icon } from "./styles";

function DesktopIcons({ openModal, setType }) {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const modalRef = React.createRef();

  const handleClick = (event) => {
    setNumberOfClicks(event.detail);
  };

  setType("myComputer");
  useEffect(() => {
    if (numberOfClicks === 2) {
      openModal();
    }
  }, [numberOfClicks]);

  return (
    <IconsContainer>
      <Draggable nodeRef={modalRef}>
        <Icon
          numberOfClicks={numberOfClicks}
          ref={modalRef}
          onClick={handleClick}>
          <img src={computer} alt="My Computer" />
          <div>My Computer</div>
        </Icon>
      </Draggable>
    </IconsContainer>
  );
}

export default DesktopIcons;
