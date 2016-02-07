import { combineReducers } from 'redux'
import objectives from './objectives'
import ptool from './ptool'

const rootReducer = combineReducers({
  ptool,
  objectives
})

export default rootReducer
