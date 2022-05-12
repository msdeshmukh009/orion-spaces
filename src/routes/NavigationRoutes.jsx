import { Route, Routes } from "react-router-dom";
import { Login, SignUp, Home } from "../pages";

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export { NavigationRoutes };
