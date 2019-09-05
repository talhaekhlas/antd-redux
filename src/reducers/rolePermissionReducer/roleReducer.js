import { ROLE_LIST } from '../../actions/RolePermissionAction/RoleAction'
import { ADD_ROLE } from '../../actions/RolePermissionAction/RoleAction'
import { DELETE_ROLE } from '../../actions/RolePermissionAction/RoleAction'


const initialState = {
    new_role: {
        message:"Initial Message of new role",
        data:[]
    },
    role_list:{
        message:'Initial Message of role list',
        data:[]
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

       
    }

    return state
}



export default roleReducer