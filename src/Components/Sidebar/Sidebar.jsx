import React, { useState } from 'react'
import { Button, Layout, theme } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import './Sidebar.css'
import Logo from '../Logo/Logo';
import MenuList from '../Menu/MenuList';
import TogglethemeBtn from '../ToggleThemeBtn/TogglethemeBtn';
import Abc from '../../Routing/Routing';
import zellesolutions_logo from '../../../public/zellesolutions_logo.jpg';

const { Header, Sider } = Layout;

const Sidebar = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>

      <Layout>

        <Sider collapsed={collapsed}
          className='Sidebar'
          collapsible
          trigger={null}
          theme={darkTheme ? 'dark' : 'light'}>
          {/* <Logo /> */}
          <div className='logo-image'>
            <img src={zellesolutions_logo} alt='Logo' />
            {!collapsed ?<p className='underlined underline-mask'>zelle<br />solutions</p> : null}
            </div>
          <MenuList darkTheme={darkTheme} />
          <TogglethemeBtn darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider>

        <Layout>

          <Header style={{ padding: 0, background: colorBgContainer, }}>
            <Button type="text"
              className='toggle'
              onClick={() => setCollapsed(!collapsed)}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}>
            </Button>
          </Header>

          <Abc />

        </Layout>

      </Layout>

    </>
  )
}

export default Sidebar