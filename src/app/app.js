import React from 'react';
import { BrowserRouter as Router,
				  Route,
				  Link } from 'react-router-dom';

import Layout from './Layout';
import Hello from './components/Hello';
import NotFound from './components/NotFound';

require('./app.scss');

const App = () => (
  <div className="app">
    <Router>
			<Layout>
				<Route exact path="/" component={Hello} />
				<Route component={NotFound} />
			</Layout>
		</Router>
	</div>
);

export default App;
