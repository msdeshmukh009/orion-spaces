import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import Mockman from "mockman-js";
import {
  Login,
  SignUp,
  Home,
  PostDetail,
  Profile,
  Bookmark,
  Explore,
  Notifications,
} from "../pages";
import { PrivateRoute } from "./PrivateRoute";

const NavigationRoutes = () => {
  const {
    auth: { token },
  } = useSelector(state => state);

  return (
    <Routes>
      {!token ? (
        <>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/sign-up" element={<Navigate to="/home" replace />} />
        </>
      )}
      <Route path={"/mock"} element={<Mockman />} />
      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/post/:postId" element={<PostDetail />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<Notifications />} />
      </Route>
    </Routes>
  );
};

export { NavigationRoutes };
