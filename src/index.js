import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './index.css'
import AdminPage from "./views/admin/AdminPage";
import ProfilePage from "./views/profile/ProfilePage";
import ProfileEditingPage from "./views/profile-editing/ProfileEditingPage";
import RegistrationPage from "./views/registration/RegistrationPage";
import SignInPage from "./views/sign-in/SignInPage";


import reportWebVitals from "./reportWebVitals";

import {Layout, Button, Menu, Breadcrumb} from 'antd'
const { Header, Footer, Content } = Layout;

const routes = () => (
  <Router>
    <Switch>      
        <Route path="/admin"><AdminPage /></Route>
        <Route path="/profile"><ProfilePage /></Route>
        <Route path="/profile-edit"><ProfileEditingPage /></Route>
        <Route path="/registration"><RegistrationPage /></Route>
        <Route path="/"><SignInPage /></Route>
    </Switch>
  </Router>
)

ReactDOM.render(
  <React.StrictMode>
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
      {routes()}
   </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
