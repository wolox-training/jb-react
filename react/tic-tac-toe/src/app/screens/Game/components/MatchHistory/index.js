import React, { Component } from 'react';
import styles from './styles.module.scss';
import matches from "~services/matches";

class MatchHistory extends Component {
    render() {
        matches.getMatches().then(console.log("ASD"));
        return (
        <div className={styles.matchHistory}>
            <div> Match History: </div>
            <div>  </div>
        </div>
        );
    }
}

export default MatchHistory;