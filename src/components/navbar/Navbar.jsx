import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {IoIosArrowUp, IoIosArrowDown} from "react-icons/io"
import "./Navbar.scss";
import Avatar from "../../images/avatar.png";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span className="text">fiverr</span>
            <span className="dot">.</span>
          </Link>
        </div>
        <div className="links">
          <NavLink to="/fiverr-business">Fiverr Business</NavLink>
          <NavLink to="/explore">Explore</NavLink>
          <NavLink to="/english">English</NavLink>
          {!currentUser && <NavLink to="/login">Sign In</NavLink>}
          {!currentUser?.isSeller && (
            <NavLink to="/login">Become a Seller</NavLink>
          )}
          {!currentUser && (
            <Link className="btn" to="/register">
              Join
            </Link>
          )}
          {currentUser && (
            <div
              className="user"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            >
              <img src={Avatar} alt="avatar" />
              <span>{currentUser?.username}</span>
              {toggleDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
              <div className={toggleDropdown ? "options active" : "options"}>
                {currentUser?.isSeller && (
                  <>
                    <Link to="/gigs">Gigs</Link>
                    <Link to="/my-gigs">My Gigs</Link>
                  </>
                )}
                <Link to="orders">Orders</Link>
                <Link to="messages">Messages</Link>
                <Link to="logout">Logout</Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
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
        </>
      )}
    </div>
  );
};

export default Navbar;
