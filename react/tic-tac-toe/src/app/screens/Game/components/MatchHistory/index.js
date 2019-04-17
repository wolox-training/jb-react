import React, { Component } from 'react';
import styles from './styles.module.scss';
import matches from "~services/matches";

class MatchHistory extends Component {
    state = { historyMatch: []};

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
            <div> {matchHistory} </div>
        </div>
        );
    }
}

export default MatchHistory;