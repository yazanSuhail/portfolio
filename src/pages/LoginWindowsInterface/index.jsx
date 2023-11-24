import React from "react";
import {
  Grid,
  Head,
  Body,
  Footer,
  Center,
  RightSideContent,
  LeftSide,
  MainUser,
  GuestUser,
} from "./styles";
import { duck, windowsXPLogo, turnoffwindows, chess } from "../../assets";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  return (
    <Grid>
      <Head />
      <Body>
        <Center>
          <LeftSide>
            <img src={windowsXPLogo} alt="windows XP Logo" />
            <div>To begin, click your user name</div>
          </LeftSide>
          <RightSideContent>
            <MainUser>
              <img src={duck} /> <span>The Dark Knight</span>
            </MainUser>
            <GuestUser>
              <img src={chess} onClick={() => navigate("/desktop")} />{" "}
              <span>Guest</span>
            </GuestUser>
          </RightSideContent>
        </Center>
      </Body>
      <Footer>
        <span>
          {" "}
          <img src={turnoffwindows} /> Turn Off computer
        </span>
        <span>
          After you log on, you can add or change accounts. <br /> Just go to
          Control Panel and click User Accounts.
        </span>
      </Footer>
    </Grid>
  );
}

export default Login;
