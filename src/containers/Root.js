import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'

// import AsyncApp from './AsyncApp'

import Home from '../components/Home'
import TodoForm from '../components/TodoForm';

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <Home/> */}
        <TodoForm/>
      </Provider>
    )
  }
}