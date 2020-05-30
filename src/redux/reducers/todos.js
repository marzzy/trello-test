export default function (state = [] ,action) {
  switch (action.type) {
    case 'ADD_TODO': {
      const { todoId, text } = action.payload;

      return state.concat(
        {
          key: todoId,
          text: text,
          prtiority: 'no-priority'
        }
      )
    }
    case 'REMOVE_TODO': {
      const { todoId } = action.payload;

      return state.filter(item => item.key !== todoId)
    }
    case 'SET_PRIORITY': {
      const { todoId, priorityLevel } = action.payload;
      
      return state.map(item => {
        if (item.key === todoId) {
          return {
            ...item,
            prtiority: priorityLevel
          }
        } else {
          return item
        }
      })
    }
    default:
      return state;
  }
}