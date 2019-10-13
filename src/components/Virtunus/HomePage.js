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
      <div className="gutter-example">
        {!data.length?'loading....':<div><Row gutter={20}>
          <Col className="gutter-row" span={8} >
            <div className="gutter-box" style={{background:'#0F8FA8'}}>{data[0].name}</div>
          </Col>
          <Col className="gutter-row" span={8} >
            <div className="gutter-box" style={{background:'red'}}>{data[1].name}</div>
          </Col>
          <Col className="gutter-row" span={8} >
            <div className="gutter-box" style={{background:'red'}}>{data[2].name}</div>
          </Col>
        </Row>
        <br/>
        <Row gutter={20}>
          <Col className="gutter-row" span={8} >
            <div className="gutter-box" style={{background:'red'}}>{data[3].name}</div>
          </Col>
          <Col className="gutter-row" span={8} >
            <div className="gutter-box" style={{background:'red'}}>{data[4].name}</div>
          </Col>
          <Col className="gutter-row" span={8} >
            <div className="gutter-box" style={{background:'red'}}>{data[5].name}</div>
          </Col>
        </Row></div>}
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fromModuleListReducer: state.moduleListReducer
});

export default withRouter(connect(mapStateToProps)(HomePage));
