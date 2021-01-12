import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Image from 'gatsby-image';
import styles from '../components/products.module.css';
import { Link } from 'gatsby';

const myComponent = ({ data }) => {
	const { allContentfulProduct: { nodes: product } } = data;
	return (
		<Layout>
			<section className={styles.page}>
				{product.map((x) => {
					return (
						<article key={x.id}>
							<Image fluid={x.image.fluid} alt={x.title} />
							<h3>
								{x.title} <span>${x.price}</span>
							</h3>
							<Link to={`/products/${x.slug}`}>more details</Link>
						</article>
					);
				})}
			</section>
		</Layout>
	);
};
export const query = graphql`
	{
		allContentfulProduct {
			nodes {
				price
				slug
				title
				image {
					fluid {
						...GatsbyContentfulFluid
					}
				}
				id
			}
		}
	}
`;

export default myComponent;
