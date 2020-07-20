import { createGlobalStyle } from "styled-components";
import { ThemeTypes } from "./Theme";

export const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
  body {
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    color: ${({ theme }: { theme: ThemeTypes }) => theme.text};
    background-color: ${({ theme }: { theme: ThemeTypes }) => theme.body};;
  }
  h1 {
    font-size: 2.4rem;
    font-weight: 600;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
`;
