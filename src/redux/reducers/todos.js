import { addTodo, removeTodo, editTodo, fetchTodo } from './helpers';

export default function (state = [] ,action) {
  switch (action.type) {
    case 'ADD_TODO':
      return addTodo(state, action);

    case 'REMOVE_TODO': 
      return removeTodo(state, action);

    case 'EDIT_TODO':
      return editTodo(state, action);

    case 'FETCH_SUCCEEDED':
      return fetchTodo(state, action);

    default:
      return state;
  }
}
