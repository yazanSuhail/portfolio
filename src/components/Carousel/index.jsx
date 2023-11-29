import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "./styles";

import { IBM, freelance } from "../../assets";

const CarouselComponent = ({ carouselItems }) => {
  return (
    <Container>
      <Carousel>
        {carouselItems?.map((item, index) => (
          <div key={index}>
            <img height="100%" src={item.image} alt={`Slide ${index + 1}`} />
            <p className="legend">{item.legend}</p>
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default CarouselComponent;
