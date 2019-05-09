import matches from '~services/MatchesService';
import { createTypes, completeTypes, createExternalActions } from 'redux-recompose';

export const actions = createTypes(completeTypes(['GET_MATCHES']), '@@MATCHES');
const $ = createExternalActions('matches');

const actionsCreators = {
  getMatches: () => async dispatch => {
    dispatch({ type: actions.GET_MATCHES });
    const response = await matches.getMatches();
    if (response.ok) {
      dispatch({
        type: actions.GET_MATCHES_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch({
        type: actions.GET_MATCHES_FAIL
      });
    }
  }
};

export default actionsCreators;
