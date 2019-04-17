import React, { Component } from 'react';
import styles from './styles.module.scss';
import matches, { getMatches } from "~services/matches";

class MatchHistory extends Component {
    async renderMatches() {
        getMatches();
        
    }
    render() {
        return (
        <div className={styles.matchHistory}>
            <div> Match History: </div>
            {this.renderMatches()}
        </div>
        );
    }
}

export default MatchHistory;