import styled from "styled-components";

export const DesktopContainer = styled.div`
  background-image: url("https://i.imgur.com/Zk6TR5k.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
`;

export const ToolTip = styled.div`
  border: 1px solid black;
  border-radius: 7px;
  padding: 6px 28px 10px 10px;
  background-color: rgb(255, 255, 225);
  font-size: 11px;
  white-space: nowrap;
  color: black;
  width: 199px;
  position: absolute;
  right: 2%;
  bottom: 4%;

  span {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    font-weight: bolder;
  }
`;
