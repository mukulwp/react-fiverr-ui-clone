import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.scss";

const ProjectCard = ({ item }) => {
  return (
    <div className="projectCard">
      <Link to="/">
        <img src={item?.img} alt={item?.cat} />
      </Link>
      <div className="userInfo">
        <div className="img">
          <img src={item?.pp} alt={item?.username} />
        </div>
        <div className="text">
          <h5>{item?.cat}</h5>
          <p>{item?.username}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
