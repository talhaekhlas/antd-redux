import React from 'react';
import axios from 'axios'
export const MODULE_LIST = 'MODULE_LIST'



export const moduleList = () => async(dispatch, getState) => {

   
      const data = {
          message:'module after dispatch',
          data:[
              {'name':'Todo','id':1},
              {'name':'Shopping','id':2},
              {'name':'Contact','id':3},
              {'name':'Account','id':4},
              {'name':'Health','id':5},
              {'name':'Family','id':6},
            ]
      };
      dispatch({
      
        type: MODULE_LIST,
        payload: data,
        
      })
    
   
  }

