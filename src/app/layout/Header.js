import React from 'react';
import Authentication from '../components/Authentication';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import MediaQuery from 'react-responsive';
import Sidenav from '../components/Sidenav';

require('./header.scss');

const Header = React.createClass({
	render() {
		return (
		<header>
			<MediaQuery query='(min-device-width: 910px)'>
				<Logo />
				<div className="nav">
					<Navigation />
					<Authentication />
				</div>
			</MediaQuery>
			<MediaQuery query='(max-device-width: 910px)'>
				<Sidenav />
				<Logo />
				<Authentication />
			</MediaQuery>
			
		</header>
	);
	}

});

export default Header;