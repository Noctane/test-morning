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
					<div className="footer-mini">
						
						<div className="app-download">	
							<a href="/applestore">
								<img src={"img/Download_on_the_App_Store_Badge_FR_135x40.png"} alt="Download on the App store"/>
							</a>
						</div>
						<div className="copy">
							<p>&copy;Morning 2016</p>
						</div>
					</div>
				</div>
		</footer>
	);
	}
});

export default Footer;