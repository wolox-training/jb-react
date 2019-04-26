import matches from "~services/MatchesService";

export const actions = {
    GET_MATCHES: '@@MATCHES/GET_MATCHES',
    GET_MATCHES_SUCCESS: '@@MATCHES/GET_MATCHES_SUCCESS',
    GET_MATCHES_FAIL: '@@MATCHES/GET_MATCHES_FAIL'
};

const actionsCreators = {
  getMatches: () => async dispatch => {
    dispatch({ type: actions.GET_MATCHES });
    const response = await matches.getMatches()
    if(response.ok){
      dispatch({
        type: actions.GET_MATCHES_SUCCESS,
        payload: response.data
      })
    }
    else {
      dispatch({
        type: actions.GET_MATCHES_FAIL
      })
    }
  }
}

export default actionsCreators;