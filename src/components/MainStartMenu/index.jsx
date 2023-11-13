import React from "react";
import {
  StartMenuContainer,
  StartMenuButton,
  MinimizContainer,
  NotificationsContainer,
} from "./styles";
import { startMenuBtn } from "../../assets";
function StartMenu() {
  return (
    <StartMenuContainer>
      <StartMenuButton src={startMenuBtn} alt="start Menu button" />
      <MinimizContainer></MinimizContainer>
      <NotificationsContainer></NotificationsContainer>
    </StartMenuContainer>
  );
}

export default StartMenu;
