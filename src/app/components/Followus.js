import React from 'react';
import { Link } from 'react-router-dom';

const Followus = React.createClass({
	render() {
		return (
			<div className="followus">
				<h4>{this.props.title}</h4>
				<ul>
					<li><Link to="/lecompte">Blog</Link></li>
					<li><Link to="/lacarte">Facebook</Link></li>
					<li><Link to="/lacagnotte">Twitter</Link></li>
					<li><Link to="/lacagnotte">Instagram</Link></li>
					<li><Link to="/lacagnotte">Youtube</Link></li>
				</ul>
			</div>
		);
	}
});

export default Followus;