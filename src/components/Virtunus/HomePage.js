import React, { Component } from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { moduleList } from "../../actions/ModuleListAction/ModuleListAction";

class HomePage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(moduleList());
  }

  render() {
    const data  = this.props.fromModuleListReducer.module_list.data;
  
    console.log('data ekhlas',data)
    return (
      <div>

      
      {!data.length?'Loading.....':<div className="module-layout">

        {data.map((item,index)=><div className="module-single" key={index}>
          {item.name}
          <Link to={"/todo-list-by-project/"+item.id}>
          <img src="https://jctodo.nl/templates/jctodo/images/jctodo_logo_color.png" height="200" width="200" alt=""/>
          </Link>
         
       </div>)}
       
      
      
     </div>}
     </div>
      
    );
  }
}

const mapStateToProps = state => ({
  fromModuleListReducer: state.moduleListReducer
});

export default withRouter(connect(mapStateToProps)(HomePage));
