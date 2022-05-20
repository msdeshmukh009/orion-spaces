import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import {
  Login,
  SignUp,
  Home,
  PostDetail,
  Profile,
  Bookmark,
  Explore,
  Notifications,
  NotFound,
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

      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/post/:postId" element={<PostDetail />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<Notifications />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export { NavigationRoutes };
