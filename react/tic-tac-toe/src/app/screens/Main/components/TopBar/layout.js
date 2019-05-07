import React from 'react';
import styles from './styles.module.scss';
import logo from '../../../../assets/wolox_logo.svg';

function TopBar() {
  return (
    <nav className={styles.navbar}>
      <img src={logo} className={styles.logo} />
      <div className={styles.tabs}> Game </div>
      <div className={styles.tabs}> Game History </div>
      <div className={styles.logout}> logout </div>
    </nav>
  );
}

export default TopBar;
