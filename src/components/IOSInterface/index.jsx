import React from "react";
import {
  findMe,
  safari,
  calculator,
  camera,
  wallet,
  contacts,
  appleMusic,
  notes,
  iMessage,
  appleTv,
  facetime,
} from "../../assets";
import {
  GridContainer,
  SubMenu,
  MobileContainer,
  TopContent,
  MidSpace,
} from "./styles";

function MobileInterface() {
  const handleIconClick = () => {
    alert("Hello");
  };

  return (
    <MobileContainer>
      <GridContainer>
        Still Working on Mobile, please use Desktop view for now!
        <TopContent>
          <div onClick={handleIconClick}>
            <img width="60px" src={findMe} alt="findMe" />
          </div>
          <div>
            <img width="60px" src={safari} alt="safari" />
          </div>
          <div>
            <img width="60px" src={camera} alt="calculator" />
          </div>
          <div>
            <img width="60px" src={wallet} alt="wallet" />
          </div>
          <div>
            <img width="60px" src={contacts} alt="contacts" />
          </div>
          <div>
            <img width="60px" src={appleMusic} alt="appleMusic" />
          </div>
          <div>
            <img width="60px" src={notes} alt="notes" />
          </div>
        </TopContent>
        <MidSpace />
        <SubMenu>
          <div>
            <img width="60px" src={iMessage} alt="calculator" />
          </div>
          <div>
            <img width="60px" src={appleTv} alt="calculator" />
          </div>
          <div>
            <img width="60px" src={facetime} alt="calculator" />
          </div>
          <div>
            <img width="60px" src={calculator} alt="calculator" />
          </div>
        </SubMenu>
      </GridContainer>
    </MobileContainer>
  );
}

export default MobileInterface;
