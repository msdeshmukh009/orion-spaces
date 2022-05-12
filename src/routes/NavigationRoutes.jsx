import { Route, Routes } from "react-router-dom";
import { Login, SignUp, Home, PostDetail, Profile } from "../pages";

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/post-detail" element={<PostDetail />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export { NavigationRoutes };
