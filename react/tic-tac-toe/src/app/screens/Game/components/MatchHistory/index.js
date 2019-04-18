import React, { Component } from 'react';
import styles from './styles.module.scss';
import matches from "~services/MatchesService";
import { connect } from 'react-redux';

class MatchHistory extends Component {

    componentDidMount = () => {
        matches.getMatches().then(response => this.setState(
            {historyMatch: response.data}
        ));
    }
    render() {
        const matchHistory = this.state.historyMatch.map(elem => <div>{elem.id}</div>);
        return (
        <div className={styles.matchHistory}>
            <div> Match History: </div>
            {matchHistory}
        </div>
        );
    }
}

const mapStateToProps = () => ({
    isLoading,
    matchesHistory
});
const mapDispatchToProps = () => ({
    getMatches: () => {
        
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MatchHistory);