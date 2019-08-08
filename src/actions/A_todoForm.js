export const TODO_ADD = "TODO_ADD"
export const todoAdd = () => (dispatch, getState) => {

  dispatch({
    type: TODO_ADD,
    payload: {
      list: [
        {
          id: 501,
          name: 'I am from todo add Action'
        }
      ]
    }
  })
}