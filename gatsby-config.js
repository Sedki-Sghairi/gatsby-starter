const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';
console.log(`Using environment config: '${activeEnv}'`);
require('dotenv').config({
	path: `.env.${activeEnv}`
});

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
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`
			}
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `ehcucw4rvpb9`,
				accessToken: `${process.env.CONTENFUL_TOKEN}`
			}
		}
	]
};
