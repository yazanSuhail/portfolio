import React, { useState, useEffect } from "react";
import {
  StartMenuContainer,
  StartMenuButton,
  MinimizContainer,
  NotificationsContainer,
  ToolTip,
  Triangle,
} from "./styles";
import { startMenuBtn, firewall, sound, usb } from "../../assets";

function StartMenu() {
  const date = new Date();
  const [currentTime, setCurrentTime] = useState(date);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipCounter, setTooltipCounter] = useState(0);

  useEffect(() => {
    const tooltipIntervalId = setInterval(() => {
      if (tooltipCounter < 3) {
        setShowTooltip(true);
        setTooltipCounter((prevCounter) => prevCounter + 1);
      } else {
        setShowTooltip(false);
        clearInterval(tooltipIntervalId);
      }
    }, 3000);

    return () => clearInterval(tooltipIntervalId);
  }, [tooltipCounter]);

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
      <StartMenuContainer>
        <StartMenuButton src={startMenuBtn} alt="start Menu button" />
        <MinimizContainer></MinimizContainer>
        {showTooltip && (
          <ToolTip>
            <div>
              <span>
                <img src={firewall} alt="firewall" />
                Your computer might be at risk
              </span>{" "}
              <br />
              Antivirus software might not be installed, <br />
              Click this balloon to fix this problem.
            </div>
            <Triangle />
          </ToolTip>
        )}
        <NotificationsContainer>
          <img
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
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
