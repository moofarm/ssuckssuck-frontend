import PropTypes from "prop-types";
import SeedMussuk from "../assets/seed_mussuk.svg";
import SproutMussuk from "../assets/sprout_mussuk.svg";
import BabyMussuk from "../assets/baby_mussuk.svg";
import ChildMussuk from "../assets/child_mussuk.svg";
import AdultMussuk from "../assets/adult_mussuk.svg";

export const ProfileImage = ({ level }) => {
  const viewBox = level === 4 ? "0 0 500 700" : "0 0 500 550";
  return (
    <div className="rounded-full bg-light-green p-1">
      <svg className="m-auto" width="30" height="30" viewBox={viewBox}>
        {level === 0 ? (
          <SeedMussuk />
        ) : level === 1 ? (
          <SproutMussuk />
        ) : level === 2 ? (
          <BabyMussuk />
        ) : level === 3 ? (
          <ChildMussuk />
        ) : level === 4 ? (
          <AdultMussuk />
        ) : (
          <AdultMussuk />
        )}
      </svg>
    </div>
  );
};

ProfileImage.propTypes = {
  level: PropTypes.number,
};

ProfileImage.defaultProps = {
  level: 2,
};
