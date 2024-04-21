// routes.tsx
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageLayout from "./layout/PageLayout";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MyMissionPage from "./pages/MyMissionPage";
import MissionPage from "./pages/MissionPage";
import GroupPage from "./pages/GroupPage";
import MyPage from "./pages/MyPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout page={<HomePage />} />} />
      <Route path="/login" element={<PageLayout page={<LoginPage />} />} />
      <Route path="/signup" element={<PageLayout page={<SignupPage />} />} />
      <Route path="/mymissions" element={<PageLayout page={<MyMissionPage />} />} />
      <Route path="/missions" element={<PageLayout page={<MissionPage />} />} />
      <Route path="/group" element={<PageLayout page={<GroupPage />} />} />
      <Route path="/mypage" element={<PageLayout page={<MyPage />} />} />
    </Routes>
  );
};

export default AppRoutes;
