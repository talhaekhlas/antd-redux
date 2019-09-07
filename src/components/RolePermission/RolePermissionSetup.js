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


    handleChange_TALHA = (selectedItems_TALHA) => {
      console.log('selected item talha',selectedItems_TALHA)
      this.setState({ selectedItems_TALHA });
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

        console.log('selected talha',selectedItems_TALHA)
        console.log('filter talha',filteredOptions_TALHA)

        //from antd custom end

        const RoleOption = role_list.data.map(item=>{
            return <Option key={item.id}>{item.name}</Option>
        })

        const permissionOption = permission_list.data.map(item=>{
            return <Option key={item.id}>{item.name}</Option>
        })

        


        console.log('permission list',permission_list)
        console.log('role list',role_list)
        return (
            <div>

            <Row >
                <Col span={12} offset={6}>
                <b>Custom Antd Ekhlas</b>
                <Select
                    mode="multiple"
                    placeholder="Inserted are removed"
                    value={[1,2]}
                    onChange={this.handleChange_TALHA}
                    style={{ width: '100%' }}
                >
                {filteredOptions_TALHA.map(item => (
                <Select.Option key={item.id} value={item.id}>
                    {item.name}
                </Select.Option>
                ))}
                </Select>
                </Col>
             </Row>

             {/* <Row >
                <Col span={12} offset={6}>
                <b>Custom Antd Ekhlas</b>
                <Select
                    mode="multiple"
                    placeholder="Inserted are removed"
                    value={selectedItems_TALHA}
                    onChange={this.handleChange_TALHA}
                    style={{ width: '100%' }}
                >
                {filteredOptions_TALHA.map(item => (
                <Select.Option key={item.id} value={item.id}>
                    {item.name}
                </Select.Option>
                ))}
                </Select>
                </Col>
             </Row> */}
                
             {/* <Row >
                <Col span={12} offset={6}>
                <b>Role Name</b>
                <Select showSearch style={{ width: '100%' }} placeholder="Select Role" onChange={this.roleChange}>
                    {RoleOption}
                </Select> 
                </Col>
             </Row>
             <br/>
             <Row >
                <Col span={12} offset={6}>
                <b>Permission Name</b>
                <Select  type="number" mode="tags" style={{ width: '100%' }} placeholder="Select Permission" onChange={this.permissionChange}>
                    {permissionOption}
                </Select> 
                </Col>
             </Row>

             <Row >
                <Col span={12} offset={6}>
                <b>From antd</b>
                <Select
                    mode="multiple"
                    placeholder="Inserted are removed"
                    value={selectedItems}
                    onChange={this.handleChange}
                    style={{ width: '100%' }}
                >
                {filteredOptions.map(item => (
                <Select.Option key={item} value={item}>
                    {item}
                </Select.Option>
                ))}
                </Select>
                </Col>
             </Row> */}

             

             
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
