import React from "react";
import { SubMenu } from "../../styles";
import { useShowPreviewContext } from "../../../../contexts/useBoolean";

function NavSubMenu({ handleIsMenuOpen, submenuItems }) {
  return (
    <SubMenu onMouseEnter={() => handleIsMenuOpen()}>
      {submenuItems.map((item, index) => (
        <button key={index}>
          {item.iconSrc && <img src={item.iconSrc} alt={item.label} />}
          <span>{item.label}</span>
        </button>
      ))}
    </SubMenu>
  );
}

export default NavSubMenu;
