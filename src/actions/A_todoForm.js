export const TODO_ADD = "TODO_ADD"
export const EDIT_PAGE = "EDIT_PAGE"
export const todoAdd = (prevState) => (dispatch, getState) => {
 
  dispatch({
    
    type: TODO_ADD,
    payload: {
      list: prevState,
      address:'I am address after dispatch',
      
    }
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