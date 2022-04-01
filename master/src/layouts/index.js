import { Layout, Menu } from 'antd';
import React from 'react';
import { Link } from 'umi';
import style from './style.less';

const { Header, Content, Footer } = Layout;

export default class extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    const selectKey = location.pathname;

    return (
      <Layout className={style.layout}>
        <Header>
          <div className={style.logo}>{name}</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['home']}
            selectedKeys={[selectKey]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="/">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="/about">
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="/angular9">
              <Link to="/angular9">
                angular9
              </Link>
            </Menu.Item>
            <Menu.Item key="/angular9/home">
              <Link to="/angular9/home">
                angular9 home
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className={style.content}>
          {children}
        </Content>
        <Footer className={style.footer}>
          Ant Design ©2019 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}
