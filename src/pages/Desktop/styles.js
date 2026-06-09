import styled, { css } from "styled-components";
import { mobileQuery } from "../../constants/breakpoints";

export const DesktopContainer = styled.div`
  position: relative;
  isolation: isolate;
  height: 100vh;
  height: 100dvh;
  width: 100%;
  overflow: hidden;
  background-color: #004e98;
  -webkit-tap-highlight-color: transparent;

  ${({ $wallpaperUrl, $position }) =>
    $wallpaperUrl &&
    css`
      background-image: url(${$wallpaperUrl});

      ${$position === "tile" &&
      css`
        background-repeat: repeat;
        background-size: auto;
        background-position: top left;
      `}

      ${$position === "center" &&
      css`
        background-repeat: no-repeat;
        background-size: auto;
        background-position: center center;
      `}

      ${($position === "stretch" || !$position) &&
      css`
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center center;
      `}
    `}

  @media screen and ${mobileQuery} {
    background-size: cover;
    background-position: center center;
  }
`;
