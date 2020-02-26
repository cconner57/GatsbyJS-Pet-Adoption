import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const Login = () => (
	<Layout>
		<h1>Please Login</h1>
		<div>
			<form style={{ display: `flex`, flexDirection: `column` }}>
				<label>Username:</label>
				<input type="text" placeholder="Enter Username Here.." />
				<label>Password:</label>
				<input type="text" placeholder="Enter Password Here.." />
			</form>
		</div>
    <div>
    <Link to="directory">Directory</Link>
    </div>
	</Layout>
);

export default Login;
