import React, { useState } from "react"
import PropTypes from "prop-types"
import { ThemeProvider, css } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyles } from "../styles/GlobalStyles"
import { lightTheme, darkTheme } from "../styles/Theme"
import Header from "./header"

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("dark")
  const toggleTheme = () => {
    setTheme(prev => (prev == "dark" ? "light" : "dark"))
  }
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
