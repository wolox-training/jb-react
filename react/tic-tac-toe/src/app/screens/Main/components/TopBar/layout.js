import React from 'react';
import styles from './styles.module.scss';
import logo from '../../../../assets/wolox_logo_white.svg';
import TopBarButton from '../TopBarButton';

function TopBar({ onLogoutClick, onGameClick, onGameHistoryClick }) {
  return (
    <nav className={styles.navbar}>
      <img src={logo} className={styles.logo} />
      <TopBarButton label="Game" handleClick={onGameClick} buttonClass="fas fa-gamepad" />
      <TopBarButton label="Match History" handleClick={onGameHistoryClick} buttonClass="fas fa-history" />
      <TopBarButton label="Logout" handleClick={onLogoutClick} buttonClass="fas fa-sign-out-alt" />
    </nav>
  );
}

export default TopBar;