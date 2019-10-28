import React , { Fragment } from "react";
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Layout, Menu, Icon,Avatar, Breadcrumb } from 'antd';


import {Link,withRouter } from "react-router-dom";
import { connect } from 'react-redux'

import BasicRoute from '../../containers/BasicRoute'
import { roleList } from '../../actions/RolePermissionAction/RoleAction';
import { addRole } from '../../actions/RolePermissionAction/RoleAction';
import { userPermissionList } from '../../actions/RolePermissionAction/PermissionAction';
import 'antd/dist/antd.css';
import userImage from '../../test/images/pic01.jpg';
const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

class Layouts extends React.Component {

    componentDidMount(){
    
        const {dispatch } = this.props;
       
        dispatch(roleList());
        dispatch(userPermissionList());
      
     
      }
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const userPermissionList = this.props.permission.user_permission_list.data;
    return (
        <Fragment>

      <Navbar/>
      <Layout>
      {/* <Sidebar/> */}
       
        
    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
         
          
          
          
      <Avatar src={userImage} size={50} shape="square" style={{margin:"15px"}} icon="user" />
      
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                        
                           <Link to="/private-route-example"><Icon type="pie-chart" /><span>Private Route</span></Link>
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


                        {userPermissionList.includes("user-list")?<Menu.Item key="user-list">
                            <Link to="/user-list">
                                <Icon type="user" />
                                <span>User List</span>
                            </Link>
                            
                        </Menu.Item>:null }

                        <SubMenu
                        key="virtunus"
                        title={
                            <span>
                            <Icon type="team" />
                            <span>Virtunus</span>
                            </span>
                        }
                        >
                            <Menu.Item key="role">
                                <Link to="/homepage">Homepage</Link>
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


                        {userPermissionList.includes("user-list")?<Menu.Item key="user-list">
                            <Link to="/user-list">
                                <Icon type="user" />
                                <span>User List</span>
                            </Link>
                            
                        </Menu.Item>:null }


                        
                        
                        
                        <Menu.Item key="9">
                        <Icon type="file" />
                        <span>File</span>
                        </Menu.Item>
                    </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '0 16px', }}>
            <Breadcrumb style={{ margin: '16px' }}>
             
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 490 }}>
            <BasicRoute/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}><b>Todo App ©2018 Developed by Ant UED</b> </Footer>
        </Layout>
      </Layout>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  
    user_info:state.userReducer,
    role_info: state.roleReducer, 
    permission: state.permissionReducer,
    
  }) 
  
  
  export default withRouter(connect(mapStateToProps)(Layouts))