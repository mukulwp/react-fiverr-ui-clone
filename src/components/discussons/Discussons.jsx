import React from "react";
import "./Discussons.scss";
import CheckIcon from "../../images/check.png";

const Discussons = () => {
  return (
    <div className="discussons">
      <div className="container">
        <div className="textContent">
          <h2>
            Fiverr <i>business</i>
          </h2>
          <h2>A business solution designed for teams</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quae
            molestiae officia eius nihil commodi.
          </p>
          <div className="info">
            <img src={CheckIcon} alt="check" />
            <span>Connect to freelancers with proven business experience</span>
          </div>
          <div className="info">
            <img src={CheckIcon} alt="check" />
            <span>Connect to freelancers with proven business experience</span>
          </div>
          <div className="info">
            <img src={CheckIcon} alt="check" />
            <span>Connect to freelancers with proven business experience</span>
          </div>
          <button>Explore Fiverr Business</button>
        </div>
        <div className="imgContent">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Discussons;
