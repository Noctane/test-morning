import React from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

const Logo = React.createClass({
	render() {
		return(
			<div className="logo">
				<MediaQuery query='(min-device-width: 910px)'>
					<Link to="/">
						<img src={"img/morningLogo.png"} alt="Logo"/>
					</Link>
				</MediaQuery>
				<MediaQuery query='(max-device-width: 909px)'>
					<Link to="/">
						<img src={"img/morning_logo_mobile_blanc.svg"} alt="Logo" />
					</Link>
				</MediaQuery>
			</div>
			);
	}	
});

export default Logo;