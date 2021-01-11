import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import img from '../images/1.jpg';
import Image from 'gastby-image';
const Images = () => {
	return (
		<section className="images">
			<article className="single-img">
				<h3>basic image</h3>
			</article>
			<article className="single-img">
				<h3>fixed image/blur</h3>
			</article>
			<article className="single-img">
				<h3>fluid/svg</h3>
			</article>
		</section>
	);
};

export default Images;
