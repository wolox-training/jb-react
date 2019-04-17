import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import bookActionsCreators from '@redux/book/actions';

import styles from './styles.scss';

const Search = ({ onSearch }) => (
  <input className={styles.input} type="text" placeholder="Search by name" onChange={onSearch} />
);

Search.propTypes = {
  onSearch: func.isRequired
};

const mapDispatchToProps = dispatch => ({
  onSearch: e => dispatch(bookActionsCreators.searchBook(e.target.value.toLowerCase()))
});

export default connect(
  null,
  mapDispatchToProps
)(Search);
