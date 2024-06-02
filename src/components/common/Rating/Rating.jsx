/* eslint-disable react/prop-types */
import "./rating.css";

import Star from "../../../assets/icons/star.svg";

function Rating({ rating = "0" }) {
  return (
    <div className="rating">
      <img src={Star} alt="Star icon" />
      <span>Rated</span>
      <span>{rating}</span>
    </div>
  );
}

export default Rating;
