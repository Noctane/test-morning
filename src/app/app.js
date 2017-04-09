import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './Layout';
import Hello from './components/Hello';
import NotFound from './components/NotFound';

require('./app.scss');

const App = React.createClass({
	render() {
		return (
		  <div className="app">
		    <Router>
					<Layout>
						<Switch>
							<Route exact path="/" component={Hello} />
							<Route component={NotFound} />
						</Switch>
					</Layout>
				</Router>
			</div>
		);
	}
}); 

export default App;
