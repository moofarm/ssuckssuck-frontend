import { Routes, Route } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import MyMissionPage from "./pages/MyMissionPage";
import MissionPage from "./pages/MissionPage";
import GroupPage from "./pages/GroupPage";
import MyPage from "./pages/MyPage";
import LandingPage from "./pages/LandingPage";
import LandingPageLayout from "./layout/LandingPageLayout";
import KakaoLogin from "./pages/oauth/KakaoLogin";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPageLayout page={<LandingPage />} />} />
      <Route path="/mymissions" element={<PageLayout page={<MyMissionPage />} />} />
      <Route path="/missions" element={<PageLayout page={<MissionPage />} />} />
      <Route path="/group" element={<PageLayout page={<GroupPage />} />} />
      <Route path="/mypage" element={<PageLayout page={<MyPage />} />} />
      <Route path="/login/kakao" element={<KakaoLogin />} />
    </Routes>
  );
};

export default AppRoutes;
