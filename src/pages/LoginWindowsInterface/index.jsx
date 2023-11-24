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
import { duck } from "../../assets";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  return (
    <Grid>
      <Head />
      <Body>
        <Center>
          <LeftSide>
            <div onClick={() => navigate("/desktop")}>Adding the logo</div>
          </LeftSide>
          <RightSideContent>
            <img src={duck} onClick={() => navigate("/desktop")} />{" "}
            <span>The Dark Knight</span>
          </RightSideContent>
        </Center>
      </Body>
      <Footer />
    </Grid>
  );
}

export default Login;
