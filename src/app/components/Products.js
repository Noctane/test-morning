import React from 'react';
import { Link } from 'react-router-dom';

const Products = React.createClass({
	render() {
		return (
			<div className="products">
				<h4>{this.props.title}</h4>
				<ul>
					<li><Link to="/lecompte">Le compte</Link></li>
					<li><Link to="/lacarte">La carte</Link></li>
					<li><Link to="/lacagnotte">La cagnotte</Link></li>
					<li><Link to="/tarifs">Tarifs</Link></li>
					<li><Link to="/pro">Pro</Link></li>
				</ul>
			</div>
		);
	}
});

export default Products;