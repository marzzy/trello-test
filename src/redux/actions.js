let todoId = 0

export const AddTodoAction = (text) => ({
  type: 'ADD_TODO',
  payload: {
    todoId: ++todoId,
    text
  }
});

export const RemoveTodoAcion = (todoId) => ({
  type: 'REMOVE_TODO',
  payload: {
    todoId
  }
});

export const SetPriorityAction = (todoId,priorityLevel) => ({
  type: 'SET_PRIORITY',
  payload: {
    todoId,
    priorityLevel
  }
});

export const SetVisibilityFilter = (filter) => ({
  type: 'SET_FILTER',
  payload: {
    filter
  }
});

export const Incrimentcounter = () => ({
  type: 'INCREMENT'
});

export const FetchData = (data) => ({
  type: 'FETCH_ME',
  data
});