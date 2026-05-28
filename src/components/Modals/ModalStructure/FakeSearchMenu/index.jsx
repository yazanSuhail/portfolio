import React from "react";
import {
  SearchMenu,
  AddressLabel,
  FakeInputContainer,
  GoButton,
} from "../../styles";

import { Go, halfArrouwDown } from "../../../../assets";

function FakeSearchMenu({ handleIsMenuOpen, address }) {
  const { icon, label } = address ?? { icon: null, label: "My Computer" };

  return (
    <SearchMenu onMouseEnter={() => handleIsMenuOpen()}>
      <AddressLabel>Address</AddressLabel>
      <FakeInputContainer>
        <div className="address-content">
          {icon && <img src={icon} alt="" />}
          <span>{label}</span>
        </div>
        <div className="address-dropdown">
          <img src={halfArrouwDown} alt="" />
        </div>
      </FakeInputContainer>
      <GoButton type="button">
        <img src={Go} alt="" />
        Go
      </GoButton>
    </SearchMenu>
  );
}

export default FakeSearchMenu;
