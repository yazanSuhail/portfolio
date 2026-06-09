import styled from "styled-components";
import { mobileQuery } from "../../constants/breakpoints";

const xp = {
  selection: "#316ac5",
  border: "#aca899",
  borderDark: "#716f64",
  disabled: "#808080",
  menuBg: "#fff",
  separator: "#aca899",
};

export const ContextMenuRoot = styled.div`
  position: fixed;
  z-index: 100010;
  min-width: ${({ $width }) => $width ?? 190}px;
  padding: 2px;
  background: ${xp.menuBg};
  border: 1px solid ${xp.borderDark};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-family: Tahoma, "MS Sans Serif", sans-serif;
  font-size: 11px;
  color: #000;
`;

export const ContextMenuItem = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 20px;
  padding: 2px 20px 2px 24px;
  touch-action: manipulation;

  @media screen and ${mobileQuery} {
    min-height: 36px;
    padding: 6px 20px 6px 28px;
  }
  border: none;
  background: transparent;
  text-align: left;
  font: inherit;
  color: ${({ $disabled }) => ($disabled ? xp.disabled : "#000")};
  cursor: ${({ $disabled }) => ($disabled ? "default" : "default")};
  position: relative;
  white-space: nowrap;

  &:hover:not(:disabled) {
    color: #fff;
    background: ${xp.selection};
  }

  &:disabled {
    pointer-events: none;
  }
`;

export const ItemCheck = styled.span`
  position: absolute;
  left: 4px;
  width: 16px;
  text-align: center;
  font-size: 10px;
`;

export const ItemArrow = styled.span`
  position: absolute;
  right: 6px;
  font-size: 8px;
  line-height: 1;
`;

export const MenuSeparator = styled.div`
  height: 1px;
  margin: 3px 2px;
  background: ${xp.separator};
  box-shadow: 0 1px 0 #fff;
`;

export const SubmenuFlyout = styled.div`
  position: absolute;
  left: 100%;
  top: -3px;
  min-width: 180px;
  padding: 2px;
  background: ${xp.menuBg};
  border: 1px solid ${xp.borderDark};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const SubmenuRow = styled.div`
  position: relative;
`;
