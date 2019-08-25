import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../components/Home'
import TodoServer from '../components/TodoServer'
import TodoEditServer from '../components/TodoEditServer'
import RegistrationForm from '../components/RegistrationForm/RegistrationForm'
import LoginForm from '../components/RegistrationForm/LoginForm'

function BasicExample() {
  return (
    
    <Fragment> 
        <Route exact path="/" component={Home} />
        <Route exact path="/todo" component={TodoServer} />
        <Route exact path="/todo/:todoId" component={TodoEditServer} />
        <Route exact path="/register" component={RegistrationForm} />
        <Route exact path="/login" component={LoginForm} />
    </Fragment>
    
  );
}




export default BasicExample;