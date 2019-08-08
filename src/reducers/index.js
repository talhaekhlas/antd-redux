import { combineReducers } from 'redux'

import customerReducer from './customerReducer'
import talhaReducer from './talhaReducer'
import R_todo from './R_todo'

const rootReducer = combineReducers({
  customerReducer,
  talhaReducer,
  R_todo
})

export default rootReducer