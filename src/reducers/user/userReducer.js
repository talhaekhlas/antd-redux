import { USER_REGISTRATION } from '../../actions/UserRegistration/UserRegistrationAction'

const initialState = {
    user_info: {
        message:'before register',
        data:{
            name:'',
            email:''
        }

    }

}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REGISTRATION:
            return Object.assign( {}, state, {
                user_info: action.payload
            })
    }

    return state
}

export default userReducer