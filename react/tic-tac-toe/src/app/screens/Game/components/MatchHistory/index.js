import React, { Component } from 'react';
import styles from './styles.module.scss';
import matches from "~services/MatchesService";
import { connect } from 'react-redux';
import matchActions from "~redux/matches/actions";
import Spinner from 'react-spinkit';

class MatchHistory extends Component {

    componentDidMount = () => {
      const { toggleLoading, getMatches} = this.props;
      toggleLoading();
      matches.getMatches().then(response => getMatches(response.data));
    }
    render() {
        const { isLoading, matchesHistory} = this.props;
        const matchesLines = matchesHistory.map( elem => elem.id);
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
    getMatches: (data) => {
      dispatch(matchActions.getMatches(data))
    },
    toggleLoading: () => {
      dispatch(matchActions.toggleLoading())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MatchHistory);