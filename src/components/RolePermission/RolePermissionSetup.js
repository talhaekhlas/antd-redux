import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Form, Icon, Input, Button,Row, Col,Table,Select } from 'antd';
import {Link,withRouter } from "react-router-dom";
import { roleList } from '../../actions/RolePermissionAction/RoleAction';
import { permissionList } from '../../actions/RolePermissionAction/PermissionAction';
import { permissionOfRole } from '../../actions/RolePermissionAction/RolePermissionAction';
import { permissionSet } from '../../actions/RolePermissionAction/RolePermissionAction';
import { userPermissionList } from '../../actions/RolePermissionAction/PermissionAction';


class RolePermissionSetup extends Component {


    componentDidMount(){
        const {dispatch } = this.props;
        
        dispatch(roleList());
        dispatch(permissionList());
        
      }

    roleChange=async(roleId)=>{

        const {dispatch } = this.props;
        
        await dispatch(permissionOfRole(roleId));

        const permission_of_role = this.props.permission.permission_of_role.data;

        this.props.form.setFieldsValue({
            permission:permission_of_role
        })
       
    }

    permissionChange=async(value)=>{

        const {dispatch } = this.props;
        const roleId = this.props.form.getFieldValue('role');
        const RoleAndPermission = {
            roleId:roleId,
            permission:value
        }
        await dispatch(permissionSet(RoleAndPermission));

        dispatch(userPermissionList());

        
    }


  

    render() {
        const permission_list = this.props.permission.permission_list;
        const role_list = this.props.role_list;
        const permission_of_role = this.props.permission.permission_of_role.data;
        const permission_set_message = this.props.permission.permission_set.message;
        const { Option } = Select;

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


        
        const { getFieldDecorator } = this.props.form;
        return (
            <div>

         <Form {...formItemLayout}>
            <Row >
                <Col span={12} offset={6}>
               
                <Form.Item label="Role">
                {getFieldDecorator('role', {
                    rules: [
                   
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                    ],
                })(<Select 
                showSearch 
                style={{ width: '100%' }} 
                placeholder="Select Role"  
                onChange={this.roleChange}>

                {role_list.data.map(item => (
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
               
                <Form.Item label='Permission'>
                {getFieldDecorator('permission', {
                    
                    // initialValue:permission_of_role,
                    rules: [
                   
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                        
                    },
                    
                    ],
                })(<Select
                    mode="multiple"
                    
                    placeholder="Inserted are removed"
                    
                    onChange={this.permissionChange}
                    style={{ width: '100%' }}
                >
                {permission_list.data.map(item => (
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
    role_list: state.roleReducer.role_list, 
    permission: state.permissionReducer,
})

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(RolePermissionSetup);
export default withRouter(connect(mapStateToProps)(WrappedHorizontalLoginForm))
