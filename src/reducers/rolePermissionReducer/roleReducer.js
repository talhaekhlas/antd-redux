import { ADD_ROLE } from '../../actions/RolePermissionAction/RoleAction'
import { ROLE_LIST } from '../../actions/RolePermissionAction/RoleAction'
import { LOGIN_CHECK } from '../../actions/UserRegistration/UserRegistrationAction'
import { DUPLICATE_CHECK } from '../../actions/UserRegistration/UserRegistrationAction'

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
        case ADD_ROLE:
            return Object.assign( {}, state, {
                new_role: action.payload
            })

        case ROLE_LIST:
            return Object.assign( {}, state, {
                role_list: action.payload
            })

        case DUPLICATE_CHECK:
            return Object.assign( {}, state, {
                duplicate_check: action.payload.duplicate_check
            })
    }

    return state
}



export default roleReducer