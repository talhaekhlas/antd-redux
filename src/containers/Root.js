import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import BasicRoute from './BasicRoute'
import Layouts from '../components/Layouts/Layouts'

// import AsyncApp from './AsyncApp'

import Home from '../components/Home'
import TodoForm from '../components/TodoForm';

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