import PropTypes from "prop-types";
import { ProfileImage } from "../components/ProfileImage";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const UserInfo = ({ nickname }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleClickLogout = () => {
    alert("로그아웃 아직 구현 안함!");
  };

  useEffect(() => {
    setIsUserMenuOpen(false);
  }, [window.location.pathname]);

  useEffect(() => {
    const userMenu = document.getElementById("userMenu");
    const expandIcon = document.getElementById("expand");

    userMenu.className = isUserMenuOpen ? "absolute block" : "absolute hidden";
    expandIcon.innerText = isUserMenuOpen ? "expand_less" : "expand_more";
    expandIcon.className = isUserMenuOpen
      ? "material-symbols-outlined text-darkgreen"
      : "material-symbols-outlined text-black";
  }, [isUserMenuOpen]);

  function openUserMenu() {
    setIsUserMenuOpen(!isUserMenuOpen);
  }

  return (
    <div>
      <div className="relative flex items-center gap-1 cursor-pointer" onClick={openUserMenu}>
        <ProfileImage />
        <p>{nickname}</p>
        <span className="material-symbols-outlined" id="expand">
          expand_more
        </span>
      </div>
      <div className="absolute hidden" id="userMenu">
        <div className="bg-white px-7 py-3">
          <Link
            to="/mypage"
            className="nps-reg text-black no-underline text-center cursor-pointer hover:text-darkgreen"
          >
            마이페이지
          </Link>
        </div>
        <div className="bg-white px-7 py-3">
          <p
            className="nps-reg text-black no-underline text-center cursor-pointer hover:text-darkgreen"
            onClick={handleClickLogout}
          >
            로그아웃
          </p>
        </div>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  nickname: PropTypes.string.isRequired,
};

UserInfo.defaultProps = {
  nickname: "무쑥이",
};
