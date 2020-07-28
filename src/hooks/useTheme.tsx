import { useState, useLayoutEffect } from "react";

type Theme = "dark" | "light";

enum mode {
  dark = "dark",
  light = "light",
}

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  useLayoutEffect(() => {
    const lastTheme: any = localStorage.getItem("theme");
    if (lastTheme !== theme) setTheme(lastTheme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(prev => (prev === mode.dark ? mode.light : mode.dark));
    localStorage.setItem("theme", theme === mode.dark ? mode.light : mode.dark);
  };

  return [theme, toggleTheme];
};

export default useTheme;
