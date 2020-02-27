import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
	<header>
		<div className="TopDiv">
			<h1>
				<Link className="Link" to="/">{siteTitle}</Link>
			</h1>
		</div>
		<h4>
			<Link className="Link" to="/login/">Admin</Link>
		</h4>
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
