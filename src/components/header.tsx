import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ThemeToggler from "./theme-toggler";
import { Link } from "gatsby";
import { FlexCenterAround, FlexCenterCenter } from "../utils/styled-flex";
import { ThemeTypes } from "../styles/Theme";

const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.body};
  ${FlexCenterAround};
  padding: 1.4rem 0.8rem;
  h1 {
    margin: 0;
  }
`;

const StyledNavigation = styled.nav`
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
`;

const StyledList = styled.ul`
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
`;

const NavLink = styled(Link)`
  color: ${({ theme, active }: { theme: ThemeTypes; active: boolean }) =>
    active ? theme.orange : theme.gray};
  transition: color 0.4s ease;
  text-align: center;
  &:hover {
    color: ${({ theme }) => theme.orange};
  }
`;

interface HeaderProps {
  siteTitle: string;
  theme: "dark" | "light";
  setTheme(): any;
  uri: string;
}

const Header = ({ theme, setTheme, uri }: HeaderProps) => (
  <Wrapper>
    <h1>
      <Link to="/">Logo</Link>
    </h1>
    <StyledNavigation>
      <StyledList>
        <li>
          <NavLink to="/articles" active={uri === "/articles"}>
            Articles
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" active={uri === "/about"}>
            About me
          </NavLink>
        </li>
      </StyledList>
      <ThemeToggler theme={theme} setTheme={setTheme} />
    </StyledNavigation>
  </Wrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
