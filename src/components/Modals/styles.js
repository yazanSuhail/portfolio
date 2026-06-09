import styled from "styled-components";
import { mobileQuery } from "../../constants/breakpoints";

const xp = {
  titleBar: `linear-gradient(
    180deg,
    #3a8cef 0%,
    #448ee9 4%,
    #3b7fe0 12%,
    #2f6fce 50%,
    #255eb8 88%,
    #1e4f9f 100%
  )`,
  chromeFace: `linear-gradient(180deg, #f6f4ec 0%, #ece9d8 100%)`,
  border: "#aca899",
  borderDark: "#716f64",
  selection: "#316ac5",
  addressBorder: "#7f9db9",
};

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: #000000;
  background: white;
  border: 1px solid #0058e6;
  border-radius: 8px 8px 0 0;
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.35),
    4px 4px 12px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  font-family: Tahoma, "MS Sans Serif", sans-serif;

  ${(props) =>
    props.isfullwidth === "true" &&
    `
    width: 100%;
    height: 100%;
    border-radius: 0;
  `}

  ${(props) =>
    props.isfullwidth === "false" &&
    `
    width: 100%;
    height: 100%;
    min-height: 0;
  `}
`;

export const ModalHeaderContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  touch-action: manipulation;
  padding: 0 4px 0 6px;
  background: ${xp.titleBar};
  color: #fff;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  overflow: hidden;
  flex-shrink: 0;
`;

export const ModalTitleIcon = styled.img`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  object-fit: contain;
`;

export const ModalTitleText = styled.div`
  flex: 1;
  min-width: 0;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
`;

export const WindowControls = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  flex-shrink: 0;
  padding-right: 2px;
`;

export const IconsContainer = WindowControls;

export const Icons = styled.img`
  width: 21px;
  height: 21px;
  display: block;
  cursor: pointer;
  touch-action: manipulation;

  @media screen and ${mobileQuery} {
    width: 28px;
    height: 28px;
  }

  &:hover {
    filter: brightness(1.08);
  }

  &:active {
    filter: brightness(0.85);
  }
`;

export const ModalContent = styled.section`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`;

export const ModalDropDownMenu = styled.section`
  display: flex;
  align-items: center;
  position: relative;
  height: 22px;
  padding: 0 2px;
  background: ${xp.chromeFace};
  border-bottom: 1px solid ${xp.border};
  flex-shrink: 0;
`;

export const MenuBarItems = styled.div`
  display: flex;
  align-items: stretch;
  height: 100%;
`;

export const DropBtn = styled.button`
  padding: 3px 7px;
  border: 1px solid transparent;
  border-radius: 0;
  background: transparent;
  font-family: Tahoma, "MS Sans Serif", sans-serif;
  font-size: 11px;
  font-weight: normal;
  color: #000;
  cursor: default;
  line-height: 1;

  &:hover {
    color: #fff;
    background-color: ${xp.selection};
    border-color: ${xp.selection};
  }
`;

export const DropdownContent = styled.div`
  cursor: default;
  width: 12rem;
  display: grid;
  background-color: #fff;
  position: absolute;
  top: 100%;
  left: 0;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid ${xp.borderDark};
  z-index: 99999;
  font-family: Tahoma, "MS Sans Serif", sans-serif;
`;

export const MenuContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
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
    background-color: ${xp.selection};
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
    background-color: ${xp.selection};
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
  display: flex;
  align-items: center;
  gap: 2px;
  height: 32px;
  padding: 2px 6px;
  font-size: 11px;
  background: ${xp.chromeFace};
  border-bottom: 1px solid ${xp.border};
  flex-shrink: 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    height: 26px;
    padding: 0 6px;
    border: 1px solid transparent;
    border-radius: 3px;
    background: transparent;
    font-family: Tahoma, "MS Sans Serif", sans-serif;
    font-size: 11px;
    color: #000;
    cursor: default;

    img {
      width: 24px;
      height: 24px;
      object-fit: contain;
      display: block;
    }

    span {
      color: #000;
      white-space: nowrap;
    }

    &:hover {
      border-color: ${xp.border};
      background: linear-gradient(180deg, #fff 0%, #ece9d8 100%);
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.6);
    }

    &:active {
      border-color: ${xp.borderDark};
      background: #dcd9ce;
      box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.15);
    }
  }
`;

export const SearchMenu = styled.section`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 26px;
  padding: 3px 6px 4px;
  font-size: 11px;
  color: #000;
  background: ${xp.chromeFace};
  border-bottom: 1px solid ${xp.border};
  flex-shrink: 0;
`;

export const AddressLabel = styled.span`
  flex-shrink: 0;
  padding: 0 2px;
  font-size: 11px;
  color: #000;
`;

export const FakeInputContainer = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  height: 20px;
  padding: 0 4px 0 6px;
  background: #fff;
  border: 1px solid ${xp.addressBorder};
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.08);

  .address-content {
    display: flex;
    align-items: center;
    gap: 4px;
    flex: 1;
    min-width: 0;
    overflow: hidden;

    img {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
    }

    span {
      font-size: 11px;
      color: #000;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .address-dropdown {
    display: flex;
    align-items: center;
    padding-left: 4px;
    border-left: 1px solid ${xp.border};

    img {
      width: 14px;
      height: 14px;
      display: block;
    }
  }
`;

export const GoButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 22px;
  padding: 0 10px;
  border: 1px solid ${xp.borderDark};
  border-radius: 3px;
  background: linear-gradient(180deg, #fff 0%, #ece9d8 100%);
  box-shadow: inset 0 1px 0 #fff;
  font-family: Tahoma, "MS Sans Serif", sans-serif;
  font-size: 11px;
  color: #000;
  cursor: default;
  flex-shrink: 0;

  img {
    width: 14px;
    height: 14px;
  }

  &:hover {
    background: linear-gradient(180deg, #fff 0%, #f5f3ea 100%);
  }

  &:active {
    background: #dcd9ce;
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.12);
  }
`;

export const GridSubContent = styled.div`
  display: flex;
  flex: 1;
  min-height: 0;
  position: relative;
  align-items: stretch;
  overflow: hidden;
`;

export const LeftSideMenu = styled.div`
  min-width: 180px;
  background: linear-gradient(rgb(116, 138, 255) 0%, rgb(64, 87, 211) 100%);
  padding: 10px;
  min-height: 22.5rem;
  height: 100%;

  @media screen and ${mobileQuery} {
    display: none;
  }
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
  flex: 1;
  min-width: 0;
  min-height: 0;
  display: grid;
  overflow: auto;
  padding-left: 1rem;
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

  @media screen and ${mobileQuery} {
    grid-template-columns: 1fr;
  }
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
  max-width: 100%;
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
  max-width: 100%;
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

  @media screen and ${mobileQuery} {
    grid-template-columns: 1fr;
    padding: 1rem 0.75rem;
    gap: 0.5rem;
  }
`;
