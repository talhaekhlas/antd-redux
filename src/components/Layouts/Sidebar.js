import React, { Component } from 'react';
import { Layout, Menu, Icon,Form } from 'antd';
import {Link ,withRouter} from "react-router-dom";
import { connect } from 'react-redux'
import { roleList } from '../../actions/RolePermissionAction/RoleAction';
import { addRole } from '../../actions/RolePermissionAction/RoleAction';
import { userPermissionList } from '../../actions/RolePermissionAction/PermissionAction';

const { Sider } = Layout;
const { SubMenu } = Menu;

class Sidebar extends Component {

    componentDidMount(){
    
        const {dispatch } = this.props;
       
        dispatch(roleList());
        dispatch(userPermissionList());
      
     
      }


    state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    
    this.setState({ collapsed });
  };
    render() {
        const userPermissionList = this.props.permission.user_permission_list.data;
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
            
        );
    }
}




const mapStateToProps = state => ({
    role_info: state.roleReducer, 
    permission: state.permissionReducer, 
})

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(Sidebar);

export default withRouter(connect(mapStateToProps)(WrappedHorizontalLoginForm))