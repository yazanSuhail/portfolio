import React from "react";
import { SubMenu } from "../../styles";
import { useShowPreviewContext } from "../../../../contexts/useBoolean";

function NavSubMenu({ handleIsMenuOpen, submenuItems }) {
  const { togglePreview } = useShowPreviewContext();

  const handleBackClick = (label) => {
    if (label === "Back") {
      togglePreview();
    }
  };

  return (
    <SubMenu onMouseEnter={() => handleIsMenuOpen()}>
      {submenuItems.map((item, index) => (
        <button
          key={index}
          onClick={() => {
            handleBackClick(item.label);
          }}>
          {item.iconSrc && <img src={item.iconSrc} alt={item.label} />}
          <span>{item.label}</span>
        </button>
      ))}
    </SubMenu>
  );
}

export default NavSubMenu;
