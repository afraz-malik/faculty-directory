import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { persistStore } from 'redux-persist'
import { persistReducer } from 'redux-persist'

import { FacultyReducer } from './reducer.js'
import { userReducer } from './user/user.reducer.js'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root.sagas.js'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userReducer'],
}
const rootReducers = combineReducers({
  FacultyReducer,
  userReducer,
})
const pReducer = persistReducer(persistConfig, rootReducers)

const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()
const middleWares = [logger, sagaMiddleware]

export const store = createStore(pReducer, applyMiddleware(...middleWares))
sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
