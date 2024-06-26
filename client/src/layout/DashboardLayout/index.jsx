import React from "react";
//import HeaderContent from "../HeaderContent";

import { Layout } from "antd";

const { Content } = Layout;

export default function DashboardLayout({ children }) {
  return (
    <Layout className="site-layout">
      {/* <HeaderContent /> */}
      <Content
        style={{
          padding: "20px",
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        {children}
      </Content>
    </Layout>
  );
}
