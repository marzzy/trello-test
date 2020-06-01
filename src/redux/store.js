import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './reducers';
import rootSaga from '../sagas/sagas'

const sagaMiddleware = createSagaMiddleware();

// composeEnhancers place here for showing the details of changes on
// browser redux tab
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ; 

export default createStore(
  rootReducers,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);
