import React from 'react';
import Products from '../components/Products';
import Company from '../components/Company';
import Legal from '../components/Legal';
import Followus from '../components/Followus';

require('./footer.scss');

const Footer = React.createClass({
	render() {
		return (
		<footer>
			<div className="container">
				<div className="footer">
						<div className="details">
							<img src={"img/morningLogo.png"} alt="Logo"/>
							<p>Morning est un établissement de paiement agréé par l’ACPR : <span>code banque (CIB) n°16768</span></p>
							<h4>Contact</h4>
							<p>good@morning.com <br/>
									0 978 238 238</p>
						</div>
						<div className="footer-nav">
							<Products title="Produits" />
							<Company title="Société" />
							<Legal title="Légal" />
							<Followus title="Suivez-nous" />
						</div>
					</div>
				</div>
		</footer>
	);
	}
});

export default Footer;