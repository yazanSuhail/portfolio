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
import { useLocation } from "react-router-dom";
import { StartMenuList } from "../StartMenuList";
import TaskbarWindows from "../TaskbarWindows";

function StartMenu({ onStartMenuAction }) {
  const [currentTime, setCurrentTime] = useState(() => new Date());
  const [openList, setOpenList] = useState(false);
  const { state: account } = useLocation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const closeStartMenu = () => setOpenList(false);

  const startMenuHandlers = {
    onClose: closeStartMenu,
    onAction: (action) => {
      onStartMenuAction?.(action);
    },
  };

  return (
    <>
      {openList && (
        <StartMenuList account={account} handlers={startMenuHandlers} />
      )}

      <StartMenuContainer>
        <StartButtonWrapper
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            setOpenList((prev) => !prev);
          }}
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
