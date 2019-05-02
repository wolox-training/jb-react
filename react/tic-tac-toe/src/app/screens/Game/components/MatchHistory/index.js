import React, { Component } from 'react';
import styles from './styles.module.scss';
import matches from "~services/MatchesService";
import { connect } from 'react-redux';
import matchActions from "~redux/matches/actions";
import Spinner from 'react-spinkit';
import { arrayOf, func, boolean } from 'prop-types';
import { matchPropType } from "~constants/propTypes.js"
import {PLAYER_ONE, PLAYER_TWO, WINNER, MATCH_HISTORY_TITLE, GET_ERROR} from "~constants";

class MatchHistory extends Component {
  componentDidMount() {
    const { toggleLoading, getMatches } = this.props;
    toggleLoading();
    matches.getMatches().then(response => getMatches(response.data));
  }

  renderLine = data => (
    <div key={data.id}>
      {PLAYER_ONE} {data.player_one}, {PLAYER_TWO} {data.player_two}, {WINNER} {data.winner}
    </div>
  )

  render() {
    const { hasError, isLoading, matchesHistory} = this.props;
    const matchesLines = hasError || !matchesHistory ? GET_ERROR : matchesHistory.map(this.renderLine);
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
  toggleLoading: func
}

const mapStateToProps = ( { matches: {isLoading, matchesHistory}} ) => ({
  isLoading,
  matchesHistory
});
const mapDispatchToProps = dispatch => ({
  getMatches: data => dispatch(matchActions.getMatches(data)),
  toggleLoading: () => dispatch(matchActions.toggleLoading())
});

export default connect(mapStateToProps, mapDispatchToProps)(MatchHistory);