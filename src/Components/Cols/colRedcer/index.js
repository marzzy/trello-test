import { createCol, deleteCol, updateColCardsId } from './helper';

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
            return createCol();
        case 'deleteCol':
            return deleteCol();

        case 'updateColCardsId':
            return updateColCardsId();
        default:
            return state;
    }
}

export {
    reducer,
    getInitVal
}