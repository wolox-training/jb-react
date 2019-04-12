export const actions = {
    SQUARE_CLICK: '@@GAME/SQUARE_CLICK'
};

const actionsCreators = {
    squareClick: (squareId) => ({
        type: actions.SQUARE_CLICK,
        payload: squareId
    })
};

export default actionsCreators;