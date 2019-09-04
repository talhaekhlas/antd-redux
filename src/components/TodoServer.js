import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Form, Icon, Input, Button,Row, Col,Table } from 'antd';
import { todoFromServer } from '../actions/A_todoForm';
import {Link,withRouter } from "react-router-dom";
import axios from 'axios'

class TodoServer extends Component {

    componentDidMount(){
    const {dispatch } = this.props;

    dispatch(todoFromServer());
    
   
    }


    handleSubmit = async (e) => {
        e.preventDefault();

        const {dispatch } = this.props;

        const formValue = this.props.form.getFieldValue('name');
        axios.post('http://localhost:8000/api/todo',{'name':formValue,'user_id':1}).then(response => response.data)
        .then((dataResponse) => {

            axios.get('http://localhost:8000/api/todo').then(response => response.data)
            .then((data) => {

                dispatch(todoFromServer(data));
      
     })
        
        })

      
       this.props.form.validateFields((err, values) => {

          if (!err) {
            console.log('Received values of form: ', values);
          }


        });



      };




    deleteItem = async(key)=>{

        const {dispatch } = this.props;

        const config = {
          headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
          };
      
         const bodyParameters = {
          'Content-Type': "application/json",
          'Accept': "application/json",
         }

        axios.delete('http://localhost:8000/api/todo/'+key.id,config,bodyParameters).then(response => response.data)
        .then((dataResponse) => {

          const config = {
            headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
            };
        
           const bodyParameters = {
            'Content-Type': "application/json",
            'Accept': "application/json",
           }

          
            axios.get('http://localhost:8000/api/todo',config,bodyParameters).then(response => response.data)
            .then((data) => {

                dispatch(todoFromServer(data));
      
     })
            
        
        })


      
      
    }

    render() {
        const {todo } = this.props;

        const data = this.props.todo.todo_from_server.data;

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
                    <Button  type="danger" size="small"  onClick={()=>this.deleteItem(dataIndex)}>
                         delete</Button>&nbsp;
                    <Link to={`todo/${dataIndex.id}`}>
                        <Button  type="primary" size="small">
                             edit
                        </Button>
                    </Link>
                </div>
                ),
              }
          ];

        
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        return (
            <div>
                
                <Row >
                <Col span={12} offset={6} style={{background:'#F2F6F9'}}>
                  <Form layout="inline" onSubmit={this.handleSubmit}>
                    
                    <Form.Item >
                      {getFieldDecorator('name', {
                        rules: [{ required: false, message: 'Please input your username!' }],
                        initialValue:''
                      })(
                        <Input
                          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          placeholder="Username" 
                        />,
                      )}
                    </Form.Item>
                    
                    <Form.Item>
                      <Button type="primary" htmlType="submit" >
                        Add Todo
                      </Button>
                    </Form.Item>
                  </Form> 
                </Col>

                <Col span={12} offset={6}>
                    <h4 align="center">Todo List</h4>
                    <Table columns={columns} dataSource={data} size="small" />
                </Col>

                
             </Row>
            </div>
        );
    }
}




const mapStateToProps = state => ({
    customer: state.customerReducer,
    talha:state.talhaReducer,
    todo:state.R_todo
    
})

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(TodoServer);

//export default WrappedHorizontalLoginForm

//ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode);

//export default connect(mapStateToProps)(TodoForm)

export default withRouter(connect(mapStateToProps)(WrappedHorizontalLoginForm))