import { LOAD_TALHA } from '../actions'

const initialState = {
    list: [
        {
            id: 1,
            name: 'I am from talha reducer'
        },
    ],
    address: 'Mirpur Dohs'
}

const talhaReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_TALHA:
            return Object.assign( {}, state, {
                list: action.payload.list
            })
    }

    return state
}

export default talhaReducer