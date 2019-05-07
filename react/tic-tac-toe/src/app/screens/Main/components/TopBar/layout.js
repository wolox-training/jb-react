import React from 'react';
import styles from './styles.module.scss';
import logo from '../../../../assets/wolox_logo_white.svg';
import TopBarButton from '../TopBarButton';

function TopBar() {
  return (
    <nav className={styles.navbar}>
      <img src={logo} className={styles.logo} />
      <TopBarButton label="Game" buttonClass="fas fa-gamepad" />
    </nav>
  );
}

export default TopBar;
