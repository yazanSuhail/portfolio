import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: 1px solid #000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 2px;
  max-width: 400px;
  z-index: 1000;
  border: 3px solid #0831d9;
  border-radius: 11px 11px 0px 0px;
`;

export const ModalTitle = styled.span`
  background: linear-gradient(
    rgb(0, 88, 238) 0%,
    rgb(53, 147, 255) 4%,
    rgb(40, 142, 255) 6%,
    rgb(18, 125, 255) 8%,
    rgb(3, 111, 252) 10%,
    rgb(2, 98, 238) 14%,
    rgb(0, 87, 229) 20%,
    rgb(0, 84, 227) 24%,
    rgb(0, 85, 235) 56%,
    rgb(0, 91, 245) 66%,
    rgb(2, 106, 254) 76%,
    rgb(0, 98, 239) 86%,
    rgb(0, 82, 214) 92%,
    rgb(0, 64, 171) 94%,
    rgb(0, 48, 146) 100%
  );
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  height: 28px;
  pointer-events: none;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
  div {
    display: flex;
    height: 25px;
    line-height: 25px;
    font-weight: 700;
    font-size: 12px;
    font-family: "Noto Sans";
    text-shadow: rgb(0, 0, 0) 1px 1px;
    color: white;
    position: absolute;
    left: 3px;
    right: 3px;
    -webkit-box-align: center;
    align-items: center;
  }
`;

export const ModalContent = styled.p`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  padding-top: 20px;
  background: linear-gradient(
    to right,
    rgb(237, 237, 229) 0%,
    rgb(237, 232, 205) 100%
  );
`;
