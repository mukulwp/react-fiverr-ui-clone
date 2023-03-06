import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "./Slide.scss";

const Slide = ({children}) => {
  let myCustomSlider = useRef();

  const goToNext = () => {
    myCustomSlider.current.slickNext();
  };
  const goToPrev = () => {
    myCustomSlider.current.slickPrev();
  };
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slide">
      <div className="container">
        <div className="arrows">
          <div className="arrowLeft" onClick={() => goToPrev()}>
            <FaArrowLeft />
          </div>
          <div className="arrowRight" onClick={() => goToNext()}>
            <FaArrowRight />
          </div>
        </div>
        <Slider {...settings} ref={myCustomSlider}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
