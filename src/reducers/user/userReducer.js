import { USER_REGISTRATION } from '../../actions/UserRegistration/UserRegistrationAction'
import { LOGIN_CHECK } from '../../actions/UserRegistration/UserRegistrationAction'
import { DUPLICATE_CHECK } from '../../actions/UserRegistration/UserRegistrationAction'

const initialState = {
    user_info: {
        message:'before register',
        data:{
            name:'',
            email:''
        }

    },
    login_check:'no',
    duplicate_check:'no'

}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REGISTRATION:
            return Object.assign( {}, state, {
                user_info: action.payload
            })

        case LOGIN_CHECK:
            return Object.assign( {}, state, {
                login_check: action.payload.login_check
            })

        case DUPLICATE_CHECK:
            return Object.assign( {}, state, {
                duplicate_check: action.payload.duplicate_check
            })
    }

    return state
}



export default userReducer