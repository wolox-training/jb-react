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

  render() {
    return <TopBar onLogoutClick={this.handleLogout} />;
  }
}

export default connect(null, { push })(TopBarContainer);
