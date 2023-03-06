import React from "react";
import "./Features.scss";
import Video from "../../images/video.mp4";
import { FaCheckCircle } from "react-icons/fa";

const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="textContent">
          <h2>A whole world of freelance talent at your fingertips</h2>
          <div className="info">
            <FaCheckCircle />
            <h5>The best for every budget</h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            in aliquam architecto. Adipisci, quis dignissimos?
          </p>
          <div className="info">
            <FaCheckCircle />
            <h5>Quality work done quickly</h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            in aliquam architecto. Adipisci, quis dignissimos?
          </p>
        </div>
        <div className="videoContent">
          <video src={Video} controls></video>
        </div>
      </div>
    </div>
  );
};

export default Features;
