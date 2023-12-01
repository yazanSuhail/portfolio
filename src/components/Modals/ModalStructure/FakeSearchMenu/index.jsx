import React from "react";
import { SearchMenu, FakeInputContainer } from "../../styles";

import { computer, Go, halfArrouwDown } from "../../../../assets";

function FakeSearchMenu({ handleIsMenuOpen }) {
  return (
    <SearchMenu onMouseEnter={() => handleIsMenuOpen()}>
      <div>Address</div>
      <FakeInputContainer>
        <div>
          <img src={computer} width={"18rem"} />
          <span>My Computer</span>
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
