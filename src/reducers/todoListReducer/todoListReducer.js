import { TODO_LIST } from '../../actions/TodoListAction/TodoListAction'
import { USER_PERMISSION_LIST } from '../../actions/RolePermissionAction/PermissionAction'
import { PERMISSION_OF_ROLE } from '../../actions/RolePermissionAction/RolePermissionAction'
import { PERMISSION_SET } from '../../actions/RolePermissionAction/RolePermissionAction'


const initialState = {
    todo_list: {
        message:"Initial Todo",
        data:[]
    },
    
   

}

export const todoListReducer = (state = initialState, action) => {
    switch (action.type) {

        case TODO_LIST:
            return Object.assign( {}, state, {
                todo_list: action.payload
            })

        
       
       
    }

    return state
}


export default todoListReducer