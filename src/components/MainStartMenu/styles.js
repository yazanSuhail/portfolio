import styled from "styled-components";

export const StartMenuContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  justify-content: center;
  align-items: center;
  background-color: red;
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 35px;
  background: linear-gradient(
    rgb(31, 47, 134) 0px,
    rgb(49, 101, 196) 3%,
    rgb(54, 130, 229) 6%,
    rgb(68, 144, 230) 10%,
    rgb(56, 131, 229) 12%,
    rgb(43, 113, 224) 15%,
    rgb(38, 99, 218) 18%,
    rgb(35, 91, 214) 20%,
    rgb(34, 88, 213) 23%,
    rgb(33, 87, 214) 38%,
    rgb(36, 93, 219) 54%,
    rgb(37, 98, 223) 86%,
    rgb(36, 95, 220) 89%,
    rgb(33, 88, 212) 92%,
    rgb(29, 78, 192) 95%,
    rgb(25, 65, 165) 98%
  );
`;

export const StartMenuButton = styled.img`
  height: 100%;
  margin-right: 10px;

  &:hover {
    filter: brightness(1.2);
  }
  &:active {
    filter: brightness(0.7);
  }
`;

export const MinimizContainer = styled.div`
  outline: 1px solid red;
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 30px;
`;

export const NotificationsContainer = styled.div`
  outline: 1px solid black;
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 30px;
`;
