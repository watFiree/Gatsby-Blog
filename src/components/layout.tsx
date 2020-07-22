import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ThemeProvider, css } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GlobalStyles } from "../styles/GlobalStyles";
import { lightTheme, darkTheme } from "../styles/Theme";
import Header from "./header";
import Footer from "./footer";
import useTheme from "../hooks/useTheme";

const Layout = ({ children }) => {
  const [theme, toggleTheme] = useTheme();
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header
        siteTitle={data.site.siteMetadata.title}
        theme={theme}
        setTheme={toggleTheme}
      />
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
