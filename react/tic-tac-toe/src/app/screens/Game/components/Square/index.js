import React, {Component} from 'react';

import styles from './styles.module.scss';

class Square extends Component {
  state = {value : null};

  clickHandler = () => this.setState({value: 'X'});

  render() {
    return(
      <button type="button" className={styles.square} onClick={this.clickHandler}>
        {this.state.value}
      </button>
  );
  }
}

export default Square;
