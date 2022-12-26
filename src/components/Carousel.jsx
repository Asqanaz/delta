import React from "react";
import Slider from "react-slick";

export const Carousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    appendDots: (dots) => <ul className="slider-dots">{dots}</ul>,
    customPaging: (slider, i) => {
      console.log(slider);
      return (
        <div className="dot">
          <div className="inner-dot"></div>
        </div>
      );
    },
  };
  return (
    <div>
      <h2>Single Item</h2>
      <Slider {...settings}></Slider>
    </div>
  );
};
