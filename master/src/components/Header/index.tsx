import { Avatar, Dropdown, Menu, Popover } from 'antd';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { history, Link } from 'umi';
import logoSrc from '@/assets/logo.svg';
import { HomeOutlined } from '@ant-design/icons';

import styles from './index.less';

const helpMenu = (
  <Menu className="header-menu">
    <Menu.Item key="help">
      <a href="/" target="_blank" rel="noopener noreferrer">
        帮助文档
      </a>
    </Menu.Item>
  </Menu>
);

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const navigate = (url: string) => {
    history.push(url);
  };

  const toHome = () => {
    navigate('/');
  };

  const handleSignOut = () => {};

  const userMenu = (
    <Menu className="header-menu">
      <Menu.Item key="user_center">
        <a onClick={() => navigate('/user/center')}>个人中心</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="signout">
        <a onClick={handleSignOut}>退出登录</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logoSrc} alt="logo" />
      </div>
      <Popover placement="bottomRight">
        <div className="header-item" onClick={toHome}>
          <HomeOutlined />
        </div>
      </Popover>
      <Link className="header-item" to="/v1">
        子应用
      </Link>
      <div className="center" />
      <Dropdown overlay={userMenu} placement="bottomRight">
        <div className={styles.avatar}>
          <Avatar src={require('@/assets/avatar.jpg')} />
        </div>
      </Dropdown>
    </header>
  );
};

export default Header;
