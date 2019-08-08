import { TODO_ADD } from '../actions/A_todoForm'

const initialState = {
    list: [
        {
            id: 1,
            name: 'I am from todo reducer of initial state'
        },
    ],
    address: 'todo initial'
}



const R_todo = (state = initialState, action) => {

    
    switch (action.type) {

        
        case TODO_ADD:
            console.log(action.payload.list);
            return Object.assign( {}, state, {
                list: action.payload.list,
                address:'Successful Example'
            })
    }

    return state
}

export default R_todo