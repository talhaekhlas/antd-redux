export const LOAD_CUSTOMER = "LOAD_CUSTOMER"

export const LOAD_TALHA = "LOAD_TALHA"

export const loadCustomer = () => (dispatch, getState) => {

  dispatch({
    type: LOAD_CUSTOMER,
    payload: {
      list: [
        {
          id: 201,
          name: 'Talha Ekhlas Sadek'
        }
      ]
    }
  })
}


//please explain what is this
export const loadTalha = () => async (dispatch, getState) => {
  
  const abc = getState().talhaReducer

 await dispatch({
    type: 'ABC',
    payload: {
      sadik: abc
    }
  })

  dispatch({
    type: LOAD_TALHA,
    payload: {
      list: [
        {
          id: 205,
          name: 'From talha reducer after click'
        },
        {
          id: 206,
          name: 'From talha reducer after click'
        }
      ]
    }
  })
}