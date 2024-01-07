import React from "react";
import { Container, Paper, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "./RoundCarousel.css";

const MyComponent = () => {
  const images = [
    "html.png",
    "css.png",
    "js.png",
    "react.png",
    "boot.png",
    "mui.png",
    "html.png",
    "css.png",
    "js.png",
    "react.png",
    "boot.png",
    "mui.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8, // Display 6 images at a time
    slidesToScroll: 1, // Scroll through 6 images at a time
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Container>
      <Paper
        sx={{ bgcolor: "inherit" }}
        elevation={3}
        className="carousel-container"
      >
        <Slider {...settings}>
          {images.map((image, index) => (
            <Paper
              sx={{ borderRadius: "50%" }}
              key={index}
              className="carousel-item"
              elevation={3}
            >
              <img src={image} alt={`Image ${index + 1}`} />
            </Paper>
          ))}
        </Slider>
      </Paper>
    </Container>
  );
};

export default MyComponent;
