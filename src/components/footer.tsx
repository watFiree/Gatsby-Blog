import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
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
  const { netlify, github } = useStaticQuery(graphql`
    query {
      netlify: file(relativePath: { eq: "netlify.png" }) {
        sharp: childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
      github: file(relativePath: { eq: "github.png" }) {
        sharp: childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `);

  console.log(netlify, github);
  return (
    <Wrapper>
      <p>Karol Piotrowicz © 2020</p>
      <Icons>
        <a href="https://www.netlify.com/" target="_blank">
          <Image fixed={netlify.sharp.fixed} alt="Netlify" />
        </a>
        <a href="https://github.com/watFiree/Gatsby-Blog" target="_blank">
          <Image fixed={github.sharp.fixed} alt="GitHub" />
        </a>
      </Icons>
    </Wrapper>
  );
};

export default Footer;
