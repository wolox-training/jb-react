import React, {Component} from 'react';

import styles from './styles.module.scss';

class Square extends Component {

  handleClick = () => this.props.onClick();

  render() {
    return(
      <button type="button" className={styles.square} onClick={this.handleClick}>
        {this.props.value}
      </button>
  );
  }
}

export default Square;
