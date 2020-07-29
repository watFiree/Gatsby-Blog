import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/GlobalStyles";
import { lightTheme, darkTheme } from "../styles/Theme";
import Header from "./header";
import Footer from "./footer";
import useTheme from "../hooks/useTheme";
import SEO from "./seo";

const Layout = ({ children, uri }: { children: ReactNode; uri: string }) => {
  const [theme, toggleTheme] = useTheme();
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <SEO />
      <GlobalStyles />
      <Header theme={theme} setTheme={toggleTheme} uri={uri} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1080,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
