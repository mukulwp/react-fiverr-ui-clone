import React from "react";
import { Link } from "react-router-dom";
import "./GigCard.scss";
import Star from "../../images/star.png";
import Heart from "../../images/heart.png";

const GigCard = ({ item }) => {
  const {desc, img, username, price, pp} = item;
  return (
    <Link to="/gig/123" state={{username, desc, img, price, pp}}>
      <div className="gigCard">
        <img src={img} alt={username} />
        <div className="info">
          <div className="user">
            <img src={pp} alt={username} />
            <h5>{username}</h5>
          </div>
          <p>{desc}</p>
          <div className="star">
            <img src={Star} alt="star" />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="details">
          <img src={Heart} alt="heart" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>${price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
