import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { getUsers } from "./features/user/helpers";
import { NavigationRoutes } from "./routes";

export default function App() {
  const {
    auth: { token },
    user: { currentTheme },
  } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [token, dispatch]);

  return (
    <div className={currentTheme === "dark" ? "dark" : ""}>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            background: `${currentTheme === "dark" ? "hsl(210, 34%, 13%)" : "#f7f9f9"}`,
            color: `${currentTheme === "dark" ? "#f7f9f9" : "hsl(207, 7%, 31%)"}`,
          },
        }}
      />

      <NavigationRoutes />
    </div>
  );
}
