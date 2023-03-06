import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { BsCoin } from "react-icons/bs";
import CategoriesItem from "../categoriesItem/CategoriesItem";
import "./Footer.scss";
import Accessibility from "../../images/accessibility.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="top">
          <CategoriesItem />
          <CategoriesItem />
          <CategoriesItem />
          <CategoriesItem />
          <CategoriesItem />
        </div>
        <div className="bottom">
          <div className="left">
            <h2>fiverr</h2>
            <span>
              &copy; Fiverr International Ltd. {new Date().getFullYear()}
            </span>
          </div>
          <div className="right">
            <div className="social">
              <Link to="/">
                <FaFacebook />
              </Link>
              <Link to="/">
                <FaTwitter />
              </Link>
              <Link to="/">
                <FaInstagram />
              </Link>
              <Link to="/">
                <FaYoutube />
              </Link>
            </div>
            <div className="link">
              <CiGlobe />
              <span>English</span>
            </div>
            <div className="link">
              <BsCoin />
              <span>USD</span>
            </div>
            <img src={Accessibility} alt="accessibility" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
