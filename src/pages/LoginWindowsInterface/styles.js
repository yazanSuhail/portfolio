import styled from "styled-components";
import RightSide from "../../components/Modals/ModalStructure/ModalContent/RightSide";

export const Grid = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #fff;
  color: #fff;
  display: grid;
  grid-template-rows: 1fr 7fr 1fr;
  padding: 0;
`;

export const Head = styled.div`
  background-color: #004da3;
  flex-basis: 12.5%;
  border-style: solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    90deg,
    #004da3 0%,
    rgba(255, 255, 255, 0.8) 30%,
    rgba(255, 255, 255, 0.9) 40%,
    rgba(255, 255, 255, 0.9) 50%,
    #004da3 100%
  );
  border-width: 0 0 4px 0;
`;

export const Body = styled.div`
  background-color: #508fd9;
  border-image-source: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 5%,
    rgba(255, 255, 255, 0.5) 15%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0.5) 85%,
    rgba(255, 255, 255, 0) 95%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export const Footer = styled.div`
  background-color: #004da3;
  flex-basis: 12.5%;
  border-style: solid;
  border-image-slice: 1;
  padding: 40px 80px 40px 40px;
  display: flex;
  justify-content: space-between;
  border-image-source: linear-gradient(
    90deg,
    #004da3 0%,
    #f09644 30%,
    #f09644 40%,
    #f09644 50%,
    #004da3 100%
  );
  border-width: 4px 0 0 0;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
  gap: 2rem;
  margin: 0 auto;
`;

export const RightSideContent = styled.div`
  outline: none;
  cursor: pointer;
  display: flex;
  min-width: 400px;
  max-width: 100%;

  padding: 12px;
  border-radius: 8px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid transparent;
  border-right: 0;
  background-clip: padding-box;
  border: 1px solid transparent;

  img {
    opacity: 0.5;
    width: 80px;
    height: 80px;
    margin-right: 20px;
    border: 3px solid #fff;
    border-radius: 8px;
    box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.3);
  }

  span {
    opacity: 0.5;
    font-size: 1.8rem;
  }

  &:hover {
    span {
      opacity: 100;
    }
    img {
      outline: 1px solid yellow;
      cursor: pointer;
      opacity: 100;
    }
  }
`;

export const LeftSide = styled.div`
  border-image-source: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 5%,
    rgba(255, 255, 255, 0.5) 15%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0.5) 85%,
    rgba(255, 255, 255, 0) 95%,
    rgba(255, 255, 255, 0) 100%
  );
  border-image-slice: 0 1 0 0;
  border-right-style: solid;
  padding: 3rem;
`;
