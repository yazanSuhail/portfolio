import styled, { css } from "styled-components";
import { mobileQuery } from "../../constants/breakpoints";

export const IconsContainer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
`;

export const IconSlot = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ $slotWidth }) => $slotWidth}px;
  min-height: ${({ $slotHeight }) => $slotHeight}px;
  pointer-events: auto;
  touch-action: none;
  user-select: none;
  cursor: default;
  z-index: ${({ $dragging }) => ($dragging ? 50 : 1)};
  will-change: ${({ $dragging }) => ($dragging ? "transform" : "auto")};
  transition: ${({ $dragging }) =>
    $dragging ? "none" : "transform 0.15s ease-out"};

  &:hover {
    z-index: ${({ $dragging }) => ($dragging ? 50 : 2)};
  }

  ${({ $selected }) =>
    $selected &&
    `
    span {
      background-color: rgb(11, 97, 255);
      outline: 1px dotted #fff;
      padding: 0 2px;
    }
  `}
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  width: 100%;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.85);

  img {
    width: ${({ $iconPx }) => $iconPx}px;
    height: ${({ $iconPx }) => $iconPx}px;
    object-fit: contain;
    pointer-events: none;
    flex-shrink: 0;
  }

  span {
    font-size: ${({ $fontSize }) => $fontSize}px;
    line-height: 1.15;
    max-width: ${({ $labelMaxWidth }) => $labelMaxWidth}px;
    word-break: break-word;
    pointer-events: none;
  }

  ${({ $isMusic, $labelPull }) =>
    $isMusic &&
    css`
      gap: 2px;
      line-height: 0;

      span {
        margin-top: ${-$labelPull}px;
        line-height: 1.15;
      }
    `}
`;

export const MobileIconsGrid = styled.div`
  position: absolute;
  inset: 0;
  bottom: ${({ $taskbarHeight }) => $taskbarHeight}px;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px 8px;
  padding: 24px 12px;
  align-content: start;
  overflow-y: auto;
  pointer-events: auto;
  -webkit-overflow-scrolling: touch;
`;

export const MobileIconButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 8px 4px;
  border: none;
  background: transparent;
  color: #fff;
  font-family: Tahoma, "MS Sans Serif", sans-serif;
  font-size: 11px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.85);
  cursor: pointer;
  touch-action: manipulation;

  img {
    width: ${({ $large }) => ($large ? "56px" : "48px")};
    height: ${({ $large }) => ($large ? "56px" : "48px")};
    display: block;
    object-fit: contain;
    flex-shrink: 0;
  }

  span {
    line-height: 1.15;
    word-break: break-word;
    max-width: 80px;
  }

  ${({ $selected }) =>
    $selected &&
    css`
      span {
        background-color: rgb(11, 97, 255);
        outline: 1px dotted #fff;
        padding: 0 2px;
      }
    `}
`;

export const AudioPlayer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: lightgray;
  width: 30rem;
  height: 5rem;
  display: grid;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  pointer-events: auto;

  img {
    width: 1rem;
  }

  @media screen and ${mobileQuery} {
    top: auto;
    bottom: calc(44px + 12px);
    left: 8px;
    right: 8px;
    transform: none;
    width: auto;
    max-width: none;
    height: auto;
    padding: 8px;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
  }
`;
