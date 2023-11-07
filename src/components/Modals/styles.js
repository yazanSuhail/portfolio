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
  margin: 0 auto;
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
`;

export const MenuContainer = styled.div`
  ${(props) =>
    props.name === "Edit" &&
    `
      margin-left:48px;
  `}
  ${(props) =>
    props.name === "View" &&
    `
      margin-left:98px;
  `}
    ${(props) =>
    props.name === "Tools" &&
    `
      margin-left:153px;
  `}
      ${(props) =>
    props.name === "Help" &&
    `
      margin-left:212px;
  `}
        ${(props) =>
    props.name === "Favorites" &&
    `
      margin-left:266px;
  `}
`;

export const Close = styled.div`
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
`;

export const Items = styled.div`
  padding: 0.2rem 0 0 15px;
  font-size: 14px;
  color: black;

  margin: 2px;
  width: 88%;
  &:hover {
    color: #fff;
    background-color: #0831d9;
  }

  ${(props) =>
    props.name === "Close" &&
    `
   border-top: 1px solid rgba(140, 140, 140, 0.71);
  `}

  ${(props) =>
    props.active === false &&
    `
   color:rgba(140, 140, 140, 0.71);
  `}

  ${(props) =>
    props.name === "Explorer Bar" &&
    `
   border-bottom: 1px solid rgba(140, 140, 140, 0.71);
  `}

  ${(props) =>
    props.name === "Details" &&
    `
   border-bottom: 1px solid rgba(140, 140, 140, 0.71);
  `}

${(props) =>
    props.name === "Arrange Icons By" &&
    `
   border-bottom: 1px solid rgba(140, 140, 140, 0.71);
  `}

${(props) =>
    props.name === "Paste Shortcut" &&
    `
   border-bottom: 1px solid rgba(140, 140, 140, 0.71);
  `}
`;

export const SubMenu = styled.section`
  height: 36px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 11px;
  padding: 2px 0 1px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  background: linear-gradient(
    to right,
    rgb(237, 237, 229) 0%,
    rgb(237, 232, 205) 100%
  );

  button {
    display: flex;
    height: 100%;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 3px;
    background: transparent;
    gap: 0.3rem;
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: rgba(0, 0, 0, 0.1) 0px -1px 1px inset;
    }

    &:active {
      border: 1px solid rgb(185, 185, 185);
      background-color: rgb(222, 222, 222);
      box-shadow: rgba(255, 255, 255, 0.7) 0px -1px 1px inset;
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

export const SearchMenu = styled.section`
  height: 20px;
  padding: 3px;
  display: grid;
  grid-template-columns: 0fr 1fr 0fr;
  align-items: center;
  gap: 0.3rem;
  font-size: 13px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: linear-gradient(
    to right,
    rgb(237, 237, 229) 0%,
    rgb(237, 232, 205) 100%
  );

  button {
    background: transparent;
    border: none;
    width: 5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    &:active {
      background-color: rgb(222, 222, 222);
      box-shadow: rgba(255, 255, 255, 0.7) 0px -1px 1px inset;
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

export const FakeInputContainer = styled.div`
  border: 1px solid rgba(122, 122, 255, 0.6);
  background-color: white;
  display: grid;
  grid-template-columns: 0fr 1fr 0fr;
  justify-content: center;
  align-items: center;
  gap: 5px;
  height: 1.1rem;
  padding: 2px;
`;

export const GridSubContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
`;

export const LeftSideMenu = styled.div`
  > div {
    outline: 1px solid red;
    width: 180px;
    height: 100%;
  }
`;

export const RightSideContent = styled.div``;
