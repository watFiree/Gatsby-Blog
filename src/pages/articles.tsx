import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import ArticlesWrapper from "../components/articles-wrapper";
import { ArticlesType } from "../utils/ArticleType";

interface ArticlesProps {
  data: {
    articles: ArticlesType;
  };
  location: { pathname: string };
}

const Articles = ({ data, location }: ArticlesProps) => {
  return (
    <Layout uri={location.pathname}>
      <h1>Hello articles</h1>
      <ArticlesWrapper title="All articles:" data={data.articles} />
    </Layout>
  );
};

export const query = graphql`
  query {
    articles: allMdx {
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

export default Articles;
