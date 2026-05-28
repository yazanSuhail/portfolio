import styled from "styled-components";

export const ExplorerGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 12px 8px;
  padding: 1rem 0.5rem;
  min-height: 18rem;
`;

export const ExplorerIconButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  width: 88px;
  min-height: 72px;
  padding: 6px 4px;
  border: 1px solid transparent;
  background: transparent;
  cursor: pointer;
  font-family: Tahoma, "MS Sans Serif", sans-serif;
  font-size: 11px;
  color: #000;
  text-align: center;
  word-break: break-word;

  &:hover {
    background: rgba(49, 106, 197, 0.12);
    border-color: rgba(49, 106, 197, 0.35);
  }

  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
    flex-shrink: 0;
  }

  &.gif-preview img {
    width: 48px;
    height: 48px;
    object-fit: cover;
    border: 1px solid #808080;
    background: #fff;
  }

  span {
    line-height: 1.2;
    max-width: 84px;
  }
`;

export const GifViewerPortal = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
`;

export const NotepadWindow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #0058e6;
  border-radius: 8px 8px 0 0;
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.35),
    4px 4px 12px rgba(0, 0, 0, 0.35);
  background: #fff;
  font-family: Tahoma, "MS Sans Serif", sans-serif;
  overflow: hidden;

  ${(props) =>
    props.isfullwidth === "true" &&
    `
    border-radius: 0;
  `}
`;

export const NotepadBody = styled.div`
  flex: 1;
  min-height: 0;
  padding: 8px;
  background: #fffffe;
  overflow: auto;

  p {
    margin: 0 0 10px;
    font-size: 12px;
    line-height: 1.4;
    white-space: pre-wrap;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    border: 1px solid #808080;
  }

  ${(props) =>
    props.isfullwidth === "true" &&
    `
    flex: 1;
    max-height: none;
    display: flex;
    flex-direction: column;

    img {
      flex: 1;
      width: auto;
      max-width: 100%;
      max-height: calc(100vh - 64px);
      margin: 0 auto;
      object-fit: contain;
    }
  `}
`;
