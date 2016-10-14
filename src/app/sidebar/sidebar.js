import React from 'react';
require('./sidebar.scss')

const Sidebar = ({ isAuth }) => <div className="sidebar">Sidebar: {isAuth}</div>;

Sidebar.propTypes = {
  isAuth: React.PropTypes.bool
};

export default Sidebar;
