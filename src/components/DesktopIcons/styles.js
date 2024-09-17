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
    props.isselected === "true" &&
    `
    > span {
      background-color: rgb(11, 97, 255);
      opacity: 0.8;
      border: 1px dotted;
      padding: 0;
    }
  `}
  .image {
    width: 6rem !important;
  }
  .song {
    margin-top: -1rem;
  }
`;

export const AudioPlayer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 30rem;
  transform: translate(-50%, -50%);
  background: lightgray;
  width: 30rem;
  height: 5rem;
  display: grid;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  img {
    width: 1rem;
  }
`;
