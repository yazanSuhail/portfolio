import React, { useState } from "react";
import {
  RightSideContent,
  Cell,
  CellContent,
  CellTitle,
  FirstProject,
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

function RightSide({ type }) {
  const [project, setProject] = useState("");
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
      {type === "myProjects" && (
        <ProjectsContainer>
          <FirstProject>
            <img width="100rem" height="40rem" src={UOL_logo} alt="UOL logo" />
          </FirstProject>
          <FirstProject>
            <img width="100rem" height="40rem" src={IBM} alt="UOL logo" />
          </FirstProject>
          <FirstProject>
            <img width="160rem" height="60rem" src={freelance} alt="UOL logo" />
          </FirstProject>
        </ProjectsContainer>
      )}
    </RightSideContent>
  );
}

export default RightSide;
