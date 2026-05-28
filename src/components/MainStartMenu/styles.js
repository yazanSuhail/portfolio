import styled from "styled-components";

const taskbarGradient = `linear-gradient(
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
)`;

export const StartMenuContainer = styled.div`
  display: flex;
  align-items: stretch;
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 30px;
  background: ${taskbarGradient};
  box-sizing: border-box;
`;

export const StartButtonWrapper = styled.button`
  display: flex;
  align-items: stretch;
  height: 100%;
  flex-shrink: 0;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  &:hover img {
    filter: brightness(1.2);
  }

  &:active img {
    filter: brightness(0.7);
  }
`;

export const StartMenuButton = styled.img`
  height: 100%;
  width: auto;
  display: block;
`;

export const MinimizContainer = styled.div`
  position: relative;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: visible;
  display: flex;
  align-items: center;
  pointer-events: auto;
`;

export const TaskbarWindowsList = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 100%;
  padding: 0 4px;
  overflow-x: auto;
  overflow-y: hidden;
  pointer-events: auto;
  flex: 1;
  min-width: 0;
`;

export const TaskbarWindowButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 150px;
  height: 22px;
  flex-shrink: 0;
  padding: 0 8px 0 6px;
  border: 1px solid rgb(16, 66, 175);
  border-radius: 6px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35);
  background: linear-gradient(
    180deg,
    rgb(66, 169, 255) 0%,
    rgb(40, 140, 235) 50%,
    rgb(28, 120, 215) 100%
  );
  color: #fff;
  font-family: Tahoma, "MS Sans Serif", sans-serif;
  font-size: 11px;
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;

  img {
    width: 16px;
    height: 16px;
    object-fit: contain;
    flex-shrink: 0;
  }

  span {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
  }

  &:hover {
    filter: brightness(1.05);
  }

  ${(props) =>
    props.$active &&
    `
    background: linear-gradient(
      180deg,
      rgb(28, 110, 200) 0%,
      rgb(18, 85, 170) 50%,
      rgb(12, 70, 150) 100%
    );
    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.45);
    border-color: rgb(10, 55, 120);
  `}
`;

const trayGradient = `linear-gradient(
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
)`;

export const NotificationsContainer = styled.div`
  position: relative;
  overflow: visible;
  height: 100%;
  min-width: 150px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  padding: 0 10px;
  margin-left: auto;
  background: ${trayGradient};
  border-left: 1px solid rgb(16, 66, 175);
  box-shadow: inset 1px 0 0 rgb(24, 187, 255);

  img {
    height: 16px;
    width: auto;
    display: block;
  }

  span {
    font-size: 11px;
    color: #fff;
    white-space: nowrap;
  }
`;

export const FirewallWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const SecurityBalloon = styled.div`
  position: absolute;
  bottom: calc(100% + 10px);
  left: 30%;
  transform: translateX(-50%);
  z-index: 10000;
  width: 200px;
  padding: 10px 12px 12px;
  background: #ffffe1;
  border: 1px solid #000;
  border-radius: 8px 8px 8px 8px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.35);
  font-family: Tahoma, "MS Sans Serif", sans-serif;
  font-size: 9px;
  line-height: 1.35;
  color: #000;
  white-space: normal;
  cursor: default;

  &::before {
    content: "";
    position: absolute;
    bottom: -9px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-top: 9px solid #000;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -7px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #ffffe1;
  }
`;

export const SecurityBalloonTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: bold;
  margin-bottom: 6px;

  img {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`;

export const SecurityBalloonBody = styled.p`
  margin: 0;
  padding-left: 22px;
  font-weight: normal;
`;
