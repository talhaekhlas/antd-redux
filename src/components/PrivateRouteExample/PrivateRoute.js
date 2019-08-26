import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link,Redirect,withRouter } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {

    const checkLocalStorage = localStorage.getItem('token')

    return (

      

      <Route
        {...rest}
        render={props =>
            checkLocalStorage ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute;

