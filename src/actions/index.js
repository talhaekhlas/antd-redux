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



export const loadTalha = () => (dispatch, getState) => {

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