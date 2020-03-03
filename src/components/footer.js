import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer>
			<div className="Contact">
				<h2>The Catty Shack</h2>
				<p>(909) 324-1500</p>
				<p>31624 Hilltop Blvd</p>
				<p>Running Springs, California 92382</p>
			</div>
			<div className="Social">
				<p>Get connected with us on social networks!</p>
				<a href="https://www.facebook.com/cattyshack.us/">
					<FaFacebookF size={28} />
				</a>
				<a href="https://www.facebook.com/cattyshack.us/">
					<FaTwitter size={28} />
				</a>
				<a href="https://www.facebook.com/cattyshack.us/">
					<FaInstagram size={28} />
				</a>
				<a href="https://www.facebook.com/cattyshack.us/">
					<FaYoutube size={28} />
				</a>
			</div>
			<div>
				<div className="Programmer">
					<em>Website designed by Christopher Conner</em>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
