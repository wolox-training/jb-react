import React, { Component } from 'react';
import { JUMP_TEXT, GAME_START_TEXT } from "~constants/text";
import { connect } from 'react-redux';
import { number } from 'prop-types'
import gameActionsCreator from '~redux/game/actions'

class JumpText extends Component {
  jumpText = move => {
    return move ? JUMP_TEXT + move : GAME_START_TEXT;
  }

  render() {
    const { move, jumpTo } = this.props;
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{this.jumpText(move)}</button>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  jumpTo: historyId => dispatch(gameActionsCreator.historyClick(historyId))
});

JumpText.propTypes = {
  move: number
}

export default connect(null, mapDispatchToProps)(JumpText);
