import React, { Component, PropTypes } from 'react';
import Home from '../home/Home.js';
import Sidebar from '../sidebar/sidebar.js';
require('./app.scss');

class App extends Component {
  static propTypes = {
    isAuth: PropTypes.bool
  };
  static defaultProps = {
    isAuth: false
  };
  componentDidMount() {
    console.log(this.props);
  }

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
