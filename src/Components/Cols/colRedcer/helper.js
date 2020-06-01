function createCol(state, action) {
    const newState = [
        ...state,
        {
            colId: (new Date()).getTime(),
            colName: action.colName,
            cardsId: []
        }
    ];

    localStorage.setItem('colData', JSON.stringify(newState));
    return newState;
}

function deleteCol(state, action) {
    if (action.colId === 111) {
        return state;
    }
    const defaultCol = state.find(item => item.colId === 111);
    const selecttedCol = state.find(item => item.colId === action.colId);
    const newDefaultCardsId = defaultCol.cardsId.concat(selecttedCol.cardsId);
    const newState = [
        {
            colId: 111,
            colName: 'todo',
            cardsId: newDefaultCardsId
        },
        ...state.filter((item) => (![111, action.colId].includes(item.colId))),
    ];

    localStorage.setItem('colData', JSON.stringify(newState));
    return newState;
}

function updateColCardsId(state, action) {
    const selectedCol = state.find(item => item.colId === action.colId);
    const selectedColIndex = state.findIndex(item => item.colId === action.colId);
    const newSelectedColCardsId = [...selectedCol.cardsId, action.newCardId];
    const updatedCol = { ...state.find(item => item.colId === action.colId), cardsId: newSelectedColCardsId };
    const newState = [
        ...state.slice(0, selectedColIndex),
        updatedCol,
        ...state.slice(selectedColIndex + 1)
    ];

    localStorage.setItem('colData', JSON.stringify(newState));
    return newState;
}

// function updateColCardsId(state, action)


export {
    createCol,
    deleteCol,
    updateColCardsId
}