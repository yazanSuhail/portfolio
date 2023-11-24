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
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  return (
    <Grid>
      <Head />
      <Body>
        <Center>
          <LeftSide>
            <button onClick={() => navigate("/desktop")}>LogIn</button>
          </LeftSide>
          <RightSideContent>
            <button onClick={() => navigate("/desktop")}>Logout</button>
          </RightSideContent>
        </Center>
      </Body>
      <Footer>footer</Footer>
    </Grid>
  );
}

export default Login;
