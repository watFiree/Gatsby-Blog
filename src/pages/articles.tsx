import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import ArticlesWrapper from "../components/articles-wrapper";
import { ArticlesType } from "../utils/ArticleType";

const Articles = ({ data }: { data: ArticlesType }) => {
  return (
    <Layout>
      <h1>Hello articles</h1>
      <ArticlesWrapper title="All articles:" data={data} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx {
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
