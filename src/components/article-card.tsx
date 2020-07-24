import React from "react";
import styled from "styled-components";
import { navigate, graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import { FlexCenterCenterColumn, FlexCenterAround } from "../utils/styled-flex";

const Wrapper = styled.div`
  background-color: #111;
  width: 100%;
  display: flex;
  margin-bottom: 1.6rem;
  transition: all 0.4s ease;
  &:hover {
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 15px 5px rgba(61, 61, 61, 0.5);
    -moz-box-shadow: 0px 0px 15px 5px rgba(61, 61, 61, 0.5);
    box-shadow: 0px 0px 15px 5px rgba(61, 61, 61, 0.5);
  }
`;

const Content = styled.div`
  width: 70%;
  ${FlexCenterCenterColumn};
  align-items: flex-start;
  margin: 1rem 0 1rem 1rem;
  h2 {
    font-size: 2.4rem;
    margin: 0;
    color: rgba(255, 255, 255, 0.9) !important;
  }
  p {
    margin: 0;
    font-size: 1.3rem;
  }
`;

const Divider = styled.div`
  min-height: 80%;
  max-height: 80%;
  min-width: 2px;
  background-color: ${({ theme }) => theme.orange};
`;

const Languages = styled.div`
  width: calc(30% - 2px);
  ${FlexCenterCenterColumn};
  span {
    color: ${({ theme }) => theme.gray};
  }
  img {
    height: 50px;
    opacity: 0.9;
  }
`;

const Images = styled.div`
  height: 70%;
  width: 80%;
  ${FlexCenterAround};
`;

const ArticleCard = ({ data }) => {
  const languages: string[] = data.frontmatter.languages.split(" ");
  const icons = useStaticQuery(graphql`
    query {
      js: file(relativePath: { eq: "js.png" }) {
        sharp: childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
      react: file(relativePath: { eq: "react.png" }) {
        sharp: childImageSharp {
          fixed(width: 65) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Wrapper onClick={() => navigate(`/article/${data.frontmatter.slug}`)}>
      <Content>
        <h2>{data.frontmatter.title}</h2>
        <p>{data.frontmatter.intro}</p>
      </Content>
      <Divider />
      <Languages>
        <span>Languages:</span>
        <Images>
          {languages.map((language: string) =>
            icons[language] !== undefined ? (
              <Image fixed={icons[language].sharp.fixed} alt={language} />
            ) : null
          )}
        </Images>
      </Languages>
    </Wrapper>
  );
};

export default ArticleCard;
