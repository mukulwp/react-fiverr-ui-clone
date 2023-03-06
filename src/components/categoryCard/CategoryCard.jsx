import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.scss";

const CategoryCard = ({ item }) => {
  return (
    <>
      <div className="categoryCard">
        <Link to="/gigs?cat=design">
          <img src={item.img} alt={item.title} />
          <span className="desc">{item.desc}</span>
          <span className="title">{item.title}</span>
        </Link>
      </div>
    </>
  );
};

export default CategoryCard;
