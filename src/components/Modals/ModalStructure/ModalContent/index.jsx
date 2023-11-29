import React, { useState } from "react";
import { ModalContent, GridSubContent } from "../../styles";

import LeftSideMenuContent from "./LeftSideMenu";
import RightSide from "./RightSide";

function ModalContentController({ handleIsMenuOpen, isFullWidth, type }) {
  const [project, setProject] = useState("");

  return (
    <ModalContent onMouseEnter={() => handleIsMenuOpen()}>
      <GridSubContent isfullwidth={`${isFullWidth}`}>
        <LeftSideMenuContent />
        <RightSide project={project} type={type} setProject={setProject} />
      </GridSubContent>
    </ModalContent>
  );
}

export default ModalContentController;
