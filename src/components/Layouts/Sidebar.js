import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import {Link } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

class Sidebar extends Component {
    state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    
    this.setState({ collapsed });
  };
    render() {
        return (

                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{marginTop:'-1px'}}>
                
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                        
                           <Link to="/private-route-example"><Icon type="pie-chart" />Private Route</Link>
                        </Menu.Item>

                        <SubMenu
                        key="role-permission"
                        title={
                            <span>
                            <Icon type="team" />
                            <span>Role-Permission</span>
                            </span>
                        }
                        >
                            <Menu.Item key="role">
                                <Link to="/role">Role</Link>
                            </Menu.Item>
                            
                            <Menu.Item key="permission">
                                <Link to="/permission">Permission</Link>
                            </Menu.Item>

                            <Menu.Item key="role-permission-setup">
                                <Link to="/role-permission-setup">Role Permission Setup</Link>
                            </Menu.Item>

                            <Menu.Item key="user-role-setup">
                                <Link to="/user-role-setup">User Role Setup</Link>
                            </Menu.Item>

                        </SubMenu>


                        <Menu.Item key="user-list">
                            <Link to="/user-list">
                                <Icon type="user" />
                                <span>User List</span>
                            </Link>
                            
                        </Menu.Item>
                        
                        
                        <Menu.Item key="9">
                        <Icon type="file" />
                        <span>File</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
            
        );
    }
}

export default Sidebar;