import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function Rating({ value, text, color }) {
  return (
    <div className="rating">
      <span>
        <FontAwesomeIcon
          icon={
            value >= 1 ? faStar : value >= 0.5 ? faStarHalfAlt : ["far", "star"]
          }
          style={{ color }}
        />
      </span>

      <span>
        <FontAwesomeIcon
          icon={
            value >= 2 ? faStar : value >= 1.5 ? faStarHalfAlt : ["far", "star"]
          }
          style={{ color }}
        />
      </span>

      <span>
        <FontAwesomeIcon
          icon={
            value >= 3 ? faStar : value >= 2.5 ? faStarHalfAlt : ["far", "star"]
          }
          style={{ color }}
        />
      </span>

      <span>
        <FontAwesomeIcon
          icon={
            value >= 4 ? faStar : value >= 3.5 ? faStarHalfAlt : ["far", "star"]
          }
          style={{ color }}
        />
      </span>

      <span>
        <FontAwesomeIcon
          icon={
            value >= 5 ? faStar : value >= 4.5 ? faStarHalfAlt : ["far", "star"]
          }
          style={{ color }}
        />
      </span>

      {text && <span>{" " + text}</span>}
    </div>
  );
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string,
  color: PropTypes.string,
};

Rating.defaultProps = {
  color: "#f8e825",
};

export default Rating;
