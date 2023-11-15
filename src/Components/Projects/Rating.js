import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />
            <FontAwesomeIcon
              className="star"
              icon={faStar}
              color={currentRating <= (hover || rating) ? "#272625" : "#e4e5e9"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
