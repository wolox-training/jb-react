import React from 'react';
import styles from './styles.module.scss';
import logo from '../../../../assets/wolox_logo_white.svg';
import TopBarButton from '../TopBarButton';
import { BUTTONS } from '../constants';

function TopBar({ onLogoutClick, onGameClick, onGameHistoryClick }) {
  return (
    <nav className={styles.navbar}>
      <img src={logo} className={styles.logo} />
      <TopBarButton label={BUTTONS.GAME.label} handleClick={onGameClick} buttonClass={BUTTONS.GAME.icon} />
      <TopBarButton
        label={BUTTONS.MATCH_HISTORY.label}
        handleClick={onGameHistoryClick}
        buttonClass={BUTTONS.MATCH_HISTORY.icon}
      />
      <TopBarButton
        label={BUTTONS.LOGOUT.label}
        handleClick={onLogoutClick}
        buttonClass={BUTTONS.LOGOUT.icon}
      />
    </nav>
  );
}

export default TopBar;
