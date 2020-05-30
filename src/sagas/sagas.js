import { put , takeEvery, takeLatest , all } from 'redux-saga/effects';
import { Incrimentcounter } from '../redux/actions';
// import { FetchData } from '../redux/actions';


function* AddCounter() {
  console.log('hiiiiiiiiiiiiiiiiiiiiiiiii');
  yield put(Incrimentcounter);
}

function* FechFunc() {
  const data = yield fetch(
    // 'https://api.github.com/search/repositories?q=tetris+language:javascript&sort=stars&order=desc'
    'https://samples.openweathermap.org/data/2.5/forecast/daily?id=524901&appid=b1b15e88fa797225412429c1c50c122a1'
    ).then(
      res => res.json());
  yield put({
    type: "FETCH_ME",
    data
  });
}

function* watchFetch() {
  yield takeLatest('FETCH_ME',FechFunc);
}
function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', AddCounter);
}

export default function* rootSaga() {
  yield all(
    watchIncrementAsync(),
    watchFetch()
  )
}