import React, { Fragment,Component } from "react";
import { BrowserRouter as Router, Route, Link,Redirect,withRouter } from "react-router-dom";
import Home from '../components/Home'
import TodoServer from '../components/TodoServer'
import TodoEditServer from '../components/TodoEditServer'
import RegistrationForm from '../components/RegistrationForm/RegistrationForm'
import LoginForm from '../components/RegistrationForm/LoginForm'
import PrivateRouteExample from '../components/PrivateRouteExample/PrivateRouteExample'

function BasicExample() {
  return (
    
    <Fragment>
        <AuthButton />
        <Route exact path="/" component={Home} />
        <Route exact path="/todo" component={TodoServer} />
        <Route exact path="/todo/:todoId" component={TodoEditServer} />
        <Route exact path="/register" component={RegistrationForm} />
        {/* <Route exact path="/login" component={LoginForm} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/private-route-example" component={PrivateRouteExample} />
        <PrivateRoute path="/todo" component={Protected} />
    </Fragment>
    
  );
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
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


const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); 
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};


class Login extends Component {
  state = { redirectToReferrer: false };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}



const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);



function Protected() {
  return <h3>Protected</h3>;
}




export default BasicExample;