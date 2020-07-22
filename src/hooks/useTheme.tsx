import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const lastTheme: "dark" | "light" = localStorage.getItem("theme");
    if (lastTheme) setTheme(lastTheme);
  }, []);
  const toggleTheme = () => {
    setTheme(prev => (prev == "dark" ? "light" : "dark"));
    localStorage.setItem("theme", theme == "dark" ? "light" : "dark");
  };

  return [theme, toggleTheme];
};

export default useTheme;
