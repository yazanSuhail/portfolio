import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 0.5fr auto;
  place-items: center;
  gap: 4rem;
  padding: 1rem 0 1rem 0;
  height: 100vh;
  overflow: hidden;
  background-color: black;
  border-radius: 15px;
`;

export const MobileContainer = styled.div`
  background-color: #fff;
  border-radius: 15px;
`;

export const TopContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

export const SubMenu = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
  grid-row: 3;
`;

export const MidSpace = styled.div`
  width: 100%;
`;
