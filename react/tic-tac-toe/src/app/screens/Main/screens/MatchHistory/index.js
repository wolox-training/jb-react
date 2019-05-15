import React, { Component } from 'react';
import styles from './styles.module.scss';
import { connect } from 'react-redux';
import { arrayOf, func, boolean } from 'prop-types';
import { matchPropType } from "~constants/propTypes.js"
import {PLAYER_ONE, PLAYER_TWO, WINNER, MATCH_HISTORY_TITLE, GET_ERROR} from "~constants/text";
import MatchesService from '~services/MatchesService';
import WithLoading from '~components/WithLoading';

class MatchHistory extends Component {
  componentDidMount() {
    const { matches, getMatches } = this.props;
    if(!matches){
      getMatches();
    }
  }

  renderLine = data => (
    <div key={data.id}>
      {PLAYER_ONE} {data.player_one}, {PLAYER_TWO} {data.player_two}, {WINNER} {data.winner}
    </div>
  )

  render() {
    const { matches } = this.props;
    const matchesLines = matches && matches.map(this.renderLine);
    return (
      <div className={styles.matchHistory}>
        {MATCH_HISTORY_TITLE}
        {matchesLines}
      </div>
    );
  }
}

MatchHistory.propType = {
  hasError: boolean,
  isLoading: boolean,
  matches: arrayOf(matchPropType),
  getMatches: func,
}

const mapStateToProps = ( { matches: {matches, matchesLoading}} ) => ({
  isLoading: matchesLoading,
  matches
});

const mapDispatchToProps = dispatch => ({
  getMatches: () => dispatch(MatchesService.getMatches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithLoading(MatchHistory));
