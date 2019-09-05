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
                        <Menu.Item key="role"><Link to="/role">Role</Link></Menu.Item>
                        <Menu.Item key="permission"><Link to="/permission">Permission</Link></Menu.Item>
                        </SubMenu>


                        <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>Option 2</span>
                        </Menu.Item>
                        <SubMenu
                        key="sub1"
                        title={
                            <span>
                            <Icon type="user" />
                            <span>User</span>
                            </span>
                        }
                        >
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu
                        key="sub2"
                        title={
                            <span>
                            <Icon type="team" />
                            <span>Team</span>
                            </span>
                        }
                        >
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
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