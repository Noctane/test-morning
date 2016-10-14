import React, { Component, PropTypes } from 'react';
import Home from './home/home.js';
import Sidebar from './sidebar/sidebar.js';
require('./app.scss');

class App extends Component {
  static propTypes = {
    isAuth: PropTypes.string
  };
  static defaultProps = {
    isAuth: "toto"
  };

  render() {
    return (
      <div>
        <Sidebar {...this.props} />
        <Home {...this.props} />
      </div>
    );
  }
}
export default App;
