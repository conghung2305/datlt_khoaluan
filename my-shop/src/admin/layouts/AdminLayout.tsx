import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import HeaderAdmin from "../component/HeaderAdmin";

const { Content } = Layout;

const AdminLayout: React.FC = () => {
  return (
    <Layout style={{ width: "100vw" }}>
      <Sidebar />
      <Layout>
        <HeaderAdmin />
        <Content
          style={{
            marginLeft: "220px",
            background: "#fff",
            padding: 20,
            borderRadius: 8,
            minHeight: "calc(100vh - 64px)",
            maxHeight: "calc(100vh - 64px)",
            overflowY: "auto",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
