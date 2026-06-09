import styled from "styled-components";
import {
  MOBILE_TASKBAR_HEIGHT,
  mobileQuery,
} from "../../constants/breakpoints";

/* Windows XP Luna – from Microsoft design guidelines palette */
const xp = {
  navy: "#003399",
  blueMid: "#6487DC",
  blueLight: "#8CAAE6",
  placesTop: "#D2ECFF",
  placesMid: "#B7D3FC",
  placesBottom: "#8CAAE6",
  selection: "#316AC5",
  borderDark: "#1040A0",
  borderLight: "#4F8FD9",
  white: "#FFFFFF",
};

const lunaChrome = `linear-gradient(
  180deg,
  #3a8cef 0%,
  #448ee9 6%,
  #3b7fe0 18%,
  #2f6fce 45%,
  #255eb8 75%,
  #1e4f9f 100%
)`;

const lunaUserBand = `linear-gradient(
  90deg,
  #003399 0%,
  #6487dc 28%,
  #8caae6 50%,
  #6487dc 72%,
  #003399 100%
)`;

const lunaPlaces = `linear-gradient(
  180deg,
  ${xp.placesTop} 0%,
  ${xp.placesMid} 42%,
  ${xp.placesBottom} 100%
)`;

export const StartMenuPanel = styled.div`
  position: absolute;
  bottom: 30px;
  left: 0;
  z-index: 100002;
  width: 396px;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid ${xp.borderDark};
  box-shadow:
    inset 0 0 0 1px ${xp.borderLight},
    2px 2px 10px rgba(0, 0, 0, 0.45);
  font-family: Tahoma, "MS Sans Serif", sans-serif;
  font-size: 11px;

  @media screen and ${mobileQuery} {
    bottom: ${MOBILE_TASKBAR_HEIGHT}px;
    left: 0;
    right: 0;
    width: 100%;
    max-width: 100vw;
    border-radius: 0;
    max-height: calc(100dvh - ${MOBILE_TASKBAR_HEIGHT}px);
    display: flex;
    flex-direction: column;
    overflow: visible;
  }
`;

export const UserHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: ${lunaUserBand};
  color: ${xp.white};
  border-bottom: 1px solid ${xp.borderDark};
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25);
  flex-shrink: 0;

  img {
    display: block;
    width: 48px;
    height: 48px;
    border: 2px solid ${xp.borderDark};
    border-radius: 3px;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.35);
    object-fit: cover;
    background: ${xp.white};
  }

  span {
    font-size: 14px;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.45);
  }
`;

export const MenuBody = styled.div`
  display: flex;
  min-height: 448px;
  background: ${xp.white};

  @media screen and ${mobileQuery} {
    flex-direction: column;
    min-height: 0;
    flex: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

export const ProgramsColumn = styled.div`
  flex: 1;
  min-width: 0;
  padding: 8px 0 12px;
  background: ${xp.white};
  position: relative;

  @media screen and ${mobileQuery} {
    overflow: visible;
  }
`;

export const PlacesColumn = styled.div`
  width: 190px;
  flex-shrink: 0;
  padding: 8px 0 12px;
  background: ${lunaPlaces};
  border-left: 1px solid #7ba2e7;
  box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.45);

  @media screen and ${mobileQuery} {
    width: 100%;
    border-left: none;
    border-top: 1px solid #7ba2e7;
    box-shadow: none;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0 8px 8px;
  padding: 4px 6px;
  background: #fff;
  border: 1px solid #7f9db9;
  border-radius: 2px;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.12);

  img {
    width: 14px;
    height: 14px;
    opacity: 0.85;
  }

  input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    font-family: Tahoma, "MS Sans Serif", sans-serif;
    font-size: 11px;
    color: #000;
    background: transparent;

    &::placeholder {
      color: #5a5a5a;
    }
  }
`;

export const MenuItemButton = styled.button<{ $large?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${(p) => (p.$large ? "8px" : "6px")};
  width: 100%;
  padding: ${(p) => (p.$large ? "4px 10px" : "3px 10px")};
  border: none;
  background: transparent;
  text-align: left;
  font-family: Tahoma, "MS Sans Serif", sans-serif;
  font-size: 11px;
  color: #000;
  cursor: pointer;

  img {
    width: ${(p) => (p.$large ? "32px" : "16px")};
    height: ${(p) => (p.$large ? "32px" : "16px")};
    display: block;
    object-fit: contain;
    flex-shrink: 0;
  }

  span {
    flex: 1;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover,
  &.highlighted {
    background: ${xp.selection};
    color: ${xp.white};
  }

  @media screen and ${mobileQuery} {
    min-height: 40px;
    padding: 6px 10px;

    img {
      width: ${(p) => (p.$large ? "28px" : "20px")};
      height: ${(p) => (p.$large ? "28px" : "20px")};
    }
  }
`;

export const MenuSeparator = styled.div<{ $onBlue?: boolean }>`
  height: 1px;
  margin: 5px 10px;
  background: ${(p) =>
    p.$onBlue
      ? "linear-gradient(to right, transparent, #7ba2e7 15%, #7ba2e7 85%, transparent)"
      : "linear-gradient(to right, transparent, #b8cff5 15%, #b8cff5 85%, transparent)"};
`;

export const AllProgramsRow = styled.div`
  position: relative;
  margin-top: 6px;
  padding-top: 6px;
  border-top: 1px solid #c5d8f4;

  @media screen and ${mobileQuery} {
    overflow: visible;
  }
`;

export const AllProgramsButton = styled(MenuItemButton)`
  font-weight: bold;

  .arrow {
    margin-left: auto;
    font-size: 10px;
    color: inherit;
  }
`;

export const FlyoutPanel = styled.div`
  position: absolute;
  left: calc(100% - 4px);
  bottom: 0;
  min-width: 180px;
  max-height: 280px;
  overflow-y: auto;
  padding: 4px 0;
  background: #fff;
  border: 1px solid ${xp.selection};
  border-radius: 4px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 2;

  @media screen and ${mobileQuery} {
    left: 8px;
    right: 8px;
    bottom: calc(100% + 4px);
    top: auto;
    width: auto;
    min-width: 0;
    max-height: min(280px, 40dvh);
    margin: 0;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 10;
  }
`;

export const MenuFooter = styled.div`
  display: flex;
  align-items: stretch;
  background: ${lunaChrome};
  border-top: 1px solid ${xp.borderDark};
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
`;

export const FooterButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 8px;
  border: none;
  background: transparent;
  color: ${xp.white};
  font-family: Tahoma, "MS Sans Serif", sans-serif;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.45);

  img {
    width: 22px;
    height: 22px;
    object-fit: contain;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }

  &:not(:last-child) {
    border-right: 1px solid rgba(0, 0, 0, 0.15);
  }
`;

export const RunDialogOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100003;
  background: rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RunDialog = styled.div`
  width: 360px;
  background: #ece9d8;
  border: 1px solid #0831d9;
  border-radius: 8px 8px 0 0;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.4);
  font-family: Tahoma, "MS Sans Serif", sans-serif;
  font-size: 11px;

  @media screen and ${mobileQuery} {
    width: calc(100vw - 24px);
    max-width: 360px;
  }
`;

export const RunDialogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 8px;
  background: linear-gradient(180deg, rgb(0, 88, 238) 0%, rgb(0, 64, 171) 100%);
  color: #fff;
  font-weight: bold;
  border-radius: 6px 6px 0 0;
`;

export const RunDialogBody = styled.div`
  padding: 16px;
  display: flex;
  gap: 12px;
  align-items: flex-start;

  img {
    width: 32px;
    height: 32px;
  }

  label {
    display: block;
    margin-bottom: 6px;
  }

  input {
    width: 100%;
    padding: 4px;
    border: 1px solid #7f9db9;
    font-family: inherit;
    font-size: 11px;
    color: #000;
    background: #fff;
  }
`;

export const RunDialogActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 0 16px 16px;

  button {
    min-width: 72px;
    padding: 4px 12px;
    font-family: inherit;
    font-size: 11px;
    cursor: pointer;
  }
`;
