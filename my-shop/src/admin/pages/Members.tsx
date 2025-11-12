import React, { useEffect, useState } from "react";
import { Table, Typography, message } from "antd";
import axios from "axios";
import type { ColumnsType } from "antd/es/table";

const { Title } = Typography;

export interface IMember {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  createdAt: string;
}

const API_URL = "http://localhost:3000/members";

const Members: React.FC = () => {
  const [members, setMembers] = useState<IMember[]>([]);
  const [loading, setLoading] = useState(false);

  // Lấy danh sách thành viên
  const fetchMembers = async () => {
    setLoading(true);
    try {
      const res = await axios.get<IMember[]>(API_URL);
      setMembers(res.data);
    } catch (error) {
      console.error(error);
      message.error("Không thể tải danh sách thành viên");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const columns: ColumnsType<IMember> = [
    {
      title: "STT",
      key: "index",
      width: 80,
      render: (_, __, index) => index + 1,
    },
    {
      title: "Họ và tên",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text: string) =>
        new Date(text).toLocaleDateString("vi-VN", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <Title level={3}>Danh sách thành viên</Title>
      <Table
        dataSource={members}
        columns={columns}
        rowKey="id"
        loading={loading}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default Members;
