import { PERMISSION_LIST } from '../../actions/RolePermissionAction/PermissionAction'


const initialState = {
    permission_list: {
        message:"Initial Message of new role",
        data:[]
    },
   

}

export const permissionReducer = (state = initialState, action) => {
    switch (action.type) {

        case PERMISSION_LIST:
            return Object.assign( {}, state, {
                permission_list: action.payload
            })

       
       
    }

    return state
}


export default permissionReducer