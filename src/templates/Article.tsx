import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    margin: 1.3rem 0;
  }
  span {
    margin-top: 1.6rem;
    font-weight: 600;
    color: ${({ theme }) => theme.gray};
    align-self: flex-end;
  }
  p {
    line-height: 1.7;
    font-size: 1.3rem;
  }
`;

interface SingleArticleType {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
      author: string;
    };
    body: string;
  };
}

const Article = ({ data }: { data: SingleArticleType }) => {
  const { mdx } = data;
  return (
    <Layout>
      <Wrapper>
        <h1>{mdx.frontmatter.title}</h1>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <span>{`${mdx.frontmatter.date} ${mdx.frontmatter.author}`}</span>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        author
      }
      body
    }
  }
`;

export default Article;
