import { PERMISSION_LIST } from '../../actions/RolePermissionAction/PermissionAction'
import { USER_PERMISSION_LIST } from '../../actions/RolePermissionAction/PermissionAction'
import { PERMISSION_OF_ROLE } from '../../actions/RolePermissionAction/RolePermissionAction'
import { PERMISSION_SET } from '../../actions/RolePermissionAction/RolePermissionAction'


const initialState = {
    permission_list: {
        message:"Initial Message of new role",
        data:[]
    },
    user_permission_list:{
        message:"Initial User permission list",
        data:[]
    },
    permission_of_role:{
        message:"initial permission of role",
        total:0,
        data:[]
    },
    permission_set:{
        message:'initial message of permission set'
    }
   

}

export const permissionReducer = (state = initialState, action) => {
    switch (action.type) {

        case PERMISSION_LIST:
            return Object.assign( {}, state, {
                permission_list: action.payload
            })

        case USER_PERMISSION_LIST:
            return Object.assign( {}, state, {
                user_permission_list: action.payload
            })

        case PERMISSION_OF_ROLE:
            return Object.assign( {}, state, {
                permission_of_role: action.payload
            })

        case PERMISSION_SET:
            return Object.assign( {}, state, {
                permission_set: action.payload
            })

            

       
       
    }

    return state
}


export default permissionReducer