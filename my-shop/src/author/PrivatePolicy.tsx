import React, { type JSX } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const token = localStorage.getItem("token"); // kiểm tra token
  if (!token) {
    return <Navigate to="/" replace />; // chưa đăng nhập -> chuyển về trang chủ
  }
  return children;
};

export default PrivateRoute;
