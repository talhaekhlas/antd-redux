import { combineReducers } from 'redux'

import customerReducer from './customerReducer'
import talhaReducer from './talhaReducer'

const rootReducer = combineReducers({
  customerReducer,
  talhaReducer
})

export default rootReducer