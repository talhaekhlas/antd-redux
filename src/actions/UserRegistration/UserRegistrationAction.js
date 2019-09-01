import React from 'react';
import axios from 'axios'
export const USER_REGISTRATION = 'USER_REGISTRATION'
export const LOGIN_CHECK = 'LOGIN_CHECK'
export const DUPLICATE_CHECK = 'DUPLICATE_CHECK'

export const userAdd = (formData,props) => (dispatch, getState) => {

    
    axios.post('http://localhost:8000/api/registerTalha',formData).then(response => response.data)
    .then((data) => {

      console.log('user after submit userRegistrationAction',data);
        
      dispatch({
      
        type: USER_REGISTRATION,
        payload: {
          user_info: data,
        }
      })
      
     })

     props.history.push('/login')

     console.log('userRegistrationAction',props);

   
  }

  export const loginCheck = (value) => (dispatch, getState) => {

      dispatch({
      
        type: LOGIN_CHECK,
        payload: {
          'login_check': value,
        }
      })
      
     
        
  }


  export const duplicateCheck = (value,callback) => (dispatch, getState) => {

    

     axios.get('http://localhost:8000/api/duplicateCheck?email='+value).then(response => response.data)
    .then(  (data) => {

     
      
       dispatch({
      
        type: DUPLICATE_CHECK,
        payload: {
          duplicate_check: data,
        }
      })


      if (data ==='duplicate') {
        callback('Email Should be unique');
      } else {
        callback();
      }

     
      
     })

    
      
}