import React from 'react';

import Layout from '../components/layout';

const ProfileCat = () => {
	return (
		<Layout>
			<div>
				<img src="http://placekitten.com/300/200" />
				<img src="http://placekitten.com/300/200" />
				<img src="http://placekitten.com/300/200" />
			</div>
			<h2>Cat Name</h2>
			<p>Domestic Short Hair - Pasadena, CA</p>
			<hr />
			<p>Young - Male - Medium</p>
			<hr />
			<div>
				<h3>About</h3>
				<h5>Coat Length</h5>
				<p>Short</p>
				<h5>Health</h5>
				<p>Vaccinations up to date, spayed / neutered</p>
				<h5>Good in a home with</h5>
				<p>Other cats, dogs</p>
			</div>
			<div>
				<h3>Meet 'Cat Name'</h3>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus velit autem quibusdam, saepe
					laudantium error mollitia vitae! Quasi corrupti velit doloribus voluptas fuga. Quidem eaque vitae
					labore tempora voluptas at.
				</p>
			</div>
		</Layout>
	);
};

export default ProfileCat;
