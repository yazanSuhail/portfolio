import React, { useEffect, useState } from "react";
import { computer } from "../../assets";
import Draggable from "react-draggable";
import { IconsContainer, Icon } from "./styles";

function DesktopIcons({ openModal, setType }) {
  const [numberOfClicks, setnumberOfClicks] = useState(0);
  const modalRef = React.createRef();

  const handleClick = (event) => {
    setnumberOfClicks(event.detail);
  };

  useEffect(() => {
    if (numberOfClicks === 2) {
      openModal();
    }
  }, [numberOfClicks]);

  return (
    <IconsContainer onClick={() => setType("myComputer")}>
      <Draggable nodeRef={modalRef}>
        <Icon
          numberofclicks={`${numberOfClicks}`}
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
