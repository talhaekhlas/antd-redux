import React from "react";
import {NavLink } from "react-router-dom";

import { Menu, Icon } from "antd";

const { SubMenu } = Menu;

function Navbar() {
  return (
    <Menu
    //   onClick={this.handleClick}
    //   selectedKeys={[this.state.current]}
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
            <Icon type="login" />
            Login
          </span>
        }
      >
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
        </SubMenu>:null}

      <Menu.Item key="login" style={{float: 'right'}} >
        <NavLink to="/login"><Icon type="unordered-list" />Login</NavLink>
      </Menu.Item>

      <Menu.Item key="register" style={{float: 'right'}} >
        <NavLink to="/register"><Icon type="unordered-list" />Register</NavLink>
      </Menu.Item>
      
    </Menu>
  );
}

export default Navbar;
