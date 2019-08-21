import axios from 'axios'

export const TODO_ADD = "TODO_ADD"
export const EDIT_PAGE = "EDIT_PAGE"
export const TODO_FROM_SERVER = "TODO_FROM_SERVER";

export const todoAdd = (prevState) => (dispatch, getState) => {
 
  dispatch({
    
    type: TODO_ADD,
    payload: {
      list: prevState,
      address:'I am address after dispatch',
      
    }
  })
}


export const todoFromServer = () => (dispatch, getState) => {
 
  axios.get('http://localhost:8000/api/todo').then(response => response.data)
  .then((data) => {
      
    dispatch({
    
      type: TODO_FROM_SERVER,
      payload: {
        todo_from_server: data,
        address:'I am address after dispatch',
        
      }
    })
    
   })
      
}




export const editPage = (editpage) => (dispatch, getState) => {
 
  dispatch({
    
    type: EDIT_PAGE,
    payload: {
      editpage:editpage
    }
  })
}