import axios from 'axios'
export const USER_REGISTRATION = 'USER_REGISTRATION'

export const userAdd = (formData) => (dispatch, getState) => {

    
    axios.post('http://localhost:8000/api/registerTalha',formData).then(response => response.data)
    .then((data) => {

        console.log('response after submit',data);
        
      dispatch({
      
        type: USER_REGISTRATION,
        payload: {
          user_info: data,
        }
      })
      
     })
        
  }