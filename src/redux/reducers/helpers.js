function addTodo(state, action) {
    const { todoId, title, description } = action.payload;
    const newState = [
        ...state,
        {
            key: todoId,
            title,
            description,
        }];

    localStorage.setItem('cardData', JSON.stringify(newState));
    return newState;
}

function removeTodo(state, action) {
    const { todoId } = action.payload;
    const newState = state.filter(item => item.key !== todoId);

    localStorage.setItem('cardData', JSON.stringify(newState));
    return newState;
}

function editTodo(state, action) {
    const { todoId, title, description } = action.payload;
    const itemIndex = state.findIndex(item => item.key === todoId);
    const newState = [
        ...state.slice(0, itemIndex),
        { key: todoId, title, description },
        ...state.slice(itemIndex)
    ]
    
    localStorage.setItem('cardData', JSON.stringify(newState));
    return newState;
}

function fetchTodo(state, action) {
    const localCardDataBased = localStorage.getItem('cardData');

    if (localCardDataBased) {
        return JSON.parse(localCardDataBased);
    }
    return normalizeData(action.data);
}

function normalizeData(data) {
    return data.map(dataItem => {
        return {
            key: dataItem.id,
            title: dataItem.title,
            description: dataItem.description || ''
        }
    })
}

export {
    addTodo,
    removeTodo,
    editTodo,
    fetchTodo
}