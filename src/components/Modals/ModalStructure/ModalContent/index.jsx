import { useState, useEffect, useCallback } from "react";
import { ModalContent, GridSubContent } from "../../styles";

import LeftSideMenuContent from "./LeftSideMenu";
import RightSide from "./RightSide";

function ModalContentController({
  handleIsMenuOpen,
  isFullWidth,
  type,
  projectsPath,
  setProjectsPath,
}) {
  return (
    <ModalContent onMouseEnter={() => handleIsMenuOpen()}>
      <GridSubContent isfullwidth={`${isFullWidth}`}>
        <LeftSideMenuContent />
        <RightSide
          type={type}
          projectsPath={projectsPath}
          setProjectsPath={setProjectsPath}
        />
      </GridSubContent>
    </ModalContent>
  );
}

export function useProjectsNavigation(type) {
  const [projectsPath, setProjectsPath] = useState(null);

  useEffect(() => {
    setProjectsPath(null);
  }, [type]);

  const handleProjectsBack = useCallback(() => {
    if (projectsPath?.projectId) {
      setProjectsPath({ companyId: projectsPath.companyId });
      return;
    }
    if (projectsPath?.companyId) {
      setProjectsPath(null);
    }
  }, [projectsPath]);

  return {
    projectsPath,
    setProjectsPath,
    handleProjectsBack,
  };
}

export default ModalContentController;
