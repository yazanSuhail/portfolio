import React from "react";
import {
  Grid,
  Head,
  Body,
  Footer,
  Center,
  RightSideContent,
  LeftSide,
} from "./styles";
import { duck, windowsXPLogo, turnoffwindows } from "../../assets";
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
            <img src={duck} onClick={() => navigate("/desktop")} />{" "}
            <span>The Dark Knight</span>
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
