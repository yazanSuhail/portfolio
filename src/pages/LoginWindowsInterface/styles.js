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
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    position: relative;
    top: 10px;
    left: -10px;
    cursor: pointer;
    width: 2.4rem;
    border-radius: 5px;
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 2rem;
  margin: 0 auto;
`;

export const RightSideContent = styled.div`
  outline: none;
  cursor: pointer;
  display: grid;
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
  gap: 1rem;
`;

export const LoadingMainAccountContainer = styled.div`
  display: flex;
  justify-content: baseline;
  div {
    position: relative;
    left: -247px;
    bottom: -70px;
  }
`;

export const InputContainer = styled.div`
  display: flex;

  align-items: center;
  border: none;
  outline: none;
  border-radius: 5px;
  position: relative;
  top: -37px;
  left: 120px;
  gap: 0.5rem;
  input {
    font-size: 2rem;
    width: 9rem;
    height: 2rem;
    outline: none;
    border: none;
    border-radius: 0.5rem;
  }
  img {
    width: 2rem;
    border-radius: 5px;
    border: 1px solid #fff;
    box-shadow: 2px 2px 0px 0px #00489a,
      inset -1px -2px 4px 0 rgba(0, 0, 0, 0.7);
  }
  span {
    background-color: #0573f3;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    color: #fff;
    cursor: pointer;
    border: 1px solid #fff;
    border-radius: 5px;
    width: 32px;
    height: 32px;
    background-image: linear-gradient(
      150deg,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(70, 161, 252, 0) 50%
    );
    box-shadow: 2px 2px 0px 0px #00489a,
      inset -1px -2px 4px 0 rgba(0, 0, 0, 0.7);
  }
`;

export const MainUser = styled.div`
  display: flex;

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
      outline: 3px solid #ffd700;
      cursor: pointer;
      opacity: 100;
    }
  }
`;

export const ActiveMainUser = styled.div`
  display: flex;

  img {
    width: 80px;
    height: 80px;
    margin-right: 20px;
    border: 3px solid #fff;
    border-radius: 8px;
  }

  span {
    font-size: 1.8rem;
  }
`;

export const GuestUser = styled.div`
  display: flex;
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
      outline: 3px solid #ffd700;
      cursor: pointer;
      opacity: 100;
    }
  }
`;

export const LeftSide = styled.div`
  font-size: 2rem;
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

export const Loading = styled.div`
  font-size: 1rem;
  color: #004da3;
`;

export const Container = styled.div`
  cursor: pointer;
  background: linear-gradient(90deg, #00489a 60%, rgba(255, 255, 255, 0) 100%);
  background-clip: padding-box;
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
  position: relative;
  background-clip: padding-box;
  border: 1px solid transparent;
`;

export const Error = styled.div`
  position: absolute;
  top: 40px;
  max-width: 11rem;
  font-size: 0.7rem;
`;

export const LoadingImageMainAccount = styled.img`
  outline: 3px solid #ffd700;
  width: 80px;
  height: 80px;
  margin-right: 20px;
  border: 3px solid #fff;
  border-radius: 8px;
`;
