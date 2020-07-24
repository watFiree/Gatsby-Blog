import { createGlobalStyle } from "styled-components";
import { ThemeTypes } from "./Theme";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    color: ${({ theme }: { theme: ThemeTypes }) => theme.text};
    background-color: ${({ theme }: { theme: ThemeTypes }) => theme.body};
    transition: all 0.2s linear;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
  h1,h2,h3,h4,h5,h6{
    margin:1rem 0;
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
