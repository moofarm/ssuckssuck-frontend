// routes.tsx
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
    </Routes>
  );
};

export default AppRoutes;
