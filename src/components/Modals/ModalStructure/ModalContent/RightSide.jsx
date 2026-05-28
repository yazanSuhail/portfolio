import {
  RightSideContent,
  Cell,
  CellContent,
  CellTitle,
} from "../../styles";

import { ccec, github, mcu, vvfs } from "../../../../assets";
import ProjectsExplorer from "../../../ProjectsExplorer";

function RightSide({ type, projectsPath, setProjectsPath }) {
  return (
    <RightSideContent>
      {type === "myComputer" && (
        <>
          <Cell>
            <CellTitle>Files Stored on This Computer</CellTitle>
            <CellContent>
              <div>
                <img src={ccec} alt="" />
                <span>Shared Documents</span>
              </div>
              <div>
                <img src={ccec} alt="" />
                <span>Shared Documents</span>
              </div>
            </CellContent>
          </Cell>
          <Cell>
            <CellTitle>Hard Disk Drives</CellTitle>
            <CellContent>
              <div>
                <img src={mcu} alt="" /> <span> Local Disk ( C:)</span>
              </div>
            </CellContent>
          </Cell>
          <Cell>
            <CellTitle>Devices with Removable Storage</CellTitle>
            <CellContent>
              <div>
                <img src={vvfs} alt="" />
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
                  href="https://www.linkedin.com/in/yazan-alzubi-023603204/"
                  rel="noreferrer"
                >
                  <img
                    src="https://static.licdn.com/aero-v1/sc/h/8s162nmbcnfkg7a0k8nq9wwqo"
                    alt="LinkedIn"
                  />
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://github.com/yazanSuhail"
                  rel="noreferrer"
                >
                  <img width="15rem" src={github} alt="GitHub" />
                </a>
              </div>
            </CellContent>
          </Cell>
        </>
      )}
      {type === "myProjects" && (
        <ProjectsExplorer
          projectsPath={projectsPath}
          setProjectsPath={setProjectsPath}
        />
      )}
    </RightSideContent>
  );
}

export default RightSide;
