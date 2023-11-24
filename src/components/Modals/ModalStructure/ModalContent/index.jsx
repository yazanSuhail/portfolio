import React from "react";
import { ModalContent, GridSubContent } from "../../styles";

import LeftSideMenuContent from "./LeftSideMenu";
import RightSide from "./RightSide";

function ModalContentController({ handleIsMenuOpen, isFullWidth, type }) {
  return (
    <ModalContent onMouseEnter={() => handleIsMenuOpen()}>
      <GridSubContent isfullwidth={`${isFullWidth}`}>
        <LeftSideMenuContent />
        <RightSide type={type} />
      </GridSubContent>
    </ModalContent>
  );
}

export default ModalContentController;
