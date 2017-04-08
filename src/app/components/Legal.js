import React from 'react';
import { Link } from 'react-router-dom';

const Legal = React.createClass({
	render() {
		return (
			<div className="legal">
				<h4>{this.props.title}</h4>
				<ul>
					<li><Link to="/lecompte">Politique de securité</Link></li>
					<li><Link to="/lacarte">Mentions</Link></li>
					<li><Link to="/lacagnotte">CGU</Link></li>
				</ul>
			</div>
		);
	}
});

export default Legal;