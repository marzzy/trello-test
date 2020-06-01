function getInitVal() {
    const localColDataBased = localStorage.getItem('colData');

    if (localColDataBased){
        return JSON.parse(localColDataBased);
    }
    return [
        { colId: 111, colName: 'todo', cardsId: [1, 5, 8] },
        { colId: 222, colName: 'doing', cardsId: [2, 3, 4] },
        { colId: 333, colName: 'done', cardsId: [6, 7, 9] }
    ];
}

function reducer(state, action) {
    switch (action.type) {
        case 'createNewCol': {
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
        case 'deleteCol': {
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
        case 'updateColCardsId': {
            const selectedCol = state.find(item => item.colId === action.colId);
            const selectedColIndex = state.findIndex(item => item.colId === action.colId);
            const newSelectedColCardsId = [...selectedCol.cardsId, action.newCardId];
            const updatedCol = { ...state.find(item => item.colId === action.colId), cardsId: newSelectedColCardsId};
            const newState = [
                ...state.slice(0, selectedColIndex),
                updatedCol,
                ...state.slice(selectedColIndex+1)
            ];

            localStorage.setItem('colData', JSON.stringify(newState));
            return newState;
        }
        default:
            return state;
    }
}

export {
    reducer,
    getInitVal
}