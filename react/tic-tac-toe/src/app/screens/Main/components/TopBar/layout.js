import React from 'react';
import styles from './styles.module.scss';
import logo from '../../../../assets/wolox_logo_white.svg';
import TopBarButton from '../TopBarButton';

function TopBar() {
  return (
    <nav className={styles.navbar}>
      <img src={logo} className={styles.logo} />
      <TopBarButton label="Game" buttonClass="fas fa-gamepad" />
      <TopBarButton label="Game History" buttonClass="fas fa-history" />
      <TopBarButton label="Logout" buttonClass="fas fa-sign-out-alt" />
    </nav>
  );
}

export default TopBar;
