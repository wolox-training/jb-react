import React, { Component } from 'react';
import styles from './styles.module.scss';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import { arrayOf, func, boolean } from 'prop-types';
import { matchPropType } from "~constants/propTypes.js"
import {PLAYER_ONE, PLAYER_TWO, WINNER, MATCH_HISTORY_TITLE, GET_ERROR} from "~constants/text";
import MatchesService from '~services/MatchesService';

class MatchHistory extends Component {
  componentDidMount() {
    const { getMatches } = this.props;
    getMatches();
  }

  renderLine = data => (
    <div key={data.id}>
      {PLAYER_ONE} {data.player_one}, {PLAYER_TWO} {data.player_two}, {WINNER} {data.winner}
    </div>
  )

  render() {
    const { hasError, isLoading, matches} = this.props;
    const matchesLines = hasError || !matches ? GET_ERROR : matches.map(this.renderLine);
    return (
      <div className={styles.matchHistory}>
        {MATCH_HISTORY_TITLE}
        {isLoading ?
          <Spinner className={styles.spinner}/>
          : matchesLines}
      </div>
    );
  }
}

MatchHistory.propType = {
  hasError: boolean,
  isLoading: boolean,
  matchesHistory: arrayOf(matchPropType),
  getMatches: func,
}

const mapStateToProps = ( { matches: {matchesError, matchesLoading, matches}} ) => ({
  matchesError,
  matchesLoading,
  matches
});

const mapDispatchToProps = dispatch => ({
  getMatches: () => dispatch(MatchesService.getMatches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchHistory);
