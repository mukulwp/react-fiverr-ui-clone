import React from "react";
import "./Gig.scss";
import StarImg from "../../images/star.png";
import Slider from "react-slick";
import ClockImg from "../../images/clock.png";
import RecycleImg from "../../images/recycle.png";
import GreenCheck from "../../images/greencheck.png";
import Reviews from "../../components/reviews/Reviews";
import { useLocation } from "react-router-dom";

const Gig = () => {
  const location = useLocation();
  const settings = {
    customPaging: function (i) {
      return <img src={location.state.img} alt="" />;
    },
    infinite: true,
    dots: true,
    dotsClass: "slick-dots customImg slick-thumb",
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    lazyLoad: true,
  };
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="bredCrumbs">Fiverr &gt; Graphics & Design</span>
          <h1>{location.state.desc}</h1>
          <div className="user">
            <img src={location.state.pp} alt={location.state.username} />
            <span>{location.state.username}</span>
            <div className="stars">
              <img src={StarImg} alt="star" />
              <img src={StarImg} alt="star" />
              <img src={StarImg} alt="star" />
              <img src={StarImg} alt="star" />
              <img src={StarImg} alt="star" />
              <span>5</span>
            </div>
          </div>
          <div className="gigImages">
            <Slider {...settings}>
              <div className="item">
                <img src={location.state.img} alt="" />
              </div>
              <div className="item">
                <img src={location.state.img} alt="" />
              </div>
              <div className="item">
                <img src={location.state.img} alt="" />
              </div>
            </Slider>
          </div>
          <h2>About Gig</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi
            architecto eius adipisci ipsum quam laudantium veniam sint quis
            sequi. Nesciunt a maiores nisi tenetur debitis sapiente ratione,
            quasi fugit quod eligendi eveniet neque placeat reiciendis
            voluptates est quibusdam, laborum autem modi nulla optio dolorum
            perferendis eaque voluptatum dignissimos. Amet!
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img src={location.state.pp} alt="" />
              <div className="info">
                <span>{location.state.username}</span>
                <div className="stars">
                  <img src={StarImg} alt="star" />
                  <img src={StarImg} alt="star" />
                  <img src={StarImg} alt="star" />
                  <img src={StarImg} alt="star" />
                  <img src={StarImg} alt="star" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Sep 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">3 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Language</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                suscipit ex, facilis in delectus porro aspernatur corrupti. Eum,
                omnis adipisci?
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <Reviews />
            <hr />
            <Reviews />
            <hr />
            <Reviews />
            <hr />
            <Reviews />
          </div>
        </div>
        <div className="right">
          <div className="top">
            <h3>1 AI generated image</h3>
            <h2>$ 55.99</h2>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt illum sed sunt porro sequi distinctio?</p>
          <div className="middle">
            <div className="item">
              <img src={ClockImg} alt="clock" />
              <span>2 Days Delivery</span>
            </div>
            <div className="item">
              <img src={RecycleImg} alt="recycle" />
              <span>Unlimited Revisions</span>
            </div>
          </div>
          <div className="bottom">
            <div className="item">
              <img src={GreenCheck} alt="check" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src={GreenCheck} alt="check" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src={GreenCheck} alt="check" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src={GreenCheck} alt="check" />
              <span>Prompt writing</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
