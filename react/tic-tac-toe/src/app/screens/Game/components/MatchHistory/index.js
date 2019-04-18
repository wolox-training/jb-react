import React, { Component } from 'react';
import styles from './styles.module.scss';
import matches from "~services/MatchesService";
import { connect } from 'react-redux';
import matchActions from "~redux/matches/actions";
import Spinner from 'react-spinkit';

class MatchHistory extends Component {

    componentDidMount = () => {
        this.props.getMatches();
    }
    render() {
        const { isLoading, matchesHistory} = this.props;
        return (
          <div className={styles.matchHistory}>
            <div> Match History: </div>
            {!isLoading ? 
              <div className={styles.spinner}>
                <Spinner />
              </div>
              : null}
          </div>
        );
    }
}

const mapStateToProps = ( { matches: {isLoading, matchesHistory}} ) => ({
    isLoading,
    matchesHistory
});
const mapDispatchToProps = dispatch => ({
    getMatches: () => {
      matches.getMatches().then( response => dispatch(matchActions.getMatches()))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MatchHistory);