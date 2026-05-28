import styled, { css } from "styled-components";

export const DesktopContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: #004e98;

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
`;
