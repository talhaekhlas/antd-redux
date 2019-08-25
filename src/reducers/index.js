import { combineReducers } from 'redux'

import customerReducer from './customerReducer'
import talhaReducer from './talhaReducer'
import R_todo from './R_todo'
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
  customerReducer,
  talhaReducer,
  R_todo,
  userReducer
})

export default rootReducer