/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

var webpack = require("webpack");
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
      plugins: [
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery",
        }),
      ],
      //devtool: "eval-source-map"
    });
  } else {
    actions.setWebpackConfig({
      plugins: [
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery",
        }),
      ],
      //devtool: "eval-source-map"
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  // createRedirect({
  //   fromPath: "/credit-card",
  //   toPath: "/credit-card",
  //   redirectInBrowser: true,
  //   isPermanent: true,
  // });
  //generic-pages
  const l_pages = await graphql(`
    {
      allSanityPage {
        edges {
          node {
            slug {
              current
            }
            title
          }
        }
      }
    }
  `);

  if (l_pages.errors) {
    throw l_pages.errors;
  }

  const pages = l_pages.data.allSanityPage.edges || [];
  pages.forEach((edge, index) => {
    const path = `/${edge.node.slug.current}`;

    createPage({
      path,
      component: require.resolve("./src/templates/pageContent.js"),
      context: { slug: edge.node.slug.current },
    });
  });
};
