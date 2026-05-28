import { useState, useEffect } from "react";
import {
  StartMenuContainer,
  StartButtonWrapper,
  StartMenuButton,
  MinimizContainer,
  NotificationsContainer,
  FirewallWrapper,
  SecurityBalloon,
  SecurityBalloonTitle,
  SecurityBalloonBody,
} from "./styles";
import { startMenuBtn, sound, usb, firewall } from "../../assets";
import { useLocation } from 'react-router-dom';
import { StartMenuList } from "../StartMenuList";
import TaskbarWindows from "../TaskbarWindows";

function StartMenu() {
  const date = new Date();
  const [currentTime, setCurrentTime] = useState(date);
  const [openList, setOpenList] = useState(false);
  // state can be Main or Guest
  const { state } = useLocation();
  console.log("state", state)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(date);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      {openList &&
        <>
          <StartMenuList state={state} />
        </>
      }

      <StartMenuContainer>
        <StartButtonWrapper
          type="button"
          onClick={() => setOpenList((prevState) => !prevState)}
        >
          <StartMenuButton src={startMenuBtn} alt="start Menu button" />
        </StartButtonWrapper>
        <MinimizContainer>
          <TaskbarWindows />
        </MinimizContainer>
        <NotificationsContainer>
          <FirewallWrapper>
            <SecurityBalloon>
              <SecurityBalloonTitle>
                <img src={firewall} alt="" />
                Your computer might be at risk
              </SecurityBalloonTitle>
              <SecurityBalloonBody>
                Antivirus software might not be installed.
                <br />
                Click this balloon to fix this problem.
              </SecurityBalloonBody>
            </SecurityBalloon>
            <img src={firewall} alt="Windows Security Center" />
          </FirewallWrapper>
          <img src={sound} alt="sound" />
          <img src={usb} alt="usb" />
          <span>{formattedTime}</span>
        </NotificationsContainer>
      </StartMenuContainer>

    </>
  );
}

export default StartMenu;
