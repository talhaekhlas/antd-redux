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
        
        console.log('enter',e.target)

        //voutik achoron kore children a without this code
        if(e.target.children.length>1)
        {
            e.target.children[1].className = 'todo-mouse-enter'
        }else{
            console.log('enter parent',e.target.parentNode)
            e.target.parentNode.children[1].className = 'todo-mouse-enter'
        }
        
    } 
    
    todoOnMouseLeave = (e)=>{
        console.log('Leave',e.target)
         //voutik achoron kore children a without this code
        if(e.target.children.length>1)
        {
            e.target.children[1].className = 'todo-mouse-leave'
        }else{
            console.log('leave parent',e.target.parentNode)
            e.target.parentNode.children[1].className = 'todo-mouse-leave'
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
                        <span className='todo-mouse-leave'>
                            <span className="todo-mouse-enter-action-menu">
                                <span style={{marginLeft:'20px',fontSize:'12px',color:'#7acef4'}}>Family</span>
                                <span style={{marginLeft:'20px',fontSize:'17px',color:'#7acef4'}}>|</span>
                                <span style={{marginLeft:'20px',fontSize:'12px',color:'#7acef4'}}>06:25 PM</span>
                                <span style={{marginLeft:'20px',fontSize:'17px',color:'#d2d9e7'}}>|</span>
                                <span style={{marginLeft:'20px',fontSize:'17px',color:'#d2d9e7'}}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span>
                                <span style={{marginLeft:'20px',fontSize:'17px',color:'#d2d9e7'}}>|</span>
                                <span style={{marginLeft:'20px',fontSize:'17px',color:'#d2d9e7'}}><i className="fa fa-paperclip" aria-hidden="true"></i></span>
                                <span style={{marginLeft:'20px',fontSize:'17px',color:'#d2d9e7'}}>|</span>
                                <span style={{marginLeft:'20px',fontSize:'17px',color:'#ebc84a'}}><i className="fa fa-star-o" aria-hidden="true"></i></span>
                            </span>
                            <span className="todo-delete-button" style={{color:'white',fontSize:'20px'}}><i className="fa fa-trash-o" aria-hidden="true"></i></span>
                            
                        </span>
                        
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

