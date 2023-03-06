import React from "react";
import { Link } from "react-router-dom";
import { gigs } from "../../data/data";
import "./MyGigs.scss";
import DeleteImg from "../../images/delete.png";

const myGigs = () => {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add">Add New Gig</Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Orders</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {gigs.map((gig) => {
              return (
                <tr key={Math.random(1, 100)}>
                  <td>
                    <img src={gig.img} alt="" />
                  </td>
                  <td>{gig.desc}</td>
                  <td>${gig.price}</td>
                  <td>90</td>
                  <td>
                    <button>
                      <img src={DeleteImg} alt="delete" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default myGigs;
