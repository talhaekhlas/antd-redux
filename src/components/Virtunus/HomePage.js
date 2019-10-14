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
  
    console.log('data',data)
    return (
      <div>

      
      {!data.length?null:<div className="module-layout">
       
      <div className="module-single">
         <img src="https://jctodo.nl/templates/jctodo/images/jctodo_logo_color.png" height="200" width="200" alt=""/>
       </div>
       <div className="module-single">
         <img src="https://www.psychologies.co.uk/sites/default/files/styles/psy2_page_header/public/wp-content/uploads/2013/04/family.gif"  height="200" width="200" alt=""/>
       </div>
       
       
       <div className="module-single"></div>
       <div className="module-single"></div>
       <div className="module-single"></div>
       <div className="module-single"></div>
     </div>}
     </div>
      
    );
  }
}

const mapStateToProps = state => ({
  fromModuleListReducer: state.moduleListReducer
});

export default withRouter(connect(mapStateToProps)(HomePage));
