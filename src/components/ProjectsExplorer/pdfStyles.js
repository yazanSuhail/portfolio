import styled from "styled-components";

const xp = {
  chromeFace: `linear-gradient(180deg, #f6f4ec 0%, #ece9d8 100%)`,
  border: "#aca899",
  borderDark: "#716f64",
  selection: "#316ac5",
};

export const PdfWindow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #0058e6;
  border-radius: 8px 8px 0 0;
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.35),
    4px 4px 12px rgba(0, 0, 0, 0.35);
  background: #ece9d8;
  font-family: Tahoma, "MS Sans Serif", sans-serif;
  overflow: hidden;
  color: #000;

  ${(props) =>
    props.$maximized &&
    `
    border-radius: 0;
  `}
`;

export const PdfMenuBar = styled.div`
  display: flex;
  align-items: center;
  height: 22px;
  padding: 0 2px;
  background: ${xp.chromeFace};
  border-bottom: 1px solid ${xp.border};
  flex-shrink: 0;
`;

export const PdfMenuItem = styled.span`
  padding: 3px 7px;
  font-size: 11px;
  line-height: 1;
  cursor: default;

  &:hover {
    color: #fff;
    background: ${xp.selection};
  }
`;

export const PdfToolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  height: 28px;
  padding: 2px 4px;
  background: ${xp.chromeFace};
  border-bottom: 1px solid ${xp.border};
  flex-shrink: 0;
`;

export const PdfToolButton = styled.button`
  min-width: 24px;
  height: 22px;
  padding: 0 4px;
  border: 1px solid transparent;
  border-radius: 0;
  background: transparent;
  font-family: Tahoma, "MS Sans Serif", sans-serif;
  font-size: 11px;
  color: #000;
  cursor: default;
  line-height: 1;

  &:hover:not(:disabled) {
    border-color: ${xp.border};
    background: linear-gradient(180deg, #fff 0%, #ece9d8 100%);
  }

  &:active:not(:disabled) {
    border-color: ${xp.borderDark};
    background: #d4d0c8;
  }

  &:disabled {
    opacity: 0.45;
    cursor: default;
  }
`;

export const PdfToolbarDivider = styled.div`
  width: 1px;
  height: 20px;
  margin: 0 3px;
  background: ${xp.border};
`;

export const PdfZoomSelect = styled.select`
  height: 20px;
  padding: 0 2px;
  border: 1px solid ${xp.border};
  background: #fff;
  font-family: Tahoma, "MS Sans Serif", sans-serif;
  font-size: 11px;
  color: #000;
`;

export const PdfDocumentArea = styled.div`
  flex: 1;
  min-height: 0;
  overflow: auto;
  background: #808080;
  padding: 24px 16px;
`;

export const PdfPage = styled.article`
  width: min(100%, ${({ $zoom }) => 612 * ($zoom / 100)}px);
  min-height: ${({ $zoom }) => 792 * ($zoom / 100)}px;
  margin: 0 auto;
  padding: ${({ $zoom }) => `${48 * ($zoom / 100)}px ${56 * ($zoom / 100)}px`};
  background: #fff;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  box-sizing: border-box;
`;

export const PdfPageTitle = styled.h1`
  margin: 0 0 ${({ $zoom }) => 16 * ($zoom / 100)}px;
  font-size: ${({ $zoom }) => 18 * ($zoom / 100)}px;
  font-weight: bold;
  line-height: 1.2;
  color: #000;
`;

export const PdfPageBody = styled.div`
  font-size: ${({ $zoom }) => 12 * ($zoom / 100)}px;
  line-height: 1.5;
  color: #000;
  white-space: pre-wrap;
  word-break: break-word;
`;

export const PdfStatusBar = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 22px;
  padding: 0 8px;
  background: ${xp.chromeFace};
  border-top: 1px solid ${xp.border};
  font-size: 11px;
  color: #000;
  flex-shrink: 0;
`;
