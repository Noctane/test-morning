import React from 'react';
import { Link } from 'react-router-dom';

require('./notfound.scss');

const NotFound = React.createClass({
	render() {
		return (
			<div className="notfound" style={{backgroundImage: 'url(img/clock.jpg)'}}>
				<div className="container">
					<div className="message">
						<h1>Réveil difficile ?</h1>

						<p><strong>Il semble que la page que vous recherchez n’existe pas ou est actuellement indisponible.
							Assurez-vous que l’adresse renseignée est bonne puis réessayez ultérieurement.</strong></p>

							<p>En attendant, profitez-en pour découvrir <Link to="/lecompte">notre histoire</Link> ou rencontrer <Link to="/lecompte">notre équipe</Link>.
								Si l’erreur persiste, contactez notre support clients par mail à <a href="mailto:good@morning.com">good@morning.com</a></p>
					</div>
				</div>
			</div>
		);
	}
}); 

export default NotFound;