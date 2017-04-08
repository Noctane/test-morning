import React from 'react';
import { Link } from 'react-router-dom';

const Company = React.createClass({
	render() {
		return (
			<div className="company">
				<h4>{this.props.title}</h4>
				<ul>
					<li><Link to="/lecompte">Notre histoire</Link></li>
					<li><Link to="/lacarte">L'équipe</Link></li>
					<li><Link to="/lacagnotte">Jobs</Link></li>
					<li><Link to="/tarifs">Presse</Link></li>
					<li><Link to="/pro">Investir</Link></li>
					<li><Link to="/pro">Contact</Link></li>
				</ul>
			</div>
		);
	}
});

export default Company;