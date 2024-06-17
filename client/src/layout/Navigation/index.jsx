import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { logout } from "@/redux/auth/actions";
import {
  SettingOutlined,
  UserOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  TeamOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";

const { Sider } = Layout;

function Navigation() {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{
          zIndex: 1000,
        }}
      > 
        {collapsed ?
        <div className="logo">
          <img src={'./logo-mobile.png'} width="48" height="48"/>
        </div>
        :
        <div className="logo">
          <img src={'./logo.png'} width="150" height="40"/>
        </div>
        }
        <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/" />
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<TeamOutlined />}>
            <Link to="/customer">Users</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            <Link to="/selectcustomer">Select User</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<FileTextOutlined />}>
            <Link to="/lead" />
            Sale Properties
          </Menu.Item>
          <Menu.Item key="5" icon={<FileTextOutlined />}>
            <Link to="/lead" />
            Rent Properties
          </Menu.Item>
          <Menu.Item key="6" icon={<FileSyncOutlined />}>
            <Link to="/product" />
            Total Properties
          </Menu.Item>
          <Menu.Item key="7" icon={<TeamOutlined />}>
            <Link to="/admin" />
            Admins
          </Menu.Item>

          <Menu.Item key="8" icon={<SettingOutlined />}>
            <Link to="/settings" />
            Settings
          </Menu.Item>

          <Menu.Item key="9" icon={<UnlockOutlined />} onClick={() => dispatch(logout())}>
            Logout
          </Menu.Item>

        </Menu>
      </Sider>
    </>
  );
}
export default Navigation;
