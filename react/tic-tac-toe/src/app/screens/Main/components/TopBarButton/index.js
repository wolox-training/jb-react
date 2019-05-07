import React from 'react';
import styles from './styles.module.scss';

function TopBarButton({ handleClick, label, buttonClass }) {
  return (
    <button className={styles.button} onClick={handleClick}>
      <i className={`${styles.image} ${buttonClass}`} />
      {label}
    </button>
  );
}

export default TopBarButton;
