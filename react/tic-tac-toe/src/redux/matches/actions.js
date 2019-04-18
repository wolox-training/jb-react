
import MatchesService from "~services/MatchesService";

export const actions = {
    GET_MATCHES: '@@MATCHES/GET_MATCHES'
};

const actionsCreators = {
    getMatches: () => ({
        payload: MatchesService.getMatches(),
        type: actions.GET_MATCHES
    })
}

export default actionsCreators;