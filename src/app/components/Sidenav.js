import React from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import Radium from 'radium';

let RLink = Radium(Link);

const Sidenav = React.createClass({

	render() {
		return (
					<Menu customBurgerIcon={ <img src="img/hamburgericon.svg" /> }>
						<RLink className='menu-item' to="/lecompte">Le compte</RLink>
						<RLink className='menu-item' to="/lacarte">La carte</RLink>
						<RLink className='menu-item' to="/lacagnotte">La cagnotte</RLink>
						<RLink className='menu-item' to="/tarifs">Tarifs</RLink>
						<RLink className='menu-item' to="/pro">Pro</RLink>
					</Menu>
		);
	}
});


export default Sidenav;