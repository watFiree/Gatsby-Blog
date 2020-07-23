import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import ArticlesWrapper from "../components/articles-wrapper";
import SEO from "../components/seo";
import { FlexCenterAroundColumn } from "../utils/styled-flex";
import { ArticleType } from "../utils/ArticleType";

const Hero = styled.div`
  ${FlexCenterAroundColumn};
  align-items: flex-start;
  padding: 5% 0;
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
`;

const IndexPage = ({ data }: { data: ArticleType }) => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <span>Hello</span>
      <h2>I'm Karol</h2>
      <p>
        A student passionate <br /> in programming
      </p>
    </Hero>
    <ArticlesWrapper data={data} main={true} />
  </Layout>
);

export const query = graphql`
  query {
    allMdx(limit: 5) {
      nodes {
        frontmatter {
          title
          languages
          intro
          slug
        }
      }
    }
  }
`;

export default IndexPage;
