import React, { Component } from 'react';
import styles from './styles.module.scss';
import matches from "~services/MatchesService";
import { connect } from 'react-redux';
import matchActions from "~redux/matches/actions";
import Spinner from 'react-spinkit';
import { arrayOf, func, boolean } from 'prop-types';
import { matchPropType } from "~constants/propTypes.js"

class MatchHistory extends Component {

    componentDidMount = () => {
      const { toggleLoading, getMatches} = this.props;
      toggleLoading();
      matches.getMatches().then(response => getMatches(response.data));
    }

    renderLine = (data) => {
      return (
      <div key={data.id}>
        Player one: {data.player_one}, Player two: {data.player_two}, Winner: {data.winner}
      </div>
    )}

    render() {
        const { isLoading, matchesHistory} = this.props;
        debugger;
        const matchesLines = matchesHistory.map(this.renderLine);
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

const mapStateToProps = ( { matches: {isLoading, matchesHistory}} ) => ({
    isLoading,
    matchesHistory
});
const mapDispatchToProps = dispatch => ({
    getMatches: data => dispatch(matchActions.getMatches(data)),
    toggleLoading: () => dispatch(matchActions.toggleLoading())
});

MatchHistory.propType = {
  isLoading: boolean,
  matchesHistory: arrayOf(matchPropType),
  getMatches: func,
  toggleLoading: func
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchHistory);