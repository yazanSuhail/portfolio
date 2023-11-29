import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "./styles";

const CarouselComponent = ({ carouselItems }) => {
  return (
    <Container>
      <Carousel showIndicators showArrows showStatus>
        {carouselItems?.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={`Slide ${index + 1}`} />
            <p className="legend">{item.legend}</p>
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default CarouselComponent;
