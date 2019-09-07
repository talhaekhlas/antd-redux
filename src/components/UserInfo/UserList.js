import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Form, Icon, Input, Button,Row, Col,Table } from 'antd';

import {Link,withRouter } from "react-router-dom";
import { userList } from '../../actions/UserRegistration/UserListAction';
import { addRole } from '../../actions/RolePermissionAction/RoleAction';
import { deleteRole } from '../../actions/RolePermissionAction/RoleAction';
import axios from 'axios'

class UserList extends Component {

    componentDidMount(){
    
      const {dispatch } = this.props;
      
      dispatch(userList());
    
   
    }

    deleteItem = (data)=>{

        const {dispatch } = this.props;
        const roleId = data.id;
        dispatch(deleteRole(roleId));
      
  
      }


      

    render() {
        
       
        const data = this.props.user_list.data;

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
                    <Link to={`role/${dataIndex.id}`}>
                        
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
                    <h4 align="center">User List</h4>
                    <Table columns={columns} dataSource={data} size="small" />
                </Col>

                
             </Row>
            </div>
        );
    }
}




const mapStateToProps = state => ({
    user_list: state.userReducer.user_list, 
})

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(UserList);

export default withRouter(connect(mapStateToProps)(WrappedHorizontalLoginForm))