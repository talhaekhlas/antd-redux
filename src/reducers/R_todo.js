import { TODO_ADD } from '../actions/A_todoForm'
import { EDIT_PAGE } from '../actions/A_todoForm'

const initialState = {
    list: [
        {
            id: 1,
            name: 'I am from todo reducer of initial state'
        },
        {
            id: 2,
            name: 'todo number two'
        },
    ],
    address: 'todo initial',
    editpage:'no'
}



const R_todo = (state = initialState, action) => {

    
    switch (action.type) {

        
        case TODO_ADD:
            console.log(action.payload.list);
            return Object.assign( {}, state, {
                list: action.payload.list,
                address:action.payload.address
            })

            case EDIT_PAGE:
                console.log(action.payload.list);
                return Object.assign( {}, state, {
                    
                    editpage:action.payload.editpage
                })
    }

    return state
}




export default R_todo