import React from "react";
import StarIcon from "@mui/icons-material/Star";
function StarRating(props) {
  const rating = props.rating;
  if (rating === 0) {
    return <span>No rating</span>;
  }
  const stars = [];
  // rounding off rating object
  const roundedRating = Math.floor(rating);
  for (let i = 0; i < roundedRating; i++) {
    stars.push(i);
  }
  return (
    <div>
      {stars.map((star) => {
        return (
          <StarIcon
            key={star}
            sx={{
              color: "yellow",
            }}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
