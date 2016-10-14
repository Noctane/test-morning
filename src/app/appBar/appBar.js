import React from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import theme from './appBar.scss';

const appBar = (props) => (
  <AppBar {...props} theme={theme}>This is the Appbar</AppBar>
);

export default appBar;
