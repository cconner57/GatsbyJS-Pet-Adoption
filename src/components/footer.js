import React from 'react';

const Footer = () => {
	return (
		<footer
			style={{
				background: `rgb(113, 238, 184)`,
				marginBottom: `1.45rem`,
                display: `fixed`,
                textAlign: `center`
			}}
		>
			<div
				style={{
					margin: `0 auto`,
					maxWidth: 960,
                    padding: `1.45rem 1.0875rem`
				}}
			>
				<h4>The Catty Shack</h4>
				<p>(909) 324-1500</p>
				<p>31624 Hilltop Blvd</p>
				<p>Running Springs, California 92382</p>
			</div>
			<div className="Programmer">
				<h5>Website Designed by Christopher Conner</h5>
			</div>
		</footer>
	);
};

export default Footer;
