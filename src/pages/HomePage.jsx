import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="page">
      <h1 className="text-3xl font-bold underline">HomePage</h1>
      <Link to="login">로그인 페이지로 이동</Link>
      <Link to="signup">회원가입 페이지로 이동</Link>
      <Link to="mymissions">나의미션방 페이지로 이동</Link>
      <Link to="missions">전체미션방 페이지로 이동</Link>
      <Link to="group">미션방 내부 페이지로 이동</Link>
      <Link to="mypage">마이페이지로 이동</Link>
    </div>
  );
};

export default HomePage;
