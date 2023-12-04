import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CloseBtn } from "./styles";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { Container } from "./styles";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 50,
  p: 4,
};

const CarouselComponent = ({ carouselItems, open, setOpen }) => {
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <CloseBtn>
            <CloseIcon onClick={handleClose} />
          </CloseBtn>
          <Container>
            <Carousel
              centerSlidePercentage={70}
              centerMode={true}
              showIndicators
              showArrows
              showThumbs={false}
              autoFocus
              showStatus>
              {carouselItems?.map((item, index) => (
                <div key={index}>
                  <img
                    style={{ paddingRight: "25px", paddingLeft: "25px" }}
                    src={item.image}
                    alt={`Slide ${index + 1}`}
                  />
                  <p className="legend">{item.legend}</p>
                </div>
              ))}
            </Carousel>
          </Container>
        </Box>
      </Modal>
    </>
  );
};

export default CarouselComponent;
