import { USER_REGISTRATION } from '../../actions/UserRegistration/UserRegistrationAction'
import { LOGIN_CHECK } from '../../actions/UserRegistration/UserRegistrationAction'

const initialState = {
    user_info: {
        message:'before register',
        data:{
            name:'',
            email:''
        }

    },
    login_check:'no'

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
    }

    return state
}



export default userReducer