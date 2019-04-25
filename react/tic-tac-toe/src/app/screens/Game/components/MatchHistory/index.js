import React, { Component } from 'react';
import styles from './styles.module.scss';
import matches from "~services/MatchesService";
import { connect } from 'react-redux';
import matchActions from "~redux/matches/actions";
import Spinner from 'react-spinkit';
import { arrayOf, func, boolean } from 'prop-types';
import { matchPropType } from "~constants/propTypes.js"
import {PLAYER_ONE, PLAYER_TWO, WINNER} from "~constants";

class MatchHistory extends Component {

    componentDidMount = () => {
      const { toggleLoading, getMatches} = this.props;
      toggleLoading();
      matches.getMatches().then(response => getMatches(response.data));
    }

    renderLine = (data) => {
      return (
      <div key={data.id}>
        {PLAYER_ONE} {data.player_one}, {PLAYER_TWO} {data.player_two}, {WINNER} {data.winner}
      </div>
    )}

    render() {
        const { isLoading, matchesHistory} = this.props;
        const matchesLines = matchesHistory ? matchesHistory.map(this.renderLine) : 'Error getting data';
        return (
          <div className={styles.matchHistory}>
            <div> Match History: </div>
            {isLoading ? 
              <div className={styles.spinner}>
                <Spinner />
              </div>
              : matchesLines}
          </div>
        );
    }
}

MatchHistory.propType = {
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