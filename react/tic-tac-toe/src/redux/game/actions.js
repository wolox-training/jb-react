export const actions = {
    SQUARE_CLICK: "@@GAME/SQUARE_CLICK"
}

const actionCreators = {
    squareClick: (squareId) => ({
        type: actions.SQUARE_CLICK,
        payload: squareId
    })
};

export default actionCreators;