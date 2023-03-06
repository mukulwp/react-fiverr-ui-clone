import React from "react";
import StarImg from "../../images/star.png";
import Man from "../../images/man.png";
import Like from "../../images/like.png";
import DisLike from "../../images/dislike.png";
import "./Reviews.scss";

const Reviews = () => {
  return (
    <div className="review">
      <div className="item">
        <div className="user">
          <img src={Man} alt="" />
          <div className="info">
            <span>John Doe</span>
            <div className="country">
              <img
                src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                alt=""
              />
              <span>United States</span>
            </div>
          </div>
        </div>
        <div className="stars">
          <img src={StarImg} alt="star" />
          <img src={StarImg} alt="star" />
          <img src={StarImg} alt="star" />
          <img src={StarImg} alt="star" />
          <img src={StarImg} alt="star" />
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab maxime
          aperiam voluptate corporis, impedit aliquam deleniti molestias dolores
          distinctio aut praesentium! Commodi facilis magni labore at, tempora
          ducimus sint ut animi harum temporibus! Maiores provident quos est,
          nemo neque atque autem harum quisquam ratione illo iusto fuga
          blanditiis dolor modi.
        </p>
        <div className="helpful">
          <span>Helpful?</span>
          <img src={Like} alt="like" />
          <span>Yes</span>
          <img src={DisLike} alt="dislike" />
          <span>No</span>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
