import { TODO_ADD } from '../actions/A_todoForm'
import { EDIT_PAGE } from '../actions/A_todoForm'
import { TODO_FROM_SERVER } from '../actions/A_todoForm'
import axios from 'axios'


let hamba = axios.get('http://jsonplaceholder.typicode.com/todos').then(response => response.data)
.then((data) => {

    
 })

 console.log('check',hamba);

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
    name: 'Sadik',
    address: 'todo initial',
    editpage:'no',
    todo_from_server: {
        data: []
    }
    
   
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

        case TODO_FROM_SERVER:
            
            return Object.assign( {}, state, {
                todo_from_server: action.payload.todo_from_server,
                
            })
    }

    return state
}




export default R_todo