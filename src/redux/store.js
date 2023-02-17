import {configureStore, combineReducers} from '@reduxjs/toolkit'
import questionsReducer from './questionsReducer'
import resultReducer from './resultReducer'



const rootReducer = combineReducers({
    questions: questionsReducer,
    result: resultReducer
})

// create store with reducer : 

export default configureStore({
    reducer: rootReducer
})