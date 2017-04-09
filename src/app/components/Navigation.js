import React from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';

const Navigation = React.createClass({

	render() {
		return (
					<ul>
						<li><Link to="/lecompte">Le compte</Link></li>
						<li><Link to="/lacarte">La carte</Link></li>
						<li><Link to="/lacagnotte">La cagnotte</Link></li>
						<li><Link to="/tarifs">Tarifs</Link></li>
						<li><Link to="/pro">Pro</Link></li>
					</ul>
		);
	}
});


export default Navigation;