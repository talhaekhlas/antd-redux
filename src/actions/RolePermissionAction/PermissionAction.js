import React from 'react';
import axios from 'axios'
export const PERMISSION_LIST = 'PERMISSION_LIST'
export const USER_PERMISSION_LIST = 'USER_PERMISSION_LIST'



export const permissionList = () => async(dispatch, getState) => {

    const config = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
        };
    
       const bodyParameters = {
        'Content-Type': "application/json",
        'Accept': "application/json",
       }
     
    await axios.get('http://localhost:8000/api/permission',config,bodyParameters).then(response => response.data)
    .then((data) => {

      console.log('from Permission Action',data);
        
      dispatch({
      
        type: PERMISSION_LIST,
        payload: data,
        
      })
      
     })
   
  }





  export const userPermissionList = () => async(dispatch, getState) => {

    const config = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
        };
    
       const bodyParameters = {
        'Content-Type': "application/json",
        'Accept': "application/json",
       }
     
    await axios.get('http://localhost:8000/api/userPermissionList',config,bodyParameters).then(response => response.data)
    .then((data) => {
  
      dispatch({
      
        type: USER_PERMISSION_LIST,
        payload: data,
        
      })
      
     })
   
  }
