import { MODULE_LIST } from '../../actions/ModuleListAction/ModuleListAction'
import { USER_PERMISSION_LIST } from '../../actions/RolePermissionAction/PermissionAction'
import { PERMISSION_OF_ROLE } from '../../actions/RolePermissionAction/RolePermissionAction'
import { PERMISSION_SET } from '../../actions/RolePermissionAction/RolePermissionAction'


const initialState = {
    module_list: {
        message:"Initial Module",
        data:[]
    },
    
   

}

export const moduleListReducer = (state = initialState, action) => {
    switch (action.type) {

        case MODULE_LIST:
            return Object.assign( {}, state, {
                module_list: action.payload
            })

        
       
       
    }

    return state
}


export default moduleListReducer