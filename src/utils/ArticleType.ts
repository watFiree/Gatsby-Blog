export interface ArticlesType {
  nodes: [
    {
      frontmatter: {
        title: string;
        languages: string;
        intro: string;
        slug: string;
      };
    }
  ];
}
export interface ArticleType {
  data: {
    frontmatter: {
      title: string;
      languages: string;
      intro: string;
      slug: string;
    };
  };
}
