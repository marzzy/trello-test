export default function (state = {}, action) {
  console.log('action ================> ', action)
  switch (action.type) {
    case 'FETCH_ME': {
      return {data: action.data};
    }
    default: {
      return state;
    }
  }
}