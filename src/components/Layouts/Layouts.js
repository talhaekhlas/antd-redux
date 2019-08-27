import React , { Fragment } from "react";

import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Layout, Breadcrumb} from 'antd';

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
          {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
          <Content style={{ margin: '0 16px', }}>
            <Breadcrumb style={{ margin: '16px' }}>
              {/* <Breadcrumb.Item>User</Breadcrumb.Item> */}
              {/* <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
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

export default Layouts;