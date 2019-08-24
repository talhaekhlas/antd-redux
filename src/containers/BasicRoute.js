import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "../components/Layouts/Navbar";
import Home from '../components/Home'
import Todo from '../components/Todo'
import TodoServer from '../components/TodoServer'
import TableSpan from '../components/TableSpan'
import TodoEdit from '../components/TodoEdit'
import TodoEditServer from '../components/TodoEditServer'
import Layouts from '../components/Layouts/Layouts'
import Sidebar from '../components/common/Sidebar'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function BasicExample() {
  return (
    
    <Fragment> 
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/" component={TableSpan} /> */}
        {/* <Route exact path="/todo" component={Todo} /> */}
        <Route exact path="/todo" component={TodoServer} />
        {/* <Route exact path="/todo/:todoId" component={TodoEdit} /> */}
        <Route exact path="/todo/:todoId" component={TodoEditServer} />
        {/* <Route exact path="/user-registration" component={RegistrationForm} /> */} 
        
    </Fragment>
    
  );
}




export default BasicExample;