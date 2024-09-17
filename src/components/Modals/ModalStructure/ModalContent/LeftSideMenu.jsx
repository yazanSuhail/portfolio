import { LeftSideMenu, Title, Inner, ListContainer } from "../../styles";

import {
  droparrows,
  viewInfo,
  ic2,
  wFjS,
  wf60,
  github,
  DoJ,
  O0N,
} from "../../../../assets";

function LeftSideMenuContent() {
  return (
    <LeftSideMenu>
      <Inner>
        <Title>
          System Tasks <img src={droparrows} />
        </Title>
        <ListContainer>
          <span>
            <img src={viewInfo} />
            View system information
          </span>
          <span>
            <img src={ic2} />
            Add or remove programs
          </span>

          <span>
            <img src={wFjS} />
            Change a setting
          </span>
        </ListContainer>
      </Inner>
      <Inner>
        <Title>
          Other Places <img src={droparrows} />
        </Title>
        <ListContainer>
          <span>
            <img src={wf60} />
            My Network Places
          </span>
          <span>
            <img src={DoJ} />
            My Documents
          </span>
          <span>
            <img src={O0N} />
            Shared Documents
          </span>
          <span>
            <img src={wFjS} />
            Control Panel
          </span>
        </ListContainer>
      </Inner>
      <Inner>
        <Title>
          System Tasks <img src={droparrows} />
        </Title>
        <ListContainer>
          <span>
            <img src={viewInfo} />
            View system information
          </span>
          <span>
            <img width="15rem" src={github} />
            <a target="_blank" href="https://github.com/yazanSuhail" rel="noreferrer">
              Github
            </a>
          </span>

          <span>
            <img
              width="15rem"
              src="https://static.licdn.com/aero-v1/sc/h/8s162nmbcnfkg7a0k8nq9wwqo"
            />
            <a
              target="_blank"
              href="https://www.linkedin.com/in/yazan-alzubi-023603204/" rel="noreferrer">
              Linkedin
            </a>
          </span>
        </ListContainer>
      </Inner>
    </LeftSideMenu>
  );
}

export default LeftSideMenuContent;
