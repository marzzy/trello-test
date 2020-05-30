export default function (state = 'all', action) {
  switch (action.type) {
    case 'SET_FILTER': {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
}