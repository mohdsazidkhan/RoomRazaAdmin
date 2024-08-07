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
            <Link to="/"><img src={'./logo-mobile.png'} width="48" height="48" /></Link>
          </div>
          :
          <div className="logo">
            <Link to="/"><img src={'./logo.png'} width="150" height="40" /></Link>
          </div>
        }
        <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/">
              Dashboard
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<TeamOutlined />}>
            <Link to="/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<FileTextOutlined />}>
            <Link to="/sale-properties">
              Sale Properties
            </Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<FileTextOutlined />}>
            <Link to="/rent-properties" >
              Rent Properties</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<FileSyncOutlined />}>
            <Link to="/all-properties" >
              All Properties</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<TeamOutlined />}>
            <Link to="/admins" >
              Admins</Link>
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
