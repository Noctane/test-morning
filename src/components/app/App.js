import React from 'react';
import style from './app.scss';
import Greeter from '../greeter/Greeter';

const App = () =>
  <div className={style.root}>
  	Hi, my name's App.js
    <Greeter />
  </div>;
export default App;
