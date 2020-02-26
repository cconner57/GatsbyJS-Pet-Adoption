import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<h1>Find the Puurfect Companion for You</h1>
		<p>Cats Available for Adoption</p>
		<div style={{ display: `flex` }}>
			<div
				style={{
					display: `flex`,
					flexDirection: `column`,
					textAlign: `center`,
					width: `250px`,
					border: `1px solid gray`,
					borderRadius: `10px`,
					margin: `0 5px`
				}}
			>
				<h4 style={{ paddingTop: `15px` }}>Rosita</h4>

				<img src="http://placekitten.com/300/200" />
				<p>Breed: Domestic Short Hair & Tabby Mix</p>
				<p>Adult - Male - Large - Tabby (Gray / Blue / Silver)</p>
				<div>
					<Link style={{ color: `black`, textDecoration: `none`, padding: `10px` }} to="profileCat">
						View Profile
					</Link>
				</div>
			</div>
			<div
				style={{
					display: `flex`,
					flexDirection: `column`,
					textAlign: `center`,
					width: `250px`,
					border: `1px solid gray`,
					borderRadius: `10px`,
					margin: `0 5px`
				}}
			>
				<h4 style={{ paddingTop: `15px` }}>Delilah</h4>
				<img src="http://placekitten.com/300/200" />
				<p>Breed: Domestic Short Hair & Tabby Mix</p>
				<p>Adult - Male - Large - Tabby (Gray / Blue / Silver)</p>
				<div>
					<Link style={{ color: `black`, textDecoration: `none`, padding: `10px` }} to="profileCat">
						View Profile
					</Link>
				</div>
			</div>
			<div
				style={{
					display: `flex`,
					flexDirection: `column`,
					textAlign: `center`,
					width: `250px`,
					border: `1px solid gray`,
					borderRadius: `10px`,
					margin: `0 5px`
				}}
			>
				<h4 style={{ paddingTop: `15px` }}>Belinda</h4>

				<img src="http://placekitten.com/300/200" />
				<p>Breed: Domestic Short Hair & Tabby Mix</p>
				<p>Adult - Male - Large - Tabby (Gray / Blue / Silver)</p>
				<div>
					<Link style={{ color: `black`, textDecoration: `none`, padding: `10px` }} to="profileCat">
						View Profile
					</Link>
				</div>
			</div>
			<div
				style={{
					display: `flex`,
					flexDirection: `column`,
					textAlign: `center`,
					width: `250px`,
					border: `1px solid gray`,
					borderRadius: `10px`,
					margin: `0 5px`
				}}
			>
				<h4 style={{ paddingTop: `15px` }}>Amos</h4>
				<img src="http://placekitten.com/300/200" />
				<p>Breed: Domestic Short Hair & Tabby Mix</p>
				<p>Adult - Male - Large - Tabby (Gray / Blue / Silver)</p>
				<div>
					<Link style={{ color: `black`, textDecoration: `none`, padding: `10px` }} to="profileCat">
						View Profile
					</Link>
				</div>
			</div>
		</div>
	</Layout>
);

export default IndexPage;
