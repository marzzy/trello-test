import { createCol, deleteCol, increaseColCardsId, decreaseColCardsId } from './helper';

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
        case 'createNewCol':
            return createCol(state, action);
        case 'deleteCol':
            return deleteCol(state, action);
        case 'increaseColCardsId':
            return increaseColCardsId(state, action);
        case 'decreaseColCardsId':
            return decreaseColCardsId(state, action);
        default:
            return state;
    }
}

export {
    reducer,
    getInitVal
}