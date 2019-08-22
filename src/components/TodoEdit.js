import React from 'react';
import { Form, Icon, Input, Button } from 'antd';

import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import { loadCustomer } from '../actions';
import { todoAdd } from '../actions/A_todoForm';
import { editPage } from '../actions/A_todoForm';
import axios from 'axios'


const  TodoEdit = (props) => {



  

   
     
     const editId = props.match.params.todoId;

     const prevTodoFromServer = props.todo.todo_from_server.data;
     console.log('prev all todo from server',prevTodoFromServer);

    //  const editableTodo = prevTodoFromServer.filter(item => item.id == props.match.params.todoId);

    //  console.log('ediatable todo',editableTodo);


    // const abc = new Promise( (resolve, reject) => {

    
     axios.get('http://localhost:8000/api/todo/'+editId).then(response => response.data)
    .then((data) => {
        // resolve(data)


        // console.log('editable data', data);

       //alert('hamba');

        //dispatch(todoFromServer(data));
      
     })

    // });


    // Promise.all([abc]).then( values => {
    //   console.log('values', values)
    // })


  





     

        const {dispatch } = props;

        const prevTodo = props.todo.list;
        
        // difference between == and ===

        // console.log('editable data',props.todo);
        //const editableTodo = [...props.todo.todo_from_server.data.filter(i => i.id == props.match.params.todoId)];

        //console.log('editable data',editableTodo);

       
       const handleSubmit = async (e) => {

        const {dispatch } = props;

        let editId = props.match.params.todoId ;
        e.preventDefault();

        const editItem = props.todo.list.find(item=>item.id==editId)

        console.log(editItem);

        editItem.name = props.form.getFieldValue('username');

        const presentState = [...props.todo.list,editItem]

        console.log(props.history.push('/todo'));
        



     
      };
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;

    const { todo } = props;

    // Only show error after a field is touched.
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');

  //   if (1 === 1) {
  //     return <Redirect to="/todo" />
  // }

    
    return (
        
        <div>

          

           <p>{ todo.name }</p>
            <Form layout="inline" onSubmit={handleSubmit}>
             
            <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
                initialValue:'editableTodo[0].name'
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
};

const mapStateToProps = state => ({
   
    todo:state.R_todo
    
})

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(TodoEdit);

//export default WrappedHorizontalLoginForm

//ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode);

//export default connect(mapStateToProps)(TodoForm)

export default connect(mapStateToProps)(WrappedHorizontalLoginForm)