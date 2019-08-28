import React from 'react';
import { Route,Redirect,withRouter } from "react-router-dom";
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {

    const loginCheck = rest.user.login_check

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


const mapStateToProps = state => ({
    user:state.userReducer,
    
    
})


export default withRouter(connect(mapStateToProps)(PrivateRoute))



