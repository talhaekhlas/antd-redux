import React from "react";
import {Form,Input,Button} from 'antd';
import {Link,Redirect,withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { loginCheck } from '../../actions/UserRegistration/UserRegistrationAction';


  class RegistrationForm extends React.Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };

    
  
    handleSubmit = (e) => {
      e.preventDefault();

      const {dispatch } = this.props;

       this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          dispatch(loginCheck(values));
        }
      });
      

    };
  
    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    
  
    
  
   
    
    render() {
      
      const { getFieldDecorator } = this.props.form;
      const { autoCompleteResult } = this.state;
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 12 },
          sm: { span: 6 },
        },
        wrapperCol: {
          xs: { span: 12 },
          sm: { span: 10 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 6,
          },
        },
      };


     
      const checkLocalStorage = localStorage.getItem('token')
      
      let { from } = this.props.location.state || { from: { pathname: "/todo" } };


      
      
      if (checkLocalStorage) return <Redirect to={from} />;
  
      return (
        

        

        <Form {...formItemLayout} onSubmit={this.handleSubmit}>

         {/* {localStorage.getItem('token')}
         {localStorage.removeItem('token')} */}
            <br/><br/><br/>
          <Form.Item label="E-mail">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Password" hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input.Password />)}
          </Form.Item>
          
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Login
            </Button> <i><b>If not registerd? please <Link to="/register">Register</Link> first</b></i>
          </Form.Item>
        </Form>
      );
    }
  }
  
  // const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
  
  // export default WrappedRegistrationForm;


const mapStateToProps = state => ({
    user:state.userReducer
    
})

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(RegistrationForm);


export default withRouter(connect(mapStateToProps)(WrappedHorizontalLoginForm))