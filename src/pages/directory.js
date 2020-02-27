import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const Directory = () => (
	<Layout>
		<div className="Directory-title">
			<h2>Available Cats</h2>
			<Link className="Add" to="addCat">
				+ Add Cat
			</Link>
		</div>
		<div className="Directory-container" style={{ display: `flex` }}>
			<div className="card">
				<h4>Rosita</h4>
				<img src="http://placekitten.com/300/200" />
				<p>Breed: Domestic Short Hair & Tabby Mix</p>
				<p>Adult - Male - Large - Tabby (Gray / Blue / Silver)</p>
				<div>
					<Link className="Edit" to="editCat">
						Edit
					</Link>
					<Link className="Remove" to="removeCat">
						Remove
					</Link>
				</div>
			</div>
			<div className="card">
				<h4>Delilah</h4>
				<img src="http://placekitten.com/300/200" />
				<p>Breed: Domestic Short Hair & Tabby Mix</p>
				<p>Adult - Male - Large - Tabby (Gray / Blue / Silver)</p>
				<div>
					<Link className="Edit" to="edit">
						Edit
					</Link>
					<Link className="Remove" to="remove">
						Remove
					</Link>
				</div>
			</div>
			<div className="card">
				<h4>Belinda</h4>
				<img src="http://placekitten.com/300/200" />
				<p>Breed: Domestic Short Hair & Tabby Mix</p>
				<p>Adult - Male - Large - Tabby (Gray / Blue / Silver)</p>
				<div>
					<Link className="Edit" to="edit">
						Edit
					</Link>
					<Link className="Remove" to="remove">
						Remove
					</Link>
				</div>
			</div>
			<div className="card">
				<h4>Amos</h4>
				<img src="http://placekitten.com/300/200" />
				<p>Breed: Domestic Short Hair & Tabby Mix</p>
				<p>Adult - Male - Large - Tabby (Gray / Blue / Silver)</p>
				<div>
					<Link className="Edit" to="edit">
						Edit
					</Link>
					<Link className="Remove" to="remove">
						Remove
					</Link>
				</div>
			</div>
		</div>
	</Layout>
);

export default Directory;
