import React, { useState, useEffect } from "react";
import {
  RightSideContent,
  Cell,
  CellContent,
  CellTitle,
  Project,
  ProjectsContainer,
} from "../../styles";

import {
  ccec,
  github,
  mcu,
  vvfs,
  panelUolhostGif,
  UOL_logo,
  IBM,
  freelance,
} from "../../../../assets";

import CarouselComponent from "../../../Carousel";
import { useShowPreviewContext } from "../../../../contexts/useBoolean";

function RightSide({ type, setProject, project }) {
  const { showPreview, togglePreview } = useShowPreviewContext();

  const [isActive, setIsActive] = useState(false);
  const [projectsItems, setProjectsItems] = useState([]);

  const ibmItems = [
    { image: IBM, legend: "Uol Host Domains and emails manager" },
  ];

  const uolItems = [
    { image: panelUolhostGif, legend: "Uol Host Domains and emails manager" },
  ];

  const freelanceItems = [
    { image: ccec, legend: "Uol Host Domains and emails manager" },
  ];

  const handleClick = (projectName) => {
    setProject(projectName);
  };

  useEffect(() => {
    if (project !== "") {
      setIsActive(true);
    }

    if (project === "ibm") {
      setProjectsItems(ibmItems);
    }
    if (project === "uol") {
      setProjectsItems(uolItems);
    }
    if (project === "freelance") {
      setProjectsItems(freelanceItems);
    }
  }, [project]);

  useEffect(() => {
    if (showPreview) {
      setIsActive(false);
      togglePreview();
    }
  }, [showPreview]);

  return (
    <RightSideContent>
      {type === "myComputer" && (
        <>
          <Cell>
            <CellTitle>Files Stored on This Computer</CellTitle>
            <CellContent>
              <div>
                <img src={ccec} />
                <span>Shared Documents</span>
              </div>
              <div>
                <img src={ccec} />
                <span>Shared Documents</span>
              </div>
            </CellContent>
          </Cell>
          <Cell>
            <CellTitle>Hard Disk Drives</CellTitle>
            <CellContent>
              <div>
                <img src={mcu} /> <span> Local Disk ( C:)</span>
              </div>
            </CellContent>
          </Cell>
          <Cell>
            <CellTitle>Devices with Removable Storage</CellTitle>
            <CellContent>
              <div>
                <img src={vvfs} />
                <span>CD Drive (D:)</span>
              </div>
            </CellContent>
          </Cell>
          <Cell>
            <CellTitle>Files Stored on This Computer</CellTitle>
            <CellContent>
              <div>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/yazan-alzubi-023603204/">
                  <img src="https://static.licdn.com/aero-v1/sc/h/8s162nmbcnfkg7a0k8nq9wwqo" />
                </a>
              </div>
              <div>
                <a target="_blank" href="https://github.com/yazanSuhail">
                  <img width="15rem" src={github} />
                </a>
              </div>
            </CellContent>
          </Cell>
        </>
      )}
      {type === "myProjects" &&
        (isActive ? (
          <CarouselComponent carouselItems={projectsItems} />
        ) : (
          <>
            <ProjectsContainer>
              <Project onClick={() => handleClick("uol")}>
                <img
                  width="100rem"
                  height="40rem"
                  src={UOL_logo}
                  alt="UOL logo"
                />
              </Project>
              <Project onClick={() => handleClick("ibm")}>
                <img width="100rem" height="40rem" src={IBM} alt="IBM logo" />
              </Project>
              <Project onClick={() => handleClick("freelance")}>
                <img
                  width="160rem"
                  height="60rem"
                  src={freelance}
                  alt="freelance logo"
                />
              </Project>
            </ProjectsContainer>
          </>
        ))}
    </RightSideContent>
  );
}

export default RightSide;
