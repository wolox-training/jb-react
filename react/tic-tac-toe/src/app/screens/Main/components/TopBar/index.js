import React, { Component } from 'react';
import TopBar from './layout';
import { connect } from 'react-redux'; 
import { push } from 'connected-react-router';

class TopBarContainer extends Component {
  handleLogout = () => {
    const { push } = this.props;
    window.localStorage.removeItem('token');
    push('/login');
  }

  handleGameHistory = () => {
    const { push } = this.props;
    push('/history');
  }

  handleGame = () => {
    const { push } = this.props;
    push('/game');
  }

  render() {
    return <TopBar onLogoutClick={this.handleLogout} onGameClick={this.handleGame} onGameHistoryClick={this.handleGameHistory} />;
  }
}

export default connect(null, { push })(TopBarContainer);
