import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import Layout from "../components/layout";
import ArticleCard from "../components/article-card";
import SEO from "../components/seo";
import { FlexCenterAroundColumn } from "../utils/styled-flex";

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

const Articles = styled.div`
  ${FlexCenterAroundColumn};
  p {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.gray};
    align-self: flex-start;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <span>Hello</span>
      <h2>I'm Karol</h2>
      <p>
        A student passionate <br /> in programming
      </p>
    </Hero>
    <Articles>
      <p>Newest articles: </p>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <Link
        to="/articles"
        css={css`
          font-size: 1.1rem;
          color: ${({ theme }) => theme.orange};
          text-decoration: underline;
        `}
      >
        More...
      </Link>
    </Articles>
  </Layout>
);

export default IndexPage;
