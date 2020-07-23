exports.createPages = async ({ graphql, actions }) => {
  const ArticleTemplate = require.resolve("./src/templates/Article.tsx");
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.error) throw result.error;

  const articles = result.data.allMdx.nodes;

  articles.forEach(article => {
    actions.createPage({
      path: "/article/" + article.frontmatter.slug,
      component: ArticleTemplate,
      context: {
        slug: article.frontmatter.slug,
      },
    });
  });
};
