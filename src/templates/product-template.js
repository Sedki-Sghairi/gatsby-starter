import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Image from 'gatsby-image';

const ComponentName = ({ data: { contentfulProduct: { price, title, image: { fluid }, info: { info } } } }) => {
	return (
		<Layout>
			<div style={{ textAlign: 'center' }}>
				<Link to="/products">back to product</Link>
				<h1>single product: {title}</h1>
			</div>
			<section className="single-product">
				<article>
					<div
						style={{
							maxWidth: '800px',
							borderRadius: '10px',
							overflow: 'hidden'
						}}
					>
						<Image fluid={fluid} alt={title} />
					</div>
				</article>

				<article>
					<h1>{title}</h1>
					<h3>${price}</h3>
					<p>{info}</p>
					<button onClick={() => alert('Congratulations! now you know Gatsby :)')}>Select</button>
				</article>
			</section>
		</Layout>
	);
};

export const query = graphql`
	query GetSingleProduct($slug: String) {
		contentfulProduct(slug: { eq: $slug }) {
			price
			title
			image {
				fluid {
					...GatsbyContentfulFluid
				}
			}
			info {
				info
			}
		}
	}
`;

export default ComponentName;
