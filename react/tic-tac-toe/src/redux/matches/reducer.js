import { actions } from './actions';

const initialState = {
    isLoading: false,
    matchesHistory: []
};

function reducer(state = initialState, action) {
    switch(action.type){
        case actions.GET_MATCHES:
            
        default:
            return state;
    }
}