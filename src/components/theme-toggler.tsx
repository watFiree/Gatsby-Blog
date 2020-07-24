import React from "react";
import styled from "styled-components";
import Sun from "../assets/sun.svg";
import Moon from "../assets/moon.svg";

const Button = styled.button`
  height: 44px;
  width: 44px;
  outline: none;
  border: none;
  padding: 0;
  background: none;
  background-image: ${({ themeMode }: { themeMode: "dark" | "light" }) =>
    themeMode === "dark" ? `url(${Sun})` : `url(${Moon})`};
  transition: all 0.2s linear;

  &:hover {
    cursor: pointer;
    transform: ${({ themeMode }: { themeMode: "dark" | "light" }) =>
      themeMode === "dark" ? ` rotate(10deg);` : ` rotate(-10deg);`};
  }
`;

const ThemeToggler = ({ theme, setTheme }: { theme: "dark" | "light"; setTheme(): any }) => (
  <Button onClick={setTheme} themeMode={theme} />
);
export default ThemeToggler;
