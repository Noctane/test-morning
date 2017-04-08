import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';

const Layout = React.createClass({

	render() {
		return (
			<div className="main">
				<Header/>
				<main>
					{this.props.children}
				</main>
				<Footer/>
			</div>
			);
		}
	});

export default Layout;