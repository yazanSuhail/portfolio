import styled from "styled-components";

export const IconsContainer = styled.div`
  display: grid;
  width: 5rem;
  padding: 1rem;
  gap: 2rem;
  img {
    width: 2.5rem;
  }
  > div {
    font-size: 13px;
  }
`;

export const Icon = styled.div`
  white-space: pre;
  display: grid;
  place-items: center;
  gap: 0.5rem;
  cursor: default;
  ${(props) =>
    props.isSelected &&
    `
    > span {
      background-color: rgb(11, 97, 255);
      opacity: 0.8;
      border: 1px dotted;
      padding: 0;
    }
  `}
`;
