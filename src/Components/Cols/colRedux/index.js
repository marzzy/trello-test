
const initVal = [
    { colId: 111, colName: 'todo', cardsId: [1, 5, 8] },
    { colId: 222, colName: 'doing', cardsId: [2, 3, 4] },
    { colId: 333, colName: 'done', cardsId: [6, 7, 9] }
];

function reducer(state, action) {
    switch (action.type) {
        case 'createNewCol':
            return [
                ...state,
                {
                    colId: (new Date()).getTime(),
                    colName: action.colName,
                    cardsId: []
                }
            ];
        case 'deleteCol':
            if (action.colId === 111) {
                return state;
            }
            const defaultCol = state.find(item => item.colId === 111);
            const selecttedCol = state.find(item => item.colId === action.colId);
            const newDefaultCardsId = defaultCol.cardsId.concat(selecttedCol.cardsId);

            return [
                {
                    colId: 111,
                    colName: 'todo',
                    cardsId: newDefaultCardsId
                },
                ...state.filter((item) => (![111, action.colId].includes(item.colId))),
            ];
        case 'updateColCardsId':
            const selectedCol = state.find(item => item.colId === action.colId);
            const selectedColIndex = state.findIndex(item => item.colId === action.colId);
            const newSelectedColCardsId = [...selectedCol.cardsId, action.newCardId];
            const updatedCol = { ...state.find(item => item.colId === action.colId), cardsId: newSelectedColCardsId};

            return [
                ...state.slice(0, selectedColIndex),
                updatedCol,
                ...state.slice(selectedColIndex+1)
            ];
        default:
            return state;
    }
}

export {
    reducer,
    initVal
}