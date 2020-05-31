import { put, takeLatest, all } from 'redux-saga/effects';
import { FetchInitialData } from '../redux/actions';

function* watchFetchInitial() {
  yield takeLatest('FETCH_INITIAL_DATA', initFech);
}

function* initFech() {
  try {
    const data = yield fetch(
      'https://jsonplaceholder.typicode.com/todos'
    ).then(
      res => res.json()
    ).then(
      res => res.filter(item => item.id <= 10)
    );

    yield put(FetchInitialData(data));
  } catch (e) {
    // yield put({ type: "FETCH_FAILED", message: e });
    console.log('err :D ', e);
  }
}

export default function* rootSaga() {
  yield all([
    watchFetchInitial()
  ])
}
