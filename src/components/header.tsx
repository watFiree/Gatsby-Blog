import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import ThemeToggler from "./themeToggler";
import { Link } from "gatsby";
import { FlexCenterAround, FlexCenterCenter } from "../utils/styled-flex";

const Wrapper = styled.header`
  background-color: inherit;
  margin-bottom: 40px;
  ${FlexCenterAround};
  padding: 1.1rem;
  h1 {
    margin: 0;
  }
`;

interface HeaderProps {
  siteTitle: string;
  theme: "dark" | "light";
  setTheme(): string;
}

const Header = ({ siteTitle, theme, setTheme }: HeaderProps) => (
  <Wrapper>
    <h1>
      <Link to="/">Logo</Link>
    </h1>
    <nav
      css={css`
        ${FlexCenterCenter};
        width: 40%;
        margin: 0;
      `}
    >
      <ul
        css={css`
          ${FlexCenterAround};
          width: 100%;
          align-items: center;
          justify-content: space-evenly;
          margin: 0;
          list-style: none;
          li {
            margin: 0;
          }
        `}
      >
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <Link to="/about">About me</Link>
        </li>
      </ul>
      <ThemeToggler theme={theme} setTheme={setTheme} />
    </nav>
  </Wrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
