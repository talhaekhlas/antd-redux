import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux'
import { loadCustomer } from '../actions';

import { todoAdd } from '../actions/A_todoForm';


function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

class TodoForm extends Component {

    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
      }
    
      handleSubmit = (e) => {
        e.preventDefault();

        // console.log(this.props);

        const {dispatch } = this.props;

        console.log('before dispatch:',this.props.todo);

        dispatch(todoAdd());

        console.log('after dispatch:',this.props.todo);

        

       // this.props.form.setFieldsValue( { "username" :  this.props.todo.address } ); 

        // this.props.form.resetFields();

        //const habma = () => dispatch(loadCustomer())
        // despatch(todoAdd())
        this.props.form.validateFields((err, values) => {

          
          if (!err) {
            //console.log('Received values of form: ', values);
          }


        });
      };
    
      render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        const {todo } = this.props;
    
        // Only show error after a field is touched.
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');

        const hamba = todo.address;
        return (
          <Form layout="inline" onSubmit={this.handleSubmit}>
             {todo.address}
            <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
                initialValue:todo.address
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username" 
                />,
              )}
            </Form.Item>
            <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                Log in
              </Button>
            </Form.Item>
          </Form>
        );
      }
}

const mapStateToProps = state => ({
    customer: state.customerReducer,
    talha:state.talhaReducer,
    todo:state.R_todo
    
})

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(TodoForm);

//export default WrappedHorizontalLoginForm

//ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode);

//export default connect(mapStateToProps)(TodoForm)

export default connect(mapStateToProps)(WrappedHorizontalLoginForm)