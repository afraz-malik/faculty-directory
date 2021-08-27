import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'

import { FacultyReducer } from './reducer.js'
import { userReducer } from './user/user.reducer.js'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root.sagas.js'
const sagaMiddleware = createSagaMiddleware()

const rootReducers = combineReducers({ FacultyReducer, userReducer })

const logger = createLogger()
const middleWares = [logger, sagaMiddleware]

export const store = createStore(rootReducers, applyMiddleware(...middleWares))
sagaMiddleware.run(rootSaga)
