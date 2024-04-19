import { useState, useEffect } from "react";
import {
  StartMenuContainer,
  StartMenuButton,
  MinimizContainer,
  NotificationsContainer,
} from "./styles";
import { startMenuBtn, sound, usb, firewall } from "../../assets";
import { useLocation } from 'react-router-dom';
import { StartMenuList } from "../StartMenuList";

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
        <div onClick={() => setOpenList(prevState => !prevState)}>
          <StartMenuButton src={startMenuBtn} alt="start Menu button" />
        </div>
        <MinimizContainer></MinimizContainer>
        <NotificationsContainer>
          <img
            src={firewall}
            alt="firewall"
          />
          <img src={sound} alt="sound" />
          <img src={usb} alt="usb" />
          <span>{formattedTime}</span>
        </NotificationsContainer>
      </StartMenuContainer>

    </>
  );
}

export default StartMenu;
