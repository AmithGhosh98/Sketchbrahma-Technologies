import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import MainReducer from './reducer'
import MainSaga from './saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    MainReducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(MainSaga)


export default store;