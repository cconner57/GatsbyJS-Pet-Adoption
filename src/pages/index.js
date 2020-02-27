import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<h1>Find the Puurfect Companion for You</h1>
		<p>Cats Available for Adoption</p>
		<div className="Home-container">
			<div className="card">
				<h4>Rosita</h4>

				<img src="http://placekitten.com/300/200" />
				<p>Breed: Domestic Short Hair & Tabby Mix</p>
				<p>Adult - Male - Large - Tabby (Gray / Blue / Silver)</p>
				<div>
					<Link className="profile" to="profileCat">
						View Profile
					</Link>
				</div>
			</div>
			<div className="card">
				<h4>Delilah</h4>
				<img src="http://placekitten.com/300/200" />
				<p>Breed: Domestic Short Hair & Tabby Mix</p>
				<p>Adult - Male - Large - Tabby (Gray / Blue / Silver)</p>
				<div>
					<Link className="profile" to="profileCat">
						View Profile
					</Link>
				</div>
			</div>
			<div className="card">
				<h4>Belinda</h4>

				<img src="http://placekitten.com/300/200" />
				<p>Breed: Domestic Short Hair & Tabby Mix</p>
				<p>Adult - Male - Large - Tabby (Gray / Blue / Silver)</p>
				<div>
					<Link className="profile" to="profileCat">
						View Profile
					</Link>
				</div>
			</div>
			<div className="card">
				<h4>Amos</h4>
				<img src="http://placekitten.com/300/200" />
				<p>Breed: Domestic Short Hair & Tabby Mix</p>
				<p>Adult - Male - Large - Tabby (Gray / Blue / Silver)</p>
				<div>
					<Link className="profile" to="profileCat">
						View Profile
					</Link>
				</div>
			</div>
		</div>
	</Layout>
);

export default IndexPage;
