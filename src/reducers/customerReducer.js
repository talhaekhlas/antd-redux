import { LOAD_CUSTOMER } from '../actions'

const initialState = {
    list: [
        {
            id: 1,
            name: 'Sadik'
        },
    ],
    address: 'Dhaka'
}

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CUSTOMER:
            return Object.assign( {}, state, {
                list: action.payload.list
            })
    }

    return state
}

export default customerReducer