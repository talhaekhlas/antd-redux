import { combineReducers } from 'redux'

import customerReducer from './customerReducer'
import talhaReducer from './talhaReducer'
import R_todo from './R_todo'
import userReducer from './user/userReducer';
import roleReducer from './rolePermissionReducer/roleReducer';
import permissionReducer from './rolePermissionReducer/permissionReducer';
import moduleListReducer from './moduleListReducer/moduleListReducer';
import todoListReducer from './todoListReducer/todoListReducer';


const rootReducer = combineReducers({
  customerReducer,
  talhaReducer,
  R_todo,
  userReducer,
  roleReducer,
  permissionReducer,
  moduleListReducer,
  todoListReducer
})

export default rootReducer