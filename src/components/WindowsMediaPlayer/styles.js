import styled from "styled-components";
import { mobileQuery } from "../../constants/breakpoints";

const wmpBlue = "#1b3f8b";
const wmpLight = "#d8e8ff";
const wmpPanel = "#0f1f4a";

export const WmpPortal = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
`;

export const WmpShell = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #0831d9;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  font-family: Tahoma, "MS Sans Serif", sans-serif;
  font-size: 11px;
  color: #000;
  background: #ece9d8;
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.35),
    4px 4px 12px rgba(0, 0, 0, 0.35);

  ${({ $maximized }) =>
    $maximized &&
    `
    border-radius: 0;
  `}
`;

export const WmpTitleBar = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  padding: 0 4px 0 6px;
  background: linear-gradient(
    180deg,
    #3a8cef 0%,
    #448ee9 6%,
    #3b7fe0 18%,
    #2f6fce 50%,
    #255eb8 88%,
    #1e4f9f 100%
  );
  color: #fff;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  flex-shrink: 0;

  img.title-icon {
    width: 16px;
    height: 16px;
  }

  span.title-text {
    flex: 1;
    font-size: 12px;
    font-weight: bold;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  }
`;

export const WmpMenuBar = styled.div`
  display: flex;
  gap: 2px;
  height: 22px;
  padding: 0 4px;
  background: linear-gradient(180deg, #f6f4ec 0%, #ece9d8 100%);
  border-bottom: 1px solid #aca899;
  flex-shrink: 0;

  button {
    border: none;
    background: transparent;
    font-family: inherit;
    font-size: 11px;
    padding: 3px 8px;
    cursor: default;
    color: #000;

    &:hover {
      background: #316ac5;
      color: #fff;
    }
  }
`;

export const WmpBody = styled.div`
  display: flex;
  flex: 1;
  min-height: 0;
  background: linear-gradient(180deg, #8eb4e3 0%, #5a8fd0 100%);
`;

export const WmpSidebar = styled.nav`
  width: 148px;
  flex-shrink: 0;
  padding: 8px 0 8px 6px;
  background: linear-gradient(90deg, #b8d4f1 0%, #9ec5eb 40%, #7eb0e2 100%);
  border-right: 1px solid #5a8cc8;
  overflow-y: auto;

  @media screen and ${mobileQuery} {
    width: 108px;
  }
`;

export const WmpNavItem = styled.button`
  display: block;
  width: calc(100% - 4px);
  text-align: left;
  border: none;
  background: ${({ $active }) =>
    $active ? "linear-gradient(90deg, #fff 0%, #e8f2fc 100%)" : "transparent"};
  color: ${({ $active }) => ($active ? wmpBlue : "#1a3366")};
  font-family: inherit;
  font-size: 11px;
  font-weight: ${({ $active }) => ($active ? "bold" : "normal")};
  padding: 5px 8px 5px ${({ $active }) => ($active ? "14px" : "10px")};
  margin-bottom: 2px;
  border-radius: 12px 0 0 12px;
  cursor: default;
  position: relative;

  ${({ $active }) =>
    $active &&
    `
    &::before {
      content: "▶";
      position: absolute;
      left: 4px;
      font-size: 8px;
      top: 50%;
      transform: translateY(-50%);
    }
  `}
`;

export const WmpMain = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  background: ${wmpPanel};
`;

export const WmpTrackHeader = styled.div`
  padding: 10px 14px 6px;
  color: #fff;
  flex-shrink: 0;

  .composer {
    font-size: 10px;
    opacity: 0.85;
    margin-bottom: 2px;
  }

  .title {
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 0.2px;
  }

  @media screen and ${mobileQuery} {
    .title {
      font-size: 16px;
    }
  }
`;

export const WmpVizArea = styled.div`
  flex: 1;
  min-height: 120px;
  margin: 0 10px;
  border: 2px solid #000;
  background: #000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const VizCanvas = styled.canvas`
  flex: 1;
  width: 100%;
  min-height: 0;
  display: block;
`;

export const WmpVizBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 22px;
  padding: 0 6px;
  background: #1a1a1a;
  color: #ccc;
  font-size: 10px;
  flex-shrink: 0;

  .viz-name {
    flex: 1;
    text-align: center;
    color: #e0e0e0;
  }

  .viz-btns {
    display: flex;
    gap: 4px;
    opacity: 0.8;
  }
`;

export const WmpStatusBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
  padding: 0 12px;
  background: #0a0a0a;
  color: #fff;
  font-size: 10px;
  flex-shrink: 0;

  .album {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .time {
    opacity: 0.9;
  }
`;

export const WmpPlaylist = styled.aside`
  width: 200px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #1a3366 0%, #0f1f4a 100%);
  border-left: 1px solid #3a5f9a;

  @media screen and ${mobileQuery} {
    display: none;
  }
`;

export const WmpPlaylistHeader = styled.div`
  height: 26px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  background: linear-gradient(180deg, #c5daf5 0%, #9ebce8 100%);
  color: #000;
  font-weight: bold;
  border-bottom: 1px solid #6a94c4;
`;

export const WmpAlbumArt = styled.div`
  padding: 12px;
  text-align: center;
  color: #b8d4ff;
  border-bottom: 1px solid #2a4a7a;

  a {
    color: #8ec5ff;
    font-size: 10px;
    text-decoration: underline;
    cursor: default;
  }

  .art-placeholder {
    width: 80px;
    height: 80px;
    margin: 8px auto;
    background: linear-gradient(135deg, #2a5080 0%, #1a3058 100%);
    border: 1px solid #4a7ab0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
  }

  .album-name {
    font-size: 11px;
    font-weight: bold;
    color: #fff;
  }
`;

export const WmpTrackList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 4px 0;
  flex: 1;
  overflow-y: auto;

  li {
    display: flex;
    justify-content: space-between;
    padding: 3px 10px;
    font-size: 11px;
    color: #fff;
    cursor: default;

    &.active {
      background: #3d7a1f;
      color: #fff;
    }

    &:hover:not(.active) {
      background: rgba(255, 255, 255, 0.08);
    }
  }
`;

export const WmpControls = styled.div`
  flex-shrink: 0;
  padding: 8px 10px 10px;
  background: linear-gradient(
    180deg,
    #d4dce8 0%,
    #b8c4d4 15%,
    #9aa8bc 50%,
    #8a98ac 85%,
    #7a889c 100%
  );
  border-top: 1px solid #6a7a8c;
`;

export const WmpSeekBar = styled.div`
  height: 14px;
  margin-bottom: 8px;
  background: linear-gradient(180deg, #4a5a6a 0%, #2a3a4a 100%);
  border: 1px solid #1a2a3a;
  border-radius: 2px;
  position: relative;
  cursor: pointer;

  .fill {
    height: 100%;
    background: linear-gradient(180deg, #6a8a5a 0%, #4a6a3a 100%);
    border-radius: 1px;
    pointer-events: none;
  }

  .thumb {
    position: absolute;
    top: 50%;
    width: 12px;
    height: 12px;
    transform: translate(-50%, -50%);
    background: linear-gradient(180deg, #8fdf6a 0%, #4a9a2a 100%);
    border: 1px solid #2a6a1a;
    border-radius: 1px;
    pointer-events: none;
  }
`;

export const WmpControlRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const WmpControlBtn = styled.button`
  width: ${({ $large }) => ($large ? "36px" : "28px")};
  height: ${({ $large }) => ($large ? "36px" : "28px")};
  border-radius: 50%;
  border: 1px solid ${({ $primary }) => ($primary ? "#2a6a1a" : "#3a5080")};
  background: ${({ $primary }) =>
    $primary
      ? "radial-gradient(circle at 35% 30%, #b8f0a0 0%, #5aad3a 45%, #3a8a2a 100%)"
      : "radial-gradient(circle at 35% 30%, #e8f0ff 0%, #8aa8d8 50%, #5a7ab0 100%)"};
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    0 1px 2px rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ $large }) => ($large ? "14px" : "10px")};
  color: ${({ $primary }) => ($primary ? "#1a4010" : "#1a2a50")};
  padding: 0;
  flex-shrink: 0;

  &:active {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const WmpVolume = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;

  .vol-track {
    width: 80px;
    height: 10px;
    background: linear-gradient(180deg, #4a5a6a 0%, #2a3a4a 100%);
    border: 1px solid #1a2a3a;
    border-radius: 2px;
    position: relative;
    cursor: pointer;
  }

  .vol-fill {
    height: 100%;
    background: linear-gradient(180deg, #6a8a5a 0%, #4a6a3a 100%);
  }

  .vol-thumb {
    position: absolute;
    top: 50%;
    width: 10px;
    height: 10px;
    transform: translate(-50%, -50%);
    background: linear-gradient(180deg, #8fdf6a 0%, #4a9a2a 100%);
    border: 1px solid #2a6a1a;
  }
`;

export const HiddenAudio = styled.audio`
  display: none;
`;
