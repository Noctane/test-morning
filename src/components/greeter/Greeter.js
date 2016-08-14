import React from 'react';
import config from '../../datas.json';
require ('./greeter.scss');

const Greeter = () =>
  <div className="greeter">
    {config.server}
  </div>;

export default Greeter;
