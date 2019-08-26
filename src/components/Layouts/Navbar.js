import React from "react";
import {NavLink,withRouter } from "react-router-dom";

import { Menu, Icon } from "antd";

const { SubMenu } = Menu;

const Navbar= withRouter(
  ({ history })=> {

  console.log('props at navbar',history);

  const logout = ()=>{
    localStorage.removeItem('token')
    history.push("/")
  }
  return (
    <Menu
    
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="mail">
        <NavLink to="/"><Icon type="home" />Home</NavLink>
      </Menu.Item>

      <Menu.Item key="app">
        <NavLink to="/todo"><Icon type="unordered-list" />Todo</NavLink>
      </Menu.Item>
      {localStorage.getItem('token')?<SubMenu style={{float: 'right'}}
        title={
          <span className="submenu-title-wrapper">
            
            Test Name
          </span>
        }
      >
        
        <Menu.Item key="setting:1" onClick={()=>logout()}><Icon type="login" /> Logout</Menu.Item>
          
       
        
        </SubMenu>:<Menu.Item key="login" style={{float: 'right'}} >
        <NavLink to="/login"><Icon type="unordered-list" />Login</NavLink>
      </Menu.Item>}

      

      <Menu.Item key="register" style={{float: 'right'}} >
        <NavLink to="/register"><Icon type="unordered-list" />Register</NavLink>
      </Menu.Item>
      
    </Menu>
  );
})

export default Navbar;
