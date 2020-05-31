export default function (state = [] ,action) {
  switch (action.type) {
    case 'ADD_TODO': {
      const { todoId, title, description } = action.payload;

      return state.concat(
        {
          key: todoId,
          title,
          description,
        }
      )
    }
    case 'REMOVE_TODO': {
      const { todoId } = action.payload;

      return state.filter(item => item.key !== todoId)
    }
    case 'EDIT_TODO': {
      const { todoId, title, description } = action.payload;
      const itemIndex = state.findIndex(item => item.key === todoId);

      return [
        ...state.slice(0, itemIndex),
        { key: todoId, title, description},
        ...state.slice(itemIndex)
      ]
    }
    case 'FETCH_SUCCEEDED': {
      const normalizedData = normalizeData(action.data);
      return normalizedData;
    }

    default:
      return state;
  }
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
