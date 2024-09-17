import styled from "styled-components";

export const ModalContainer = styled.div`
  color: #000000;
  background: white;
  border: 1px solid #000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border: 3px solid #0831d9;
  border-radius: 11px 11px 0px 0px;

  ${(props) =>
    props.isfullwidth === "true" &&
    `
    margin:0 auto;
    width: 100%;
    height:100%;
    position: absolute;
    top: 0;
        `}
  ${(props) =>
    props.isfullwidth === "false" &&
    `
    height: 600px;
    margin: 0 auto;
    width: 70%;
    height:100%
    `}
`;

export const ModalHeaderContainer = styled.section`
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
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.7rem;
  color: #fff;
  font-weight: bolder;
  div:nth-child(2) {
    flex: 1 1 0%;

    padding-right: 5px;
    letter-spacing: 0.5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
  }
`;

export const IconsContainer = styled.div`
  margin: 7px 5px 13px 0;
  gap: 0.1rem;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icons = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 4px;
  margin-right: -3px;
  margin-top: 6px;
  &:hover {
    filter: brightness(1.2);
  }
  &:active {
    filter: brightness(0.7);
  }
`;

export const ModalContent = styled.section`
  height: 100%;
`;

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
  z-index: 99999;
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
  div {
    padding: 0.2rem 0 0 15px;
    font-size: 11px;
    color: black;
    margin: 2px;
    width: 88%;
  }

  span {
    padding: 0.1rem 0 0 18px;
    font-size: 11px;
    color: rgba(140, 140, 140, 0.71);
  }
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
  display: flex;
  justify-content: space-between;
  gap: 5px;
  height: 100%;
  padding: 0;
  div:first-child {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    img {
      width: 1.3rem;
    }
  }
  div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    img {
      width: 1.1rem;
    }
  }
`;

export const GridSubContent = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  align-items: flex-start;
  height: 82.5%;
`;

export const LeftSideMenu = styled.div`
  min-width: 180px;
  height: 100%;
  position: relative;
  background: linear-gradient(rgb(116, 138, 255) 0%, rgb(64, 87, 211) 100%);
  overflow: auto;
  padding: 10px;
`;

export const Inner = styled.div`
  width: 100%;
  margin-top: 10px;
`;

export const Title = styled.div`
  display: flex;
  font-size: 0.9rem;
  font-weight: 700;
  color: rgb(12, 50, 125);
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-between;
  height: 23px;
  padding-left: 11px;
  padding-right: 2px;
  cursor: pointer;
  background: linear-gradient(
    to right,
    rgb(240, 240, 255) 0px,
    rgb(240, 240, 255) 30%,
    rgb(168, 188, 255) 100%
  );
  background-color: rgb(241, 241, 241);
  border-radius: 5px 5px 0 0;
  border-width: 0px 1px 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.4);
  border-image: initial;
`;

export const ListContainer = styled.div`
  padding: 5px 10px;
  background: linear-gradient(
      to right,
      rgb(180, 200, 251) 0%,
      rgb(164, 185, 251) 50%,
      rgb(180, 200, 251) 100%
    )
    rgba(198, 211, 255, 0.87);
  font-size: 12px;
  line-height: 14px;
  display: grid;
  color: rgb(12, 50, 125);
  span {
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.2rem;
    padding: 2px 0 2px 0;
    &:hover {
      color: blue;
    }
  }
`;

export const RightSideContent = styled.div`
  display: grid;
  overflow: auto;
  min-height: 21.9rem;
`;

export const Cell = styled.div`
  img {
    width: 45px;
    height: 45px;
  }
`;
export const CellContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  padding: 1rem 0 1rem 0;
  font-size: 11px;
  div {
    display: flex;
    align-items: center;
  }
  img {
    padding-right: 2px;
    width: 40px;
    height: 40px;
  }
`;

export const CellTitle = styled.div`
  width: 300px;
  font-weight: bolder;
  padding: 2px 0px 3px 0px;
  position: relative;
  font-size: 11px;
  &:after {
    content: "";
    display: block;
    background: linear-gradient(
      to right,
      rgb(112, 191, 255) 0px,
      rgb(255, 255, 255) 100%
    );
    position: absolute;
    bottom: 0px;
    left: -12px;
    height: 1px;
    width: 100%;
  }
`;

export const Project = styled.div`
  cursor: pointer;

  width: 300px;
  font-weight: bolder;
  padding: 20px 0px 20px 10px;
  position: relative;
  font-size: 11px;
  &:after {
    content: "";
    display: block;
    background: linear-gradient(
      to right,
      rgb(112, 191, 255) 0px,
      rgb(255, 255, 255) 100%
    );
    position: absolute;
    bottom: 0px;
    left: -12px;
    height: 1px;
    width: 100%;
  }
  span {
    position: relative;
    left: -100px;
    top: 20px;
  }
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 2rem;
`;
