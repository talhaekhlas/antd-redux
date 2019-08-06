export const LOAD_CUSTOMER = "LOAD_CUSTOMER"

export const loadCustomer = () => (dispatch, getState) => {

  dispatch({
    type: LOAD_CUSTOMER,
    payload: {
      list: [
        {
          id: 201,
          name: 'Talha Ekhlas'
        }
      ]
    }
  })
}