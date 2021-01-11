import React from 'react';
import Header from '../examples/Header';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
const examples = ({ data }) => {
	const { site: { info: { author } } } = data;
	return (
		<div>
			<Layout>
				<h1>hello from examples page</h1>
				<Header />
			</Layout>
			<h5>{author}</h5>
		</div>
	);
};
export const data = graphql`
	query MyQuery {
		site {
			info: siteMetadata {
				author
				data
				description
				person {
					age
					name
				}
				title
			}
		}
	}
`;
export default examples;
