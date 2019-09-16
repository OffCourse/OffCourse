module.exports = ({ contentPath = "data" }) => {
  return {
    plugins: [
      `gatsby-plugin-theme-ui`,
      `gatsby-plugin-typescript`,
      {
        resolve: "gatsby-source-filesystem",
        options: {
          path: contentPath
        }
      },
      {
        resolve: "gatsby-transformer-yaml",
        options: {
          typeName: ({ node, object, isArray }) => object.role
        }
      }
    ]
  };
};
