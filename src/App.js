import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./features/user/helpers";
import { NavigationRoutes } from "./routes";
import { useTheme } from "./hooks";

export default function App() {
  const { currentTheme } = useTheme();

  const {
    auth: { token },
  } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [token, dispatch]);

  return (
    <div className={currentTheme === "dark" ? "dark" : ""}>
      <NavigationRoutes />
    </div>
  );
}
