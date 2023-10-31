import styled from "styled-components";

export const ModalContainer = styled.div`
  transform: translate(-50%, -50%);
  background: white;
  border: 1px solid #000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 2px;
  width: 80%;
  z-index: 1000;
  border: 3px solid #0831d9;
  border-radius: 11px 11px 0px 0px;
  display: grid;
  padding: 0;
`;

export const ModalTitle = styled.section`
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

  height: 28px;
  pointer-events: none;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.7rem;

  div {
    font-weight: 700;
    font-size: 18px;
    font-family: "Noto Sans";
    text-shadow: rgb(0, 0, 0) 1px 1px;
    color: white;
    -webkit-box-align: center;
    align-items: center;
  }

  img {
    width: 20px;
    height: 20px;
    margin-left: 4px;
    margin-right: -3px;
    margin-top: 6px;
  }
`;

export const ModalContent = styled.section``;

export const ModalDropDownMenu = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
  background: linear-gradient(
    to right,
    rgb(237, 237, 229) 0%,
    rgb(237, 232, 205) 100%
  );
  height: 29px;
  div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  img {
    position: relative;
    top: 4px;
  }
`;

export const DropBtn = styled.span`
  padding: 0.3rem;
  font-size: 14px;
  font-weight: 400;
  cursor: default;
  &:hover {
    color: #fff;
    background-color: #0831d9;
  }
`;

export const DropdownContent = styled.div`
  cursor: default;
  width: 12rem;
  display: grid;
  background-color: rgb(255, 255, 255);
  position: absolute;
  box-shadow: rgb(100, 100, 100) 2px 2px 1px;
  border: 1px solid gray;
  span {
    padding: 0.1rem 0 0 18px;
    font-size: 15px;
    color: rgba(140, 140, 140, 0.71);
  }
  div {
    padding: 0.2rem 0 0 15px;
    font-size: 15px;
    color: black;
    border-top: 1px solid rgba(140, 140, 140, 0.71);
    margin: 2px;
    width: 88%;
    &:hover {
      color: #fff;
      background-color: #0831d9;
    }
  }
`;