///<reference types="styled-components/cssprop" />
import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import ThemeToggler from "./theme-toggler";
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
        @media (max-width: 1150px) {
          width: 60%;
        }
        @media (max-width: 800px) {
          width: 80%;
        }
        @media (max-width: 450px) {
          width: 90%;
        }
        @media (max-width: 300px) {
          width: 100%;
        }
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
          padding: 0;
          @media (max-width: 350px) {
            justify-content: space-between;
          }
          li {
            margin: 0;
          }
        `}
      >
        <li>
          <Link
            to="/articles"
            css={css`
              color: ${({ theme }) => theme.gray};
              transition: color 0.4s ease;
              text-align: center;
              &:hover {
                color: inherit;
              }
              &:active {
                color: orange;
              }
            `}
          >
            Articles
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            css={css`
              color: ${({ theme }) => theme.gray};
              transition: color 0.4s ease;
              &:hover {
                color: inherit;
              }
              &:active {
                color: orange;
              }
            `}
          >
            About me
          </Link>
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
