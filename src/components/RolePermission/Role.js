import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Form, Icon, Input, Button,Row, Col,Table } from 'antd';

import {Link,withRouter } from "react-router-dom";
import { roleList } from '../../actions/RolePermissionAction/RoleAction';
import { addRole } from '../../actions/RolePermissionAction/RoleAction';
import axios from 'axios'

class Role extends Component {

    componentDidMount(){
    const {dispatch } = this.props;

    dispatch(roleList());
    
   
    }


    handleSubmit = async (e) => {
        e.preventDefault();

        const {dispatch } = this.props;

        
        this.props.form.validateFields((err, values) => {

          if (!err) {
            console.log('Received values of form: ', values);

            dispatch(addRole(values));
            dispatch(roleList());

          }


        });

      };


      

    render() {
        
        const {todo } = this.props;

        const data = this.props.role_info.role_list.data;

        console.log('role list form Role component',data)

        const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
            },
           
            {
                title: 'Action',
                dataIndex: '',
                key: 'x',
                index:'x',
                render: (dataIndex) => (
                <div>
                    
                    <Icon style={{color:'red'}}  onClick={()=>this.deleteItem(dataIndex)} type="delete" />&nbsp;|&nbsp;
                    <Link to={`todo/${dataIndex.id}`}>
                        
                        <Icon style={{color:'#AF760A'}} type="edit" />
                        
                       
                    </Link>
                </div>
                ),
              }
          ];

        
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        return (

            <div>

                
                
                <Row >
                <Col span={12} offset={6}>
                  <Form layout="inline" onSubmit={this.handleSubmit}>
                    
                    <Form.Item hasFeedback>
                      {getFieldDecorator('name', {
                        rules: [
                            { required: true, message: 'Please input role!' },
                            {
                                
                                pattern: new RegExp("^[a-zA-Z0-9_. ]*$"),
                                message: "Special character not allowed"
                            },
                        ],
                        initialValue:''
                      })(
                        <Input
                          prefix={<Icon type="cloud" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          placeholder="Role Name" 
                        />,
                      )}
                    </Form.Item>
                    
                    <Form.Item>
                      <Button type="primary" htmlType="submit" >
                      <Icon type="plus" />
                      </Button>
                    </Form.Item>
                  </Form> 
                </Col>

                <Col span={12} offset={6}>
                    <h4 align="center">Role List</h4>
                    <Table columns={columns} dataSource={data} size="small" />
                </Col>

                
             </Row>
            </div>
        );
    }
}




const mapStateToProps = state => ({
    role_info: state.roleReducer, 
})

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(Role);

export default withRouter(connect(mapStateToProps)(WrappedHorizontalLoginForm))