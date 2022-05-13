import { useContext } from "react";
import { ThemeContext } from "../context";

const useTheme = () => {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      setCurrentTheme("");
      localStorage.setItem("spaces-theme", "light");
    } else {
      setCurrentTheme("dark");
      localStorage.setItem("spaces-theme", "dark");
    }
  };

  return { currentTheme, setCurrentTheme, toggleTheme };
};

export { useTheme };
