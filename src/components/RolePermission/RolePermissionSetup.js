import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Form, Icon, Input, Button,Row, Col,Table,Select } from 'antd';
import {Link,withRouter } from "react-router-dom";
import { roleList } from '../../actions/RolePermissionAction/RoleAction';
import { permissionList } from '../../actions/RolePermissionAction/PermissionAction';

const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
// const OPTIONS_TALHA = [
//     {id:1,name:'talha'},
//     {id:2,name:'minoti'},
//     {id:3,name:'mishkat'},
// ];

class RolePermissionSetup extends Component {


    state = {
        selectedItems: [],
        selectedItems_TALHA:[],
        OPTIONS_TALHA:[
            {id:1,name:'talha'},
            {id:2,name:'minoti'},
            {id:3,name:'mishkat'},
        ],
        CUSTOM_SELECTED_ITEM:[
            {id:1,name:'talha'},
            {id:2,name:'minoti'},
            
        ]
      };
    
    handleChange = selectedItems => {
          console.log('selected item',selectedItems)
        this.setState({ selectedItems });
      };

    

      

    
    componentDidMount(){
      const {dispatch } = this.props;
      console.log('form funciton',this.props.form);
      dispatch(roleList());
      dispatch(permissionList());
    }

    roleChange=(value)=>{
        console.log(`role id ${value}`);
    }

    permissionChange=(value)=>{
        console.log(`permission ${value}`);
    }


    handleChange_TALHA = (selectedPermission) => {

      console.log('form permission',selectedPermission)
      console.log('form role test',this.props.form.getFieldValue('role'))
      
      
    };

    render() {
        const permission_list = this.props.permission_list;
        const role_list = this.props.role_list;
        const { Option } = Select;

        //from antd start

        const { selectedItems } = this.state;
        const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));

        //from antd end

        //from antd start custom

        const { selectedItems_TALHA } = this.state;
        const filteredOptions_TALHA = this.state.OPTIONS_TALHA.filter(item => !selectedItems_TALHA.includes(item.name));

        

        //from antd custom end

      
        console.log('permission list',permission_list)
        console.log('role list',role_list)
        const { getFieldDecorator } = this.props.form;
        return (
            <div>

         <Form>
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
                })(<Select showSearch style={{ width: '100%' }} placeholder="Select Role"  onChange={this.roleChange}>
                {role_list.data.map(item => (
                  <Select.Option key={item.id} value={item.name}>
                      {item.name}
                  </Select.Option>
                  ))}
              </Select>)}
                </Form.Item>
                </Col>
             </Row>

             <Row >
                <Col span={12} offset={6}>
               
                <Form.Item label="Permission">
                {getFieldDecorator('permission', {
                    initialValue: ["add",'hamba'],
                    rules: [
                   
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                        
                    },
                    
                    ],
                })(<Select
                    mode="multiple"
                    
                    placeholder="Inserted are removed"
                    
                    onChange={this.handleChange_TALHA}
                    style={{ width: '100%' }}
                >
                {permission_list.data.map(item => (
                <Select.Option key={item.id} value={item.name}>
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
    permission_list: state.permissionReducer.permission_list,
})

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(RolePermissionSetup);
export default withRouter(connect(mapStateToProps)(WrappedHorizontalLoginForm))
