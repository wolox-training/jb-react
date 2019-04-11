import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import bookActionsCreators from '@redux/book/actions';

import styles from './styles.scss';

const Search = ({ onSearch }) => (
  <input
    className={styles.input}
    type="text"
    placeholder="Search by name"
    onChange={e => {
      onSearch(e.target.value.toLowerCase());
    }}
  />
);

Search.propTypes = {
  onSearch: func.isRequired
};

const mapDispatchToProps = dispatch => ({
  onSearch(value) {
    dispatch(bookActionsCreators.searchBook(value));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Search);
