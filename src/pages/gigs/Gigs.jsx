import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import GigCard from "../../components/gigCard/GigCard";
import { gigs } from "../../data/data";
import "./Gigs.scss";

const Gigs = () => {
  const [sort, setSort] = useState("Sales");
  const [toggle, setToggle] = useState(false);

  const reSort = (type) => {
    setSort(type);
    setToggle(false);
  }
  return (
    <div className="gigs">
      <div className="container">
        <div className="top">
          <span className="bredcrumbs">fiverr &gt; graphics & design</span>
          <h1>AI Artists</h1>
          <p>
            Explore the boundaries of art and technology with Fiverr's AI
            artists
          </p>
          <div className="menu">
            <div className="left">
              <span>Budget</span>
              <input type="text" placeholder="min" />
              <input type="text" placeholder="max" />
              <button>Apply</button>
            </div>
            <div className="right">
              <span className="sortBy">Sort By</span>
              <div className="sortType" onClick={() => setToggle(!toggle)}>
                <span>{sort}</span>
                {toggle ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              {toggle && (
                <div className="rightMenu">
                  <span onClick={()=> reSort("Newest")}>Newest</span>
                  <span onClick={()=> reSort("Best Selling")}>Best Selling</span>
                  <span onClick={()=> reSort("Sales")}>Sales</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="items">
          {gigs.map((item) => (
            <GigCard key={new Date().getTime()} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
