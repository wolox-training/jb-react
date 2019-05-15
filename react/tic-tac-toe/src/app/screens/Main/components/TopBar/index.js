import React, { Component } from 'react';
import TopBar from './layout';
import { connect } from 'react-redux';
import { push } from 'connected-react-router'
import LoginActions from '~redux/login/actions';

class TopBarContainer extends Component {
  handleLogout = () => {
    const { logout } = this.props;
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
  logout: () => dispatch(LoginActions.logout()),
  pushUrl: url => dispatch(push(url))
});

export default connect(null, mapDispatchToProps)(TopBarContainer);
