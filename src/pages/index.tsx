import React, { useState } from "react";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";
import Image from "gatsby-image";
import Layout from "../components/layout";
import ArticlesWrapper from "../components/articles-wrapper";
import SEO from "../components/seo";
import { FlexCenterCenterColumn } from "../utils/styled-flex";
import { ArticlesType } from "../utils/ArticleType";

const Hero = styled.div`
  display: flex;
  padding: 5% 0;
  width: 100%;
  justify-content: space-between;
`;

const Content = styled.div`
  ${FlexCenterCenterColumn};
  align-items: flex-start;
  span {
    text-transform: uppercase;
    color: ${({ theme }) => theme.orange};
    font-size: 1.3rem;
  }
  h2 {
    font-size: 4.6rem;
    margin: 0.5rem 0;
  }
  p {
    margin: 0;
    font-size: 1.3rem;
  }
  @media (max-width: 750px) {
    min-width: 400px;
    max-width: 100%;
  }
  @media (max-width: 400px) {
    max-width: 400px;
    min-width: 200px;
  }
`;

const IndexPage = ({ data }: { data: ArticlesType }) => (
  <Layout>
    <Hero>
      <Content>
        <span>Hello</span>
        <h2>I'm Karol</h2>
        <p>
          A student passionate <br /> in programming
        </p>
      </Content>
      <Image
        fixed={data.image.sharp.fixed}
        alt="Hero"
        css={css`
          @media (max-width: 750px) {
            opacity: 0;
          }
        `}
      />
    </Hero>
    <ArticlesWrapper data={data.articles} main={true} />
  </Layout>
);

export const query = graphql`
  query {
    articles: allMdx(limit: 5) {
      nodes {
        frontmatter {
          title
          languages
          intro
          slug
        }
      }
    }
    image: file(relativePath: { eq: "hero.png" }) {
      sharp: childImageSharp {
        fixed(height: 350) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage;
