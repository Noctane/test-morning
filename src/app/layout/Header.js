import React from 'react';
import { Link } from 'react-router-dom';
import Authentication from '../components/Authentication';
import Navigation from '../components/Navigation';

require('./header.scss');

const Header = React.createClass({
	render() {
		return (
		<header>
			<div className="logo">
				<Link to="/">
					<img src={"img/morningLogo.png"} alt="Logo"/>
				</Link>
			</div>
			<div className="nav">
				<Navigation />
				<Authentication />
			</div>
			
		</header>
	);
	}

});

export default Header;