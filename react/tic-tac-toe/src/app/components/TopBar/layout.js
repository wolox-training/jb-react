import React from 'react';
import styles from './styles.module.scss';

function TopBar() {
  return (
    <nav className={styles.navbar}>
      <img src="../../assets/wolox_logo.svg" className={styles.logo} />
      <div className={styles.game}> Game </div>
      <div> Game History </div>
      <div> logout </div>
    </nav>
  );
}

export default TopBar;
