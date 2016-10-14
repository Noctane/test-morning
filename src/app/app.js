import React, { Component, PropTypes } from 'react';
import Home from './home/home.js';
//import { AppBar } from 'react-toolbox/lib/app_bar';
require('./app.scss');

class App extends Component {
  static propTypes = {
    isAuth: PropTypes.bool
  };
  static defaultProps = {
    isAuth: false
  };

  render() {
    return (
      <div className="app">
        <h1>This is a title</h1>
        <img src="https://unsplash.it/1024/768/?random" />
      </div>
    );
  }
}
export default App;
