import { useEffect, useState } from "react";
import GoogleLoginButton from "../assets/google_login_button.png";
import KakaoLoginButton from "../assets/kakao_login_button.png";
import NaverLoginButton from "../assets/naver_login_button.png";
import LandingModal from "../components/landing/LandingModal";
import { LandingProvider } from "../context/LandingProvider";
import { getCookie } from "../utils/cookie";

const LandingPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleClickGoogleLogin = () => {};

  const handleClickKaKaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URL}&response_type=code`;
  };

  const handleClickNaverLogin = () => {};

  useEffect(() => {
    setIsLogin(getCookie("access_token"));
  }, []);

  return (
    <div className="fixed inset-0 flex justify-center items-center w-full h-full">
      {isLogin ? (
        <LandingProvider>
          <LandingModal />
        </LandingProvider>
      ) : (
        <div className="font-nps-bold text-2xl w-1/2 m-auto text-center flex flex-col gap-3 justify-center items-center">
          <h1 className="text-darkgreen mb-10">로그인 & 회원가입</h1>
          <img
            src={GoogleLoginButton}
            alt="구글 로그인 버튼"
            className="cursor-pointer hover:brightness-95"
            onClick={handleClickGoogleLogin}
          />
          <img
            src={KakaoLoginButton}
            alt="카카오 로그인 버튼"
            className="cursor-pointer hover:brightness-95"
            onClick={handleClickKaKaoLogin}
          />
          <img
            src={NaverLoginButton}
            alt="네이버 로그인 버튼"
            className="cursor-pointer hover:brightness-95"
            onClick={handleClickNaverLogin}
          />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
