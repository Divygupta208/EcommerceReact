import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const stars = [];
  const roundedRating = Math.round(rating * 2) / 2;

  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(<FaStar key={i} />);
    } else if (i - 0.5 === roundedRating) {
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      stars.push(<FaStar key={i} style={{ color: "#ccc" }} />);
    }
  }

  return (
    <div className="star-rating">
      {stars}
      <h6>{rating}</h6>
    </div>
  );
};

export default StarRating;