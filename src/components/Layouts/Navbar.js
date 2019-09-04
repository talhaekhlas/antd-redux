import React from "react";
import {NavLink,withRouter } from "react-router-dom";
import { connect } from 'react-redux'


import { Menu, Icon } from "antd";

const { SubMenu } = Menu;

const Navbar= withRouter(
  ({ history,user,dispatch })=> {

    console.log('user state from Navbar',user.login_check);
  
  const localStorageCheck = localStorage.getItem('token')
  const logout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('user_id')
    // dispatch(loginCheck('no'));
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
      {localStorageCheck?<SubMenu style={{float: 'right'}}
        title={
          <span className="submenu-title-wrapper">
            
            {localStorage.getItem('username')}
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


const mapStateToProps = state => ({
  user:state.userReducer
  
})


export default connect(mapStateToProps)(Navbar)


