import React from "react";
import { Layout, Menu } from "antd";
import Logo from "../../assets/images/Vector.png";
import {
  HomeOutlined,
  PictureOutlined,
  FileTextOutlined,
  StarOutlined,
  AppstoreOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const location = useLocation();
  const iconStyle = {
    fontSize: 18,
    color: "#555",
    transition: "all 0.3s ease",
    marginRight: 8,
  };
  const menuItems = [
    {
      key: "/admin",
      label: "Trang chủ",
      icon: <HomeOutlined style={iconStyle} />,
    },
    {
      key: "/admin/contact",
      label: "Quản lí liên hệ",
      icon: <PictureOutlined style={iconStyle} />,
    },
    {
      key: "/admin/booking",
      label: "Quản lí đặt bàn",
      icon: <FileTextOutlined style={iconStyle} />,
    },
    {
      key: "/admin/messageTitle",
      label: "Quản lý nội dung",
      icon: <StarOutlined style={iconStyle} />,
    },
    {
      key: "/admin/members",
      label: "Quản lý người dùng",
      icon: <AppstoreOutlined style={iconStyle} />,
    },
    {
      key: "/admin/products",
      label: "Quản lý món ăn",
      icon: <ShoppingOutlined style={iconStyle} />,
    },
  ];

  return (
    <Sider
      width={240}
      style={{
        minHeight: "100vh",
        position: "fixed",
        background: "#fff",
        borderRight: "1px solid #f0f0f0",
      }}
    >
      {/* Logo */}
      <div
        style={{
          textAlign: "center",
          padding: "48px 0 12px 0",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "inline-block",
            width: 250,
            height: 100,
          }}
        >
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: "100%",
              height: "100%",
              color: "red",
              objectFit: "contain",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontWeight: "bold",
              color: "#000",
              fontSize: 16,
            }}
          >
            GIANG MỸ
          </div>
        </div>
      </div>

      {/* Menu */}
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        style={{
          borderRight: 0,
          marginTop: 10,
          fontSize: 16,
          fontWeight: 500,
        }}
      >
        {menuItems.map((item) => (
          <Menu.Item
            key={item.key}
            icon={item.icon}
            style={{
              height: 45,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link to={item.key}>{item.label}</Link>
          </Menu.Item>
        ))}
        <style>
          {`
          .ant-menu-item {
            transition: all 0.3s ease !important;
          }
          .ant-menu-item a {
            color: #333 !important;
          }
          .ant-menu-item:hover {
            background-color: #e6f4ff !important;
            transform: translateX(4px);
          }
          .ant-menu-item-selected {
            background-color: #e6f4ff !important;
          }
          .ant-menu-item-selected a {
            color: #1677ff !important;
            font-weight: 600;
          }
        `}
        </style>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
