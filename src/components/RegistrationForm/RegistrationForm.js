import React from "react";
import { connect } from 'react-redux'
import {Form,Input,Tooltip,Select,Button,AutoComplete,} from 'antd';
import {Link,withRouter } from "react-router-dom";

import {userAdd} from '../../actions/UserRegistration/UserRegistrationAction'
import { duplicateCheck } from '../../actions/UserRegistration/UserRegistrationAction';

  
  
  
  class RegistrationForm extends React.Component {

    componentDidMount(){

      console.log('user props',this.props.user_info);

    }


    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  
    handleSubmit = (e) => {
      e.preventDefault();

      const {dispatch } = this.props;
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          
          console.log('check',values)
          dispatch(userAdd(values,this.props));
          
        }
      });

      
    };
  
    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };
  
    validateToNextPassword = (rule, value, callback) => {

     
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };

     customValidation =  (rule, value, callback) => {
      const { form } = this.props;

      const {dispatch } = this.props;
       
      dispatch(duplicateCheck(value,callback));
      
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
          xs: { span: 16 },
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
      
  
     
      return (
        
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>

            <br/><br/><br/>

            {/* {this.props.user_info.duplicate_check} */}

        <Form.Item
            label={
              <span>
                Name&nbsp;
                <Tooltip title="What do you want others to call you?">
                
                </Tooltip>
              </span>
            } hasFeedback
          >
            {getFieldDecorator('name', {
              rules: [
                { 
                  required: true,
                  pattern: new RegExp("^[a-zA-Z0-9_. ]*$"),
                  message: "Special character not allowed"
                },
                { 
                  max: 6,
                  message: "should be less 7"
                }
                
              ],
            })(<Input />)}
          </Form.Item>


          <Form.Item label="E-mail" hasFeedback>
            {getFieldDecorator('email', {
              initialValue:'@gmail.com',
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
                {
                  validator: this.customValidation,
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
          <Form.Item label="Confirm Password" hasFeedback>
            {getFieldDecorator('confirm_password', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button> <i><b>If already registerd? please <Link to="/login">Login</Link></b></i>
          </Form.Item>
        </Form>
      );
    }
  }
  
  
  const mapStateToProps = state => ({
    user_info: state.userReducer,
    todo:state.R_todo
    
})

const WrappedRegistrationForm = Form.create({ name: 'horizontal_login' })(RegistrationForm);

export default withRouter(connect(mapStateToProps)(WrappedRegistrationForm))


  