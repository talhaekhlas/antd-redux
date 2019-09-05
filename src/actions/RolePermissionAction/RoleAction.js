import React from 'react';
import axios from 'axios'
export const ADD_ROLE = 'ADD_ROLE'
export const ROLE_LIST = 'ROLE_LIST'

export const roleList = () => async(dispatch, getState) => {

    const config = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
        };
    
       const bodyParameters = {
        'Content-Type': "application/json",
        'Accept': "application/json",
       }
     
    await axios.get('http://localhost:8000/api/role',config,bodyParameters).then(response => response.data)
    .then((data) => {

      console.log('from Role Action',data);
        
      dispatch({
      
        type: ROLE_LIST,
        payload: data,
        
      })
      
     })
   
  }




export const addRole = (formData,props) => (dispatch, getState) => {

    const config = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
        };
    
       const bodyParameters = {
        'Content-Type': "application/json",
        'Accept': "application/json",
       }
     
    axios.post('http://localhost:8000/api/role',formData,config,bodyParameters).then(response => response.data)
    .then((data) => {

      console.log('from Role Action',data);
        
      dispatch({
      
        type: ADD_ROLE,
        payload: data,
        
      })
      
     })
   
  }

  