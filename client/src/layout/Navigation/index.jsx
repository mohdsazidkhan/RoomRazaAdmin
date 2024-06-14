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
        <div className="logo"><img src={'./logo.png'} width="150" height="40"/></div>
        <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/" />
            Home Page
          </Menu.Item>
          <Menu.Item key="2" icon={<CustomerServiceOutlined />}>
            <Link to="/customer">Customer</Link>
          </Menu.Item>
          <Menu.Item key="24" icon={<UserOutlined />}>
            <Link to="/selectcustomer">Select Customer</Link>
          </Menu.Item>
          <Menu.Item key="21" icon={<FileTextOutlined />}>
            <Link to="/lead" />
            Lead
          </Menu.Item>
          <Menu.Item key="3" icon={<FileSyncOutlined />}>
            <Link to="/product" />
            Product
          </Menu.Item>
          <Menu.Item key="31" icon={<TeamOutlined />}>
            <Link to="/admin" />
            Admin Management
          </Menu.Item>

          <Menu.Item key="32" icon={<SettingOutlined />}>
            <Link to="/settings" />
            Settings
          </Menu.Item>

          <Menu.Item key="32" icon={<UnlockOutlined />} onClick={() => dispatch(logout())}>
            Logout
          </Menu.Item>

        </Menu>
      </Sider>
    </>
  );
}
export default Navigation;
