import React from 'react';
import Header from '../examples/Header';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
const examples = ({ data }) => {
	const { site: { siteMetadata: { author } } } = data;
	return (
		<div>
			<Layout>
				<p>hello from examples page</p>
				<Header />
			</Layout>
			<h5>{author}</h5>
		</div>
	);
};
export const data = graphql`
	query MyQuery {
		site {
			siteMetadata {
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
