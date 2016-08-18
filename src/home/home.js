import React, { Component, PropTypes } from 'react';
import Greeter from '../greeter/greeter.js';
require('./home.scss');

export default class Home extends Component {
  static propTypes = {
    isAuth: PropTypes.bool
  };
  static defaultProps = {
    isAuth: false
  };
  componentDidMount() {
    console.log(this.checkElt(this.props));
  }
  checkElt = (props) => React.isValidElement(props);
  render() {
    return (
      <div ref="home" className="home">
        Home:{this.props.isAuth}
        <Greeter />
      </div>
    );
  }
}
