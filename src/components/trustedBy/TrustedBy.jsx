import React from "react";
import Slider from "react-slick";
import "./TrustedBy.scss";
import BinanceImg from "../../images/1.svg";
import CrollaImg from "../../images/logo-amazon.svg";
import EvgaImg from "../../images/evga.svg";
import TeslaImg from "../../images/tesla-9.svg";
import SonyImg from "../../images/sony-logo.svg";

const TrustedBy = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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
    <div className="trustedBy">
      <div className="container">
      <div>
        <span>Trusted By: </span>
      </div><br />
        <div>
          <Slider {...settings}>
            <div className="slideItem">
              <img src={BinanceImg} alt="Binance" />
            </div>
            <div className="slideItem">
              <img src={CrollaImg} alt="Crolla" />
            </div>
            <div className="slideItem">
              <img src={EvgaImg} alt="Evga" />
            </div>
            <div className="slideItem">
              <img src={TeslaImg} alt="Tesla" />
            </div>
            <div className="slideItem">
              <img src={SonyImg} alt="Sony" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
