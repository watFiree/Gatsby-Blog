import { useState, useEffect } from "react";

type Theme = "dark" | "light";

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  useEffect(() => {
    const lastTheme: any = localStorage.getItem("theme");
    if (lastTheme) setTheme(lastTheme);
  }, []);
  const toggleTheme = () => {
    setTheme(prev => (prev == "dark" ? "light" : "dark"));
    localStorage.setItem("theme", theme == "dark" ? "light" : "dark");
  };

  return [theme, toggleTheme];
};

export default useTheme;
