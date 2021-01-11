/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 'gatsby tutorial',
		description: 'some random description',
		author: '@johndoe',
		data: [ 'item1', 'item2' ],
		person: { name: 'peter', age: 32 }
	},
	plugins: [
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`
			}
		}
	]
};
