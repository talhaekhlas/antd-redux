import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import configureStore from '../configureStore'

import Layouts from '../components/Layouts/Layouts'


const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>

        <Router>
          
          <Layouts/>

         

        </Router>
       
        
      </Provider>
    )
  }
}