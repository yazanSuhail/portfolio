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
  UOLDrive,
  freelance,
  BOL,
  uolMail,
  ibmCom,
  events,
  Carbon,
  ibmSpeed,
  starwood,
  wordpress,
  PvUol,
} from "../../../../assets";

import CarouselComponent from "../../../Carousel";
import { useShowPreviewContext } from "../../../../contexts/useBoolean";

// eslint-disable-next-line react/prop-types
function RightSide({ type, setProject, project }) {
  const { showPreview, togglePreview } = useShowPreviewContext();
  const [isActive, setIsActive] = useState(false);
  const [projectsItems, setProjectsItems] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const ibmItems = [
    {
      image: Carbon,
      legend: "Carbon design system",
    },
    {
      image: ibmCom,
      legend: "https://www.ibm.com/br-pt",
    },
    {
      image: events,
      legend: "https://www.ibm.com/events",
    },
    {
      image: ibmSpeed,
      legend: "https://www.ibm.com/br-pt/partnerplus",
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const uolItems = [
    {
      image: panelUolhostGif,
      legend:
        "Uol Host Domains and emails manager - Created with single spa micro frontend. You can manage your domains, E-mails, and groups. creating Email boxes and updating logos, emails, and more!",
    },
    {
      image: UOLDrive,
      legend: "UOLDrive E-mails backup manager  - Created with  Reactjs",
    },
    {
      image: BOL,
      legend:
        "https://produtos.uol.com.br/bol - static page - Created with  ReactJs",
    },
    {
      image: uolMail,
      legend:
        "E-mail, exactly like Gmail - Created with Angularjs, Ruby on rails. This is the paid version.",
    },
    {
      image: PvUol,
      legend:
        "https://email.uol.com.br/bem-vindo - static page  - Created with  velocity",
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const freelanceItems = [
    {
      image: starwood,
      legend:
        "https://starwood-treppenshop.de/ - Created with Integrate Adobe Commerce - Magento",
    },
    {
      image: wordpress,
      legend: "Created with Wordpress",
    },
  ];

  const handleClick = (projectName) => {
    setProject(projectName);
    setOpen(true);
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
  }, [freelanceItems, ibmItems, project, uolItems]);

  useEffect(() => {
    if (showPreview) {
      setIsActive(false);
      togglePreview();
      setProject("");
      setProjectsItems([]);
    }
  }, [setProject, showPreview, togglePreview]);

  const [open, setOpen] = React.useState(false);

  return (
    <>
      {isActive && (
        <CarouselComponent
          open={open}
          setOpen={setOpen}
          carouselItems={projectsItems}
        />
      )}
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
                    href="https://www.linkedin.com/in/yazan-alzubi-023603204/" rel="noreferrer">
                    <img src="https://static.licdn.com/aero-v1/sc/h/8s162nmbcnfkg7a0k8nq9wwqo" />
                  </a>
                </div>
                <div>
                  <a target="_blank" href="https://github.com/yazanSuhail" rel="noreferrer">
                    <img width="15rem" src={github} />
                  </a>
                </div>
              </CellContent>
            </Cell>
          </>
        )}
        {type === "myProjects" && (
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
        )}
      </RightSideContent>
    </>
  );
}

export default RightSide;
