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

  export const loginCheck = (formData) => (dispatch, getState) => {

     axios.post('http://localhost:8000/api/loginTalha',formData).then(response => response.data)
    .then((data) => {


      if(data.token){
        
        localStorage.setItem('token',data.token)
        localStorage.setItem('username',data.user.name)
        localStorage.setItem('user_id',data.user.id)
        console.log('token set');
      }else{
        console.log('login response from userRegistrationAction',data);
      }

      
        
      dispatch({
      
        type: LOGIN_CHECK,
        payload: {
          'login_check': data,
        }
      })

     
      
      
      
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