import React , { Fragment } from "react";
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Layout, Breadcrumb} from 'antd';
import {withRouter } from "react-router-dom";
import { connect } from 'react-redux'

import BasicRoute from '../../containers/BasicRoute'

const { Content, Footer } = Layout;


class Layouts extends React.Component {
  
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    
    this.setState({ collapsed });
  };

  render() {
    return (
      <Fragment>
      <Navbar/>
      
      <Layout>

        <Sidebar/> 
        <Layout >
          
          <Content style={{ margin: '0 16px', }}>
            <Breadcrumb style={{ margin: '16px' }}>
             
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 490 }}>
            <BasicRoute/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}><b>Todo App ©2018 Developed by Ant UED</b> </Footer>
        </Layout>

        </Layout>
        </Fragment>
     
    );
  }
}


const mapStateToProps = state => ({
  
  user_info:state.userReducer
  
}) 


export default withRouter(connect(mapStateToProps)(Layouts))
