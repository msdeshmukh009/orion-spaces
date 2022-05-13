import { NavigationRoutes } from "./routes";
import { useTheme } from "./hooks";

export default function App() {
  const { currentTheme } = useTheme();
  return (
    <div className={currentTheme === "dark" ? "dark" : ""}>
      <NavigationRoutes />
    </div>
  );
}
