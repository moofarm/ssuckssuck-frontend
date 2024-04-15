import PropTypes from "prop-types";
import { ProfileImage } from "./ProfileImage";

export const UserInfo = ({ nickname }) => {
  return (
    <div className="flex items-center gap-1 cursor-pointer">
      <ProfileImage />
      <span className="text-bold">{nickname}</span>
    </div>
  );
};

UserInfo.propTypes = {
  nickname: PropTypes.string.isRequired,
};

UserInfo.defaultProps = {
  nickname: "무쑥이",
};
