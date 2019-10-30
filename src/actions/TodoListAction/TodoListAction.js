import React from 'react';
import axios from 'axios'
export const TODO_LIST = 'TODO_LIST'



export const todoList = () => async(dispatch, getState) => {

   
      const data = {
          message:'module after dispatch',
          data:[
              {'name':'List One','id':1,'project_id':1},
              {'name':'List Two','id':2,'project_id':1},
              {'name':'List Three','id':3,'project_id':1},
              {'name':'List Four','id':4,'project_id':1},
              {'name':'List Five','id':5,'project_id':1},
              {'name':'List Six','id':6,'project_id':1},
            ]
      };
      dispatch({
      
        type: TODO_LIST,
        payload: data,
        
      })
    
   
  }

