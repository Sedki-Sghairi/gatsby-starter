const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const result = await graphql(`query GetProduct {
        product: allContentfulProduct {
          nodes {
            slug
          }
        }
      }`);
	result.data.product.nodes.forEach((x) => {
		createPage({
			path: `/products/${x.slug}`,
			component: path.resolve(`src/templates/product-template.js`)
		});
	});
};
