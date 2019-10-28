import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { moduleList } from "../../actions/ModuleListAction/ModuleListAction";

class TodoList extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
    
        dispatch(moduleList());
      }
    render() {
        return (
            <div>
                sdfsdfsd
               <span style={{color:'red'}}>I am not hamba</span> 
            </div>
        );
    }
}

const mapStateToProps = state => ({
    fromModuleListReducer: state.moduleListReducer
  });
  
export default withRouter(connect(mapStateToProps)(TodoList));

