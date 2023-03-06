import React from "react";
import { Link } from "react-router-dom";
import "./CategoriesItem.scss";

const CategoriesItem = () => {
  return (
    <div className="categoriesItem">
      <div className="items">
      <h3>Categories</h3>
      <Link className="link menuLink" to="/">
        Graphics & Design
      </Link>
      <Link className="link menuLink" to="/">
        Video & Animation
      </Link>
      <Link className="link menuLink" to="/">
        Writing & Translation
      </Link>
      <Link className="link menuLink" to="/">
        AI Services
      </Link>
      <Link className="link menuLink" to="/">
        Digital Marketing
      </Link>
      <Link className="link menuLink" to="/">
        Music & Audio
      </Link>
      <Link className="link menuLink" to="/">
        Programming & Tech
      </Link>
      <Link className="link menuLink" to="/">
        Business
      </Link>
      <Link className="link menuLink" to="/">
        Lifestyle
      </Link>
    </div>
    </div>
  );
};

export default CategoriesItem;
