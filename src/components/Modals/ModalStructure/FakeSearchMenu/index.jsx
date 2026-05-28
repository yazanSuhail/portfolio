import React from "react";
import { SearchMenu, FakeInputContainer } from "../../styles";

import { Go, halfArrouwDown } from "../../../../assets";

function FakeSearchMenu({ handleIsMenuOpen, address }) {
  const { icon, label } = address ?? { icon: null, label: "My Computer" };

  return (
    <SearchMenu onMouseEnter={() => handleIsMenuOpen()}>
      <div>Address</div>
      <FakeInputContainer>
        <div>
          {icon && <img src={icon} width={"18rem"} alt="" />}
          <span>{label}</span>
        </div>
        <div>
          {" "}
          <img src={halfArrouwDown} alt="" />
        </div>
      </FakeInputContainer>
      <div>
        <button>
          <img src={Go} /> Go
        </button>
      </div>
    </SearchMenu>
  );
}

export default FakeSearchMenu;
