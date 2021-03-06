export const AddTodoAction = (todoId, title, description) => ({
  type: 'ADD_TODO',
  payload: {
    todoId,
    title,
    description
  }
});

export const RemoveTodoAcion = (todoId) => ({
  type: 'REMOVE_TODO',
  payload: {
    todoId
  }
});

export const EditTodoAcion = (todoId, title, description) => ({
  type: 'EDIT_TODO',
  payload: {
    todoId,
    title,
    description
  }
});

export const FetchInitialData = (data) => ({
  type: 'FETCH_SUCCEEDED',
  data
});
