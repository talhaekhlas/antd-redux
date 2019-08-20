import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Form, Icon, Input, Button,Row, Col,Table } from 'antd';
import { todoAdd } from '../actions/A_todoForm';
import { todoFromServer } from '../actions/A_todoForm';
import { editPage } from '../actions/A_todoForm';
import {Link } from "react-router-dom";
import axios from 'axios'

class TodoServer extends Component {

    

    componentDidMount(){
        const {dispatch } = this.props;

    axios.get('http://jsonplaceholder.typicode.com/todos').then(response => response.data)
    .then((data) => {

        dispatch(todoFromServer(data));

        // console.log('data from server',data);
      
     })
        
    }
    render() {
        const {todo } = this.props;

        console.log(todo);
        return (
            <div>
                hamba
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

export default connect(mapStateToProps)(WrappedHorizontalLoginForm)