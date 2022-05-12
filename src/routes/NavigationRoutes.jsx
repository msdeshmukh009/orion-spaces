import { Route, Routes } from "react-router-dom";
import { Login, SignUp, Home, PostDetail, Profile, Bookmark, Explore } from "../pages";

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/post-detail" element={<PostDetail />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/bookmark" element={<Bookmark />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  );
};

export { NavigationRoutes };
