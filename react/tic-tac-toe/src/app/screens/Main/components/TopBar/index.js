import React, { Component } from 'react';
import TopBar from './layout';
import { connect } from 'react-redux'; 
import { push } from 'connected-react-router';
import actions from '~redux/login/actions';

class TopBarContainer extends Component {
  handleLogout = () => {
    const { pushUrl, logout } = this.props;
    window.localStorage.removeItem('token');
    pushUrl('/login');
    logout();
  }

  handleGameHistory = () => {
    const { pushUrl } = this.props;
    pushUrl('/history');
  }

  handleGame = () => {
    const { pushUrl } = this.props;
    pushUrl('/game');
  }

  render() {
    return <TopBar onLogoutClick={this.handleLogout} onGameClick={this.handleGame} onGameHistoryClick={this.handleGameHistory} />;
  }
}

const mapDispatchToProps = dispatch => ({
  pushUrl: url => dispatch(push(url)),
  logout: () => dispatch(actions.logout())
});

export default connect(null, mapDispatchToProps)(TopBarContainer);
