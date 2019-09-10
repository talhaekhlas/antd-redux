import React from 'react';
import axios from 'axios'
export const PERMISSION_OF_ROLE = 'PERMISSION_OF_ROLE'
export const PERMISSION_SET = 'PERMISSION_SET'



export const  permissionOfRole = (roleId) => async(dispatch, getState) => {

    const config = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
        };
    
       const bodyParameters = {
        'Content-Type': "application/json",
        'Accept': "application/json",
       }
     
    await axios.get('http://localhost:8000/api/permissionOfRole/'+roleId,config,bodyParameters).then(response => response.data)
    .then((data) => {
        
      dispatch({
      
        type: PERMISSION_OF_ROLE,
        payload: data,
        
      })
      
     })
   
  }


  export const  permissionSet = (RoleAndPermission) => async(dispatch, getState) => {

    const config = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
        };
    
       const bodyParameters = {
        'Content-Type': "application/json",
        'Accept': "application/json",
       }
     
    await axios.post('http://localhost:8000/api/permissionSet/',RoleAndPermission,config,bodyParameters).then(response => response.data)
    .then((data) => {
        
      dispatch({
      
        type: PERMISSION_SET,
        payload: data,
        
      })
      
     })
   
  }






  