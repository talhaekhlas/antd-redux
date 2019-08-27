import React from 'react';
import { Route,Redirect } from "react-router-dom";
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {

    const loginCheck = rest.user.login_check

    return (

      

      <Route
        {...rest}
        render={props =>
          loginCheck==='yes' ? (
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


export default connect(mapStateToProps)(PrivateRoute)



