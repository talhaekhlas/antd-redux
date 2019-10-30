import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { todoList } from "../../actions/TodoListAction/TodoListAction";
import '../../test/assets/css/todo-list.css'

class TodoList extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
    
        dispatch(todoList());
      }

    todoOnMouseEnter = (e)=>{
        
        console.log(e.target)

        //voutik achoron kore children a without this code
        if(e.target.children.length>1)
        {
            e.target.children[1].className = 'todo-mouse-enter'
        }
        
    } 
    
    todoOnMouseLeave = (e)=>{
        console.log(e.target)
         //voutik achoron kore children a without this code
        if(e.target.children.length>1)
        {
            e.target.children[1].className = 'todo-mouse-leave'
        }
        
    } 


    render() {
        const todoList  = this.props.todoListReducer.todo_list.data;

        console.log('from todo list',todoList)
        return (
            <div>
                {todoList.length
                ?
                <ul className="todo-list">
                     {todoList.map((item,index)=>
                    <li 
                    className='todo-single'
                    key={index} 
                    id={'single_todo'+index}
                    onMouseEnter={this.todoOnMouseEnter}
                    onMouseLeave={this.todoOnMouseLeave}
                    >
                        <span className="todo-single-name">{item.name}</span> 
                        <span className='todo-mouse-leave'>sdfsdf</span>
                        <span className="todo-delete-button">delete</span>
                    </li>)}
                </ul>
               
                    :
                    'No'}
               
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todoListReducer: state.todoListReducer
  });
  
export default withRouter(connect(mapStateToProps)(TodoList));

