import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import ArticleCard from "./article-card";
import { FlexCenterAroundColumn } from "../utils/styled-flex";

const Wrapper = styled.div`
  ${FlexCenterAroundColumn};
  p {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.gray};
    align-self: flex-start;
  }
`;

interface frontmatter {
  frontmatter: {
    title: string;
    languages: string;
    intro: string;
    slug: string;
  };
}
interface Articles {
  nodes: [frontmatter];
}

const Articles = ({
  data,
  title = "Newest articles:",
  main = false,
}: {
  data: Articles;
  title?: string;
  main?: boolean;
}) => {
  const articles = data.nodes;
  return (
    <Wrapper>
      <p>{title}</p>
      {articles?.map((article: frontmatter) => (
        <ArticleCard key={article.frontmatter.slug} data={article} />
      ))}
      {main && (
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
      )}
    </Wrapper>
  );
};

export default Articles;
