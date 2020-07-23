import React from "react";
import styled from "styled-components";
import NetlifyIcon from "../assets/netlify.png";
import GitHubIcon from "../assets/github.png";
import { FlexCenterAround } from "../utils/styled-flex";

const Wrapper = styled.footer`
  margin-top: 4.1rem;
  color: ${({ theme }) => theme.gray};
  display: flex;
  justify-content: space-between;
  img {
    height: 40px;
    position: relative;
    &::before {
      opacity: 0;
    }
    &:hover::before {
      opacity: 1;
    }
  }
`;

const Icons = styled.div`
  width: 40%;
  ${FlexCenterAround}
`;

const Footer = () => {
  return (
    <Wrapper>
      <p>Karol Piotrowicz © 2020</p>
      <Icons>
        <a href="https://www.netlify.com/" target="_blank">
          <img src={NetlifyIcon} alt="Netlify" />
        </a>
        <a href="https://github.com/watFiree/Gatsby-Blog" target="_blank">
          <img src={GitHubIcon} alt="GitHub" />
        </a>
      </Icons>
    </Wrapper>
  );
};

export default Footer;

{
  /* //css={css` &::before { content: "Deployed on Netlify" position: absolute;  top: 0; right: 0;}`} */
}
