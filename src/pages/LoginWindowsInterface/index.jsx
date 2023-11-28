import React, { useEffect, useState } from "react";
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
  Loading,
  Container,
  ActiveMainUser,
  InputContainer,
  Error,
  LoadingMainAccountContainer,
  LoadingImageMainAccount,
} from "./styles";
import { duck, windowsXPLogo, turnoffwindows, chess, Go } from "../../assets";
import { useNavigate } from "react-router-dom";

import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";

function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPasswordInterface, setShowPasswordInterface] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [account, setAccount] = useState("");
  console.log("account", account);
  const handleLogin = (account) => {
    if (account === "Main") {
      setAccount("Main");
    }

    if (account === "Guest") {
      setAccount("Guest");
    }

    if (inputValue === "evanescence2008") {
      setIsLoading(true);
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } else {
      setPasswordError(true);
    }
  };

  useEffect(() => {
    if (account === "Guest") {
      setIsLoading(true);
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    }
  }, [account]);

  const validatePassword = (value) => {
    setInputValue(value);
  };

  return (
    <Grid>
      <Head />
      <Body>
        <Center>
          <LeftSide>
            <img src={windowsXPLogo} alt="windows XP Logo" />
            <div>To begin, click your user name</div>
          </LeftSide>

          {!isLoading && (
            <>
              <RightSideContent>
                <>
                  {showPasswordInterface ? (
                    <>
                      <Container>
                        <ActiveMainUser>
                          <img src={duck} />
                          <div>
                            <span>The Dark Knight</span>
                            <br />
                            Type your password
                          </div>
                        </ActiveMainUser>
                      </Container>
                      <InputContainer>
                        <input
                          type="password"
                          value={inputValue}
                          onChange={(e) => validatePassword(e.target.value)}
                        />
                        {passwordError && (
                          <Error>Dude..I gave you a hint</Error>
                        )}
                        <img src={Go} onClick={() => handleLogin("Main")} />
                        <Tooltip
                          TransitionComponent={Fade}
                          TransitionProps={{ timeout: 1000 }}
                          title="Password is: evanescence2008">
                          <span>?</span>
                        </Tooltip>
                      </InputContainer>
                    </>
                  ) : (
                    <>
                      <MainUser onClick={() => setShowPasswordInterface(true)}>
                        <img src={duck} /> <span>The Dark Knight</span>
                      </MainUser>
                    </>
                  )}
                </>

                <GuestUser>
                  <img src={chess} onClick={() => handleLogin("Guest")} />{" "}
                  <span>
                    <span>Guest</span>
                    <br />
                    {isLoading && (
                      <Loading>loading your personal settings</Loading>
                    )}
                  </span>
                </GuestUser>
              </RightSideContent>
            </>
          )}

          {isLoading && account === "Main" && (
            <>
              <LoadingMainAccountContainer>
                <>
                  <LoadingImageMainAccount src={duck} />
                  <h1>The Dark Knight</h1>
                  <Loading>loading your personal settings..</Loading>
                </>
              </LoadingMainAccountContainer>
            </>
          )}

          {isLoading && account === "Guest" && (
            <>
              <RightSideContent>
                <GuestUser>
                  <img src={chess} onClick={() => handleLogin("Guest")} />{" "}
                  <span>
                    <span>Guest</span>
                    <br />
                    {isLoading && (
                      <Loading>loading your personal settings</Loading>
                    )}
                  </span>
                </GuestUser>
              </RightSideContent>
            </>
          )}
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
