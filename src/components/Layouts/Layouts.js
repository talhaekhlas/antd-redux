import React , { Fragment } from "react";
import ReactDOM from 'react-dom';
import Sidebar from '../common/Sidebar'
import Navbar from './Navbar'
// import 'antd/dist/antd.css';
// import './index.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import BasicRoute from '../../containers/BasicRoute'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Layouts extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
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
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 450 }}>Bill is a cat.</div>

            <BasicRoute/>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>

        </Layout>
        </Fragment>
     
    );
  }
}

export default Layouts;