import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";
import Loading from "../../assets/loading.gif";

const KakaoLogin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    dispatch(
      login({
        oauthServerType: "KAKAO",
        code: code,
      }),
    );
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
      <img src={Loading} alt="로딩 중.." />;
    </div>
  );
};

export default KakaoLogin;
