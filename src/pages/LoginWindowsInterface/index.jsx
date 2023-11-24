import React from "react";
import { Grid, Head, Body, Footer, Center } from "./styles";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  return (
    <Grid>
      <Head>header</Head>
      <Body>
        <Center>
          <div>body1</div>
          <div>
            <button onClick={() => navigate("/desktop")}>LogIn</button>
          </div>
        </Center>
      </Body>
      <Footer>footer</Footer>
    </Grid>
  );
}

export default Login;
