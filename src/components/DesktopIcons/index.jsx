import React, { useEffect, useState } from "react";
import { computer } from "../../assets";
import Draggable from "react-draggable";
import { IconsContainer, Icon } from "./styles";

function DesktopIcons({ openModal, setType }) {
  const [numberOfClicks, setnumberOfClicks] = useState(0);
  const modalRef = React.createRef();

  const handleClick = (event, type) => {
    console.log("type", type);
    setnumberOfClicks(event.detail);
    setType(type);
  };

  useEffect(() => {
    if (numberOfClicks === 2) {
      openModal();
    }
  }, [numberOfClicks]);

  return (
    <IconsContainer>
      <Draggable nodeRef={modalRef}>
        <Icon
          numberofclicks={`${numberOfClicks}`}
          ref={modalRef}
          onClick={(e) => handleClick(e, "myComputer")}>
          <img src={computer} alt="My Computer" />
          <div>My Computer</div>
        </Icon>
      </Draggable>
    </IconsContainer>
  );
}

export default DesktopIcons;
