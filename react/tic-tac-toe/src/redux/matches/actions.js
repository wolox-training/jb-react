
export const actions = {
    GET_MATCHES: '@@MATCHES/GET_MATCHES',
    TOGGLE_LOADING: '@@MATCHES/TOGGLE_LOADING'
};

const actionsCreators = {
    getMatches: matches => ({
        payload: matches,
        type: actions.GET_MATCHES
    }),
    toggleLoading: () => ({
        type: actions.TOGGLE_LOADING
    })
}

export default actionsCreators;