import styled from "styled-components";

export const StartMenuContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 0fr;
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
  position: relative;
  width: 150px;
  overflow: hidden;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  background: linear-gradient(
    rgb(12, 89, 185) 1%,
    rgb(19, 158, 233) 6%,
    rgb(24, 181, 242) 10%,
    rgb(19, 155, 235) 14%,
    rgb(18, 144, 232) 19%,
    rgb(13, 141, 234) 63%,
    rgb(13, 159, 241) 81%,
    rgb(15, 158, 237) 88%,
    rgb(17, 155, 233) 91%,
    rgb(19, 146, 226) 94%,
    rgb(19, 126, 215) 97%,
    rgb(9, 91, 201) 100%
  );
  border-left: 1px solid rgb(16, 66, 175);
  box-shadow: rgb(24, 187, 255) 1px 0px 1px inset;
  padding: 0px 10px;

  span {
    font-size: 0.8rem;
  }
`;

export const ToolTip = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 72%;
  border: 1px solid black;
  border-radius: 7px;
  padding: 6px 28px 10px 10px;
  background-color: rgb(255, 255, 225);
  font-size: 11px;
  white-space: nowrap;
  color: black;

  span {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    font-weight: bolder;
  }
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;
  position: relative;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid rgb(255, 255, 225);
  position: relative;
  left: 212px;
  top: 18px;
  transform: rotate(-19deg);
`;
