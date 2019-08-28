import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import axios from 'axios'

import { connect } from 'react-redux'
import {withRouter } from "react-router-dom";

import { todoFromServer } from '../actions/A_todoForm';


class TodoEditServer extends Component {

    componentDidMount(){
        const {dispatch } = this.props;
        dispatch(todoFromServer());
        
    }


    handleSubmit = (e)=>{

        e.preventDefault();
        let editId = this.props.match.params.todoId

        const name = this.props.form.getFieldValue('name')

        const updatedTodo = {'name':name}

        

        axios.put('http://localhost:8000/api/todo/'+editId,updatedTodo).then(response => response.data)
        .then((dataResponse) => {

            
        })

        const {dispatch } = this.props;

        dispatch(todoFromServer());

        
        this.props.history.push('/todo');
    }

    render() {

        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const usernameError = isFieldTouched('username') && getFieldError('username');

        const { todo } = this.props;

        const editId = this.props.match.params.todoId
        const prevTodo = this.props.todo.todo_from_server.data

        let isEditable = 'no';
        let todoName = null;

      

        // if(prevTodo){
            let editableTodo = prevTodo.find(x => x.id == editId)
            todoName = editableTodo ? editableTodo.name : '';
        // }

        
        
        return (
            <div>
                
                <Form layout="inline" onSubmit={this.handleSubmit}>
             
                    <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                        initialValue:todoName
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username" 
                        />,
                    )}
                    </Form.Item>
                    
                    <Form.Item>
                    <Button type="primary" htmlType="submit" >
                        Update
                    </Button>
                    </Form.Item>
                 </Form>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    todo:state.R_todo,
    
    
})

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(TodoEditServer);


export default withRouter(connect(mapStateToProps)(WrappedHorizontalLoginForm))