import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'

import { FacultyReducer } from './reducer.js'

const rootReducers = combineReducers({ FacultyReducer })

const logger = createLogger()

export const store = createStore(rootReducers, applyMiddleware(logger))
