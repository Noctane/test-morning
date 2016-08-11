import React from 'react';
import config from '../datas.json';
import styles from './Greeter.css';

const Greeter = () =>
  <div className={styles.root}>
    {config.server}
  </div>;

export default Greeter;
