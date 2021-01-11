import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
	{
		site {
			siteMetadata {
				title
				author
				data
				description
				person {
					age
					name
				}
			}
		}
	}
`;
const Header = () => {
	const { site: { siteMetadata: { title } } } = useStaticQuery(getData);

	return <div>{title}</div>;
};

export default Header;
