import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import img from '../images/1.jpg';
import Image from 'gatsby-image';

const getImages = graphql`
	{
		fixed: file(relativePath: { eq: "2.jpg" }) {
			childImageSharp {
				fixed {
					...GatsbyImageSharpFixed
				}
			}
		}
		fluid: file(relativePath: { eq: "3.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;
const Images = () => {
	const data = useStaticQuery(getImages);
	console.log(data);
	return (
		<section className="images">
			<article className="single-img">
				<h3>basic</h3>
				<img src={img} width="100%" />
			</article>
			<article className="single-img">
				<h3>fixed</h3>
				<Image fixed={data.fixed.childImageSharp.fixed} />
			</article>
			<article className="single-img">
				<h3>fluid</h3>
				<Image fluid={data.fluid.childImageSharp.fluid} />
			</article>
		</section>
	);
};

export default Images;
