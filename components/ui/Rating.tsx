import React from "react";

import { EmptyStarIcon } from "../icons/stars/EmptyStarIcon";
import { FullStarIcon } from "../icons/stars/FullStarIcon";
import { HalfStarIcon } from "../icons/stars/HalfStarIcon";

const Rating = ({ rating = 0, maxRating = 5 }) => {
  const stars = [];

  for (let i = 0; i < maxRating; i++) {
    if (rating >= i + 1) {
      stars.push(<FullStarIcon key={i} />);
    } else if (rating > i && rating < i + 1) {
      stars.push(<HalfStarIcon key={i} />);
    } else {
      stars.push(<EmptyStarIcon key={i} />);
    }
  }

  return <div className="flex">{stars}</div>;
};

export default Rating;
