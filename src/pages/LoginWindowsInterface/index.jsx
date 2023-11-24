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
          <RightSideContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            sint commodi natus consequuntur dolore, tenetur dicta autem quidem
            perspiciatis eveniet velit nam repellendus nobis eligendi adipisci
            ratione iusto facilis ipsum.
          </RightSideContent>
          <LeftSide>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            sint commodi natus consequuntur dolore, tenetur dicta autem quidem
            perspiciatis eveniet velit nam repellendus nobis eligendi adipisci
            ratione iusto facilis ipsum.
            <button onClick={() => navigate("/desktop")}>LogIn</button>
          </LeftSide>
        </Center>
      </Body>
      <Footer>footer</Footer>
    </Grid>
  );
}

export default Login;
