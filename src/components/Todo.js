import React from 'react';
import { connect } from 'react-redux'
import { Form, Icon, Input, Button,Row, Col,Table } from 'antd';
import { todoAdd } from '../actions/A_todoForm';
import { editPage } from '../actions/A_todoForm';
import {Link } from "react-router-dom";






const Todo = (props) => {



    console.log('test form todo',props.form);
    const {dispatch } = props;
    
    

    


    const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log(props);

        const {dispatch } = props;

        

        const currentList = [...props.todo.list,{id:new Date(),name:props.form.getFieldValue('username')}];
        console.log('before dispatch:',currentList);
        
        await dispatch(todoAdd(currentList));

        
        console.log('after dispatch:',props.todo);

        
   
       props.form.setFieldsValue( { "username" :  '' } ); 
     
       props.form.validateFields((err, values) => {

          if (!err) {
            console.log('Received values of form: ', values);
          }


        });
      };

    const deleteItem = async(key)=>{
        console.log('I am delete Item',key);

        const {dispatch } = props;

        const prevTodo = props.todo.list;

        const presentState = props.todo.list.filter(i => i.id !== key.id);
        await dispatch(todoAdd(presentState));
        console.log(presentState);

        //const presentState = prevTodo.splice();
    }

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
                <Button  type="danger"  onClick={()=>deleteItem(dataIndex)}>
                     delete</Button>&nbsp;
                <Link to={`todo/${dataIndex.id}`}>
                    <Button  type="primary">
                         edit
                    </Button>
                </Link>
            </div>
            ),
          }
      ];
      const data = props.todo.list;


    //   const { getFieldDecorator } = props.form;

      const {todo } = props;

      const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;

    //   dispatch(editPage('no'));

    



    console.log(props);
    return (
        <div>
            <br/>
           
            <Row >
                <Col span={12} offset={6} style={{background:'#F2F6F9'}}>
            <Form layout="inline" onSubmit={handleSubmit}>
             
             <Form.Item >
               {getFieldDecorator('username', {
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
};


const mapStateToProps = state => ({
    customer: state.customerReducer,
    talha:state.talhaReducer,
    todo:state.R_todo
    
})

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(Todo);

//export default WrappedHorizontalLoginForm

//ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode);

//export default connect(mapStateToProps)(TodoForm)

export default connect(mapStateToProps)(WrappedHorizontalLoginForm)



