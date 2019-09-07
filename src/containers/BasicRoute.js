import React, { Fragment } from "react";
import {Route } from "react-router-dom";
import Home from '../components/Home'
import TodoServer from '../components/TodoServer'
import Role from '../components/RolePermission/Role'
import Permission from '../components/RolePermission/Permission'
import RolePermissionSetup from '../components/RolePermission/RolePermissionSetup'
import UserList from '../components/UserInfo/UserList'
import RegistrationForm from '../components/RegistrationForm/RegistrationForm'
import LoginForm from '../components/RegistrationForm/LoginForm'
import PrivateRouteExample from '../components/PrivateRouteExample/PrivateRouteExample'
import PrivateRoute from '../components/PrivateRouteExample/PrivateRoute'

function BasicExample() {
  return (
    
    <Fragment>
        {/* <AuthButton /> */}
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/todo" component={TodoServer} /> */}
        {/* <Route exact path="/todo/:todoId" component={TodoEditServer} /> */}
        <Route exact path="/register" component={RegistrationForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/private-route-example" component={PrivateRouteExample} />
        <PrivateRoute exact path="/todo" component={TodoServer} />
        <PrivateRoute exact path="/role" component={Role} />
        <PrivateRoute exact path="/permission" component={Permission} />
        <PrivateRoute exact path="/user-list" component={UserList} />
        <PrivateRoute exact path="/role-permission-setup" component={RolePermissionSetup} />
    </Fragment>
    
  );
}



export default BasicExample;