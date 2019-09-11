import { ROLE_LIST } from '../../actions/RolePermissionAction/RoleAction'
import { ADD_ROLE } from '../../actions/RolePermissionAction/RoleAction'
import { DELETE_ROLE } from '../../actions/RolePermissionAction/RoleAction'

import { ROLE_OF_USER, ROLE_SET } from '../../actions/RolePermissionAction/RolePermissionAction'


const initialState = {
    new_role: {
        message:"Initial Message of new role",
        data:[]
    },
    role_list:{
        message:'Initial Message of role list',
        data:[]
    },
    role_of_user:{
        message:"initial role of user",
        total:0,
        data:[]
    },
    role_set:{
        message:'initial role set'
    }

}

export const roleReducer = (state = initialState, action) => {
    switch (action.type) {

        case ROLE_LIST:
            return Object.assign( {}, state, {
                role_list: action.payload
            })

        case ADD_ROLE:
            return Object.assign( {}, state, {
                new_role: action.payload
            })
            
        case DELETE_ROLE:
            return Object.assign( {}, state, {
                role_list: action.payload
            })
            
        case ROLE_OF_USER:
            return Object.assign( {}, state, {
                role_of_user: action.payload
            })

        case ROLE_SET:
            return Object.assign( {}, state, {
                role_set: action.payload
            })

       
    }

    return state
}



export default roleReducer