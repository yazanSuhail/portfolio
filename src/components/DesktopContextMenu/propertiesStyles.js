import styled, { css } from "styled-components";
import { mobileQuery } from "../../constants/breakpoints";

const xp = {
  face: "#ece9d8",
  faceDark: "#d4d0c8",
  border: "#aca899",
  borderDark: "#716f64",
  tabBorder: "#919b9c",
  selection: "#316ac5",
  titleBar: `linear-gradient(
    180deg,
    #0997ff 0%,
    #0053e2 18%,
    #004ad9 52%,
    #0039b3 100%
  )`,
  desktopColor: "#004e98",
};

/* ── Property sheet shell ── */

export const PropertiesOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100020;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PropertiesDialog = styled.div`
  width: ${({ $wide }) => ($wide ? "427px" : "395px")};
  max-width: calc(100vw - 16px);
  background: ${xp.face};
  border: 1px solid #0058e6;
  border-radius: 8px 8px 0 0;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.45),
    2px 2px 14px rgba(0, 0, 0, 0.45);
  font-family: Tahoma, "MS Sans Serif", sans-serif;
  font-size: 11px;
  color: #000;
  color-scheme: light;
  overflow: hidden;

  @media screen and ${mobileQuery} {
    width: calc(100vw - 16px);
    max-height: calc(100dvh - 16px);
    overflow-y: auto;
  }

  select,
  option,
  button {
    color: #000;
  }

  select:disabled,
  button:disabled {
    color: #808080;
  }
`;

export const PropertiesHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  padding: 0 4px 0 6px;
  background: ${xp.titleBar};
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 0.2px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.45);

  img.title-icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  span {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const TitleBarButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const TitleButton = styled.button`
  width: 21px;
  height: 21px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 21px;
    height: 21px;
    display: block;
  }

  &.help-btn {
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    font-family: "Times New Roman", serif;
  }

  &:hover {
    filter: brightness(1.08);
  }

  &:active {
    filter: brightness(0.9);
  }
`;

export const PropertiesClient = styled.div`
  padding: 8px 8px 10px;
  background: ${xp.face};
`;

/* ── Tab control (XP property sheet) ── */

export const TabControl = styled.div`
  position: relative;
  margin-bottom: 0;
  padding-top: 23px;
  background: ${xp.face};
  border: 1px solid ${xp.tabBorder};
  box-shadow: inset 1px 1px 0 #fff;
`;

export const TabStrip = styled.div`
  position: absolute;
  top: 0;
  left: 4px;
  display: flex;
  align-items: flex-end;
  height: 23px;
`;

export const TabButton = styled.button`
  position: relative;
  z-index: ${({ $active }) => ($active ? 2 : 1)};
  margin-right: 1px;
  padding: 4px 10px 3px;
  border: 1px solid ${xp.tabBorder};
  border-bottom: ${({ $active }) =>
    $active ? `1px solid ${xp.face}` : `1px solid ${xp.tabBorder}`};
  border-radius: 3px 3px 0 0;
  background: ${({ $active }) => ($active ? xp.face : xp.faceDark)};
  font: inherit;
  font-size: 11px;
  color: #000;
  cursor: default;
  line-height: 1;
  margin-bottom: ${({ $active }) => ($active ? "-1px" : "0")};

  &:disabled {
    color: #808080;
  }

  &:hover:not(:disabled) {
    filter: brightness(1.03);
  }
`;

export const TabPanel = styled.div`
  padding: 10px 12px 12px;
  min-height: ${({ $minHeight }) => $minHeight ?? "248px"};
  background: ${xp.face};
`;

/* ── Display → Desktop tab ── */

export const DisplayDesktopLayout = styled.div`
  display: grid;
  grid-template-columns: 168px 1fr;
  grid-template-rows: auto auto;
  column-gap: 10px;
  row-gap: 8px;
`;

export const MonitorColumn = styled.div`
  grid-row: 1;
  grid-column: 1;
`;

export const CrtBezel = styled.div`
  padding: 10px 12px 14px;
  background: linear-gradient(180deg, #e8e8e8 0%, #c8c8c8 40%, #a8a8a8 100%);
  border: 1px solid ${xp.borderDark};
  border-radius: 6px 6px 2px 2px;
  box-shadow:
    inset 1px 1px 0 #fff,
    inset -1px -1px 0 #888;
`;

export const CrtScreen = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  max-height: 96px;
  background-color: ${xp.desktopColor};
  border: 2px inset #404040;
  background-image: ${({ $url }) => ($url ? `url(${$url})` : "none")};
  ${({ $position }) => {
    switch ($position) {
      case "tile":
        return css`
          background-repeat: repeat;
          background-size: auto;
          background-position: top left;
        `;
      case "center":
        return css`
          background-repeat: no-repeat;
          background-size: auto;
          background-position: center center;
        `;
      default:
        return css`
          background-repeat: no-repeat;
          background-size: 100% 100%;
          background-position: center center;
        `;
    }
  }}
`;

export const CrtStand = styled.div`
  width: 48px;
  height: 8px;
  margin: 2px auto 0;
  background: linear-gradient(180deg, #b0b0b0, #888);
  border: 1px solid #666;
  border-top: none;
`;

export const ControlsColumn = styled.div`
  grid-row: 1;
  grid-column: 2;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 2px;
`;

export const FieldRow = styled.div`
  display: grid;
  grid-template-columns: 54px 1fr;
  align-items: center;
  gap: 6px;
  min-height: 22px;
`;

export const FieldLabel = styled.span`
  text-align: right;
  font-size: 11px;
  color: #000;
`;

export const XpSelect = styled.select`
  height: 21px;
  padding: 0 2px;
  border: 1px solid ${xp.borderDark};
  font: inherit;
  font-size: 11px;
  color: #000;
  background: #fff;
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.08);

  option {
    color: #000;
    background: #fff;
  }
`;

export const XpButton = styled.button`
  justify-self: start;
  height: 23px;
  min-width: 72px;
  padding: 0 10px;
  border: 1px solid ${xp.borderDark};
  border-radius: 3px;
  background: linear-gradient(180deg, #fff 0%, ${xp.face} 55%, #d8d4c8 100%);
  box-shadow: inset 0 1px 0 #fff;
  font: inherit;
  font-size: 11px;
  color: #000;
  cursor: default;

  &:disabled {
    color: #808080;
  }

  &:active:not(:disabled) {
    background: #dcd9ce;
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.15);
  }
`;

export const ColorRow = styled.div`
  display: grid;
  grid-template-columns: 54px auto auto;
  align-items: center;
  gap: 6px;
`;

export const ColorSwatch = styled.div`
  width: 38px;
  height: 21px;
  border: 1px solid ${xp.borderDark};
  background: ${({ $color }) => $color ?? xp.desktopColor};
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.12);
`;

export const WallpaperList = styled.div`
  grid-column: 1 / -1;
  height: 116px;
  overflow-x: hidden;
  overflow-y: scroll;
  border: 1px solid ${xp.borderDark};
  background: #fff;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 2px;
  padding: 4px;

  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-track {
    background: ${xp.face};
    border-left: 1px solid ${xp.border};
  }

  &::-webkit-scrollbar-thumb {
    background: ${xp.faceDark};
    border: 1px solid ${xp.borderDark};
  }
`;

export const WallpaperThumb = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 88px;
  padding: 2px;
  border: 1px solid transparent;
  background: transparent;
  cursor: default;
  font: inherit;
  font-size: 11px;
  color: #000;

  img {
    width: 80px;
    height: 60px;
    object-fit: cover;
    border: 1px solid ${xp.border};
    display: block;
  }

  span {
    margin-top: 2px;
    max-width: 84px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  ${({ $selected }) =>
    $selected &&
    css`
      background: ${xp.selection};
      border-color: ${xp.selection};
      color: #fff;

      img {
        border-color: #fff;
      }
    `}

  ${({ $selected }) =>
    !$selected &&
    css`
      &:hover {
        background: rgba(49, 106, 197, 0.15);
      }
    `}
`;

/* ── Other tabs / icon properties ── */

export const PlaceholderNote = styled.p`
  margin: 0;
  line-height: 1.55;
  color: #000;
`;

export const AppearanceLayout = styled.div`
  display: grid;
  gap: 12px;
`;

export const IconSizePreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 12px;
  border: 1px solid ${xp.border};
  background: #004e98;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.85);

  img {
    object-fit: contain;
  }
`;

export const IconGeneralLayout = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 12px 16px;
  align-items: start;
`;

export const IconLarge = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

export const IconFields = styled.div`
  display: grid;
  gap: 10px;
`;

export const PropertiesRow = styled.div`
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 8px;
  align-items: baseline;
  font-size: 11px;

  span:first-child {
    color: #000;
  }
`;

export const PropertiesDivider = styled.div`
  height: 1px;
  margin: 12px 0 8px;
  background: ${xp.border};
  box-shadow: 0 1px 0 #fff;
`;

export const CheckboxRow = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: #808080;

  input {
    margin: 0;
  }
`;

/* ── Button row ── */

export const PropertiesActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 10px 8px 2px;
  background: ${xp.face};

  button {
    min-width: 75px;
    height: 23px;
    padding: 0 12px;
    border: 1px solid ${xp.borderDark};
    border-radius: 3px;
    background: linear-gradient(180deg, #fff 0%, ${xp.face} 55%, #d8d4c8 100%);
    box-shadow: inset 0 1px 0 #fff;
    font: inherit;
    font-size: 11px;
    color: #000;
    cursor: default;

    &:disabled {
      color: #808080;
    }

    &:active:not(:disabled) {
      background: #dcd9ce;
      box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.15);
    }
  }
`;
