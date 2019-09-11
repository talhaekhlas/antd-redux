import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Form,Row, Col,Select } from 'antd';
import {withRouter } from "react-router-dom";
import { userList } from '../../actions/UserRegistration/UserListAction';
import { roleList } from '../../actions/RolePermissionAction/RoleAction';
import { roleOfUser } from '../../actions/RolePermissionAction/RolePermissionAction';
import { roleSet } from '../../actions/RolePermissionAction/RolePermissionAction';


class UserRoleSetup extends Component {


    componentDidMount(){
        const {dispatch } = this.props;
        dispatch(userList());
        dispatch(roleList());
      }



    userChange=async(userId)=>{

        const {dispatch } = this.props;
        
        await dispatch(roleOfUser(userId));

        const role_of_user = this.props.role.role_of_user.data;

        this.props.form.setFieldsValue({
            role:role_of_user
        })
       
    }

    roleChange=async(value)=>{

        const {dispatch } = this.props;
        const userId = this.props.form.getFieldValue('user');
        const UserAndRole = {
            userId:userId,
            role:value
        }
        await dispatch(roleSet(UserAndRole));

        
    }

    render() {

        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 4 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 20 },
            },
          };
        
        const role_list = this.props.role.role_list.data;
        const { Option } = Select;
        const user_list = this.props.user.user_list.data;

        const { getFieldDecorator } = this.props.form;
        return (
            <div>

         <Form {...formItemLayout}>
            <Row >
                <Col span={12} offset={6}>
               
                <Form.Item label="User List">
                {getFieldDecorator('user', {
                    rules: [
                   
                    {
                        required: true,
                        message: 'Please Select User',
                    },
                    ],
                })(<Select 
                showSearch 
                style={{ width: '100%' }} 
                placeholder="Select User"  
                onChange={this.userChange}>

                {user_list.map(item => (
                  <Select.Option key={item.id} value={item.id}>
                      {item.name}
                  </Select.Option>
                  ))}
              </Select>)}
                </Form.Item>
                </Col>
             </Row>

             <Row >
                <Col span={12} offset={6}>
               
                <Form.Item label='Role'>
                {getFieldDecorator('role', {
                    rules: [
                   
                    {
                        required: true,
                        message: 'Please Select Role',
                        
                    },
                    
                    ],
                })(<Select
                    mode="multiple"
                    
                    placeholder="Select Role"
                    
                    onChange={this.roleChange}
                    style={{ width: '100%' }}
                >
                {role_list.map(item => (
                <Select.Option key={item.id} value={item.id}>
                    {item.name}
                </Select.Option>
                ))}
                </Select>)}
                </Form.Item>
                </Col>
             </Row>

            
             </Form>
             
            </div>
        );
    }
}

const mapStateToProps = state => ({
    role: state.roleReducer, 
    permission: state.permissionReducer,
    user: state.userReducer,
})

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(UserRoleSetup);
export default withRouter(connect(mapStateToProps)(WrappedHorizontalLoginForm))
