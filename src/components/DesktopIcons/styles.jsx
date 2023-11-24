import styled from "styled-components";

export const IconsContainer = styled.div`
  display: grid;
  width: 5rem;
  padding: 2rem;
  gap: 2rem;
  img {
    width: 2.5rem;
  }
`;

export const Icon = styled.div`
  white-space: pre;
  display: grid;
  place-items: center;
  gap: 0.5rem;
  cursor: default;
  ${(props) =>
    props.numberofclicks === "1" &&
    `
  > div {
    background-color: rgb(11, 97, 255);
    opacity: 0.5;
  }
        `}
`;
