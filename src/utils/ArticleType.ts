export interface ArticlesType {
  allMdx: {
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
  };
}
