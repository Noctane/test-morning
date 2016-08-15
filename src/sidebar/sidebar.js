import React from 'react';

const Sidebar = ({ isAuth }) => <div>Sidebar: {isAuth}</div>;

Sidebar.propTypes = {
  isAuth: React.PropTypes.bool
};

export default Sidebar;
