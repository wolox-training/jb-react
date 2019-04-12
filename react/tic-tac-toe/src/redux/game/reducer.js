import actions from './actions'

const initialState = {
  history: [{ squares: Array(9).fill(null)}],
  stepNumber: 0,
  xIsNext: true
};

function reducer(state = initialState, action){
    switch(action){
        default:
            return state;
    }
}

export default reducer;