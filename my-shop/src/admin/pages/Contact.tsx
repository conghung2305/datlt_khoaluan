import React, { useEffect, useState } from "react";
import { Table, Input, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";

export interface IContact {
  name: string;
  email: string;
  phone: string;
  address?: string;
  content: string;
}

interface DataType extends IContact {
  key: string;
}

const Contact: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [filteredData, setFilteredData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchPhone, setSearchPhone] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get<IContact[]>("http://localhost:3000/contact");
        const dataWithKey = response.data.map((item, index) => ({
          key: index.toString(),
          ...item,
        }));
        setData(dataWithKey);
        setFilteredData(dataWithKey); // Mặc định hiển thị tất cả
      } catch (error) {
        console.error(error);
        message.error("Failed to fetch contacts");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Lọc dữ liệu theo số điện thoại khi gõ
  useEffect(() => {
    if (searchPhone.trim() === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        item.phone.includes(searchPhone)
      );
      setFilteredData(filtered);
    }
  }, [searchPhone, data]);

  const columns: ColumnsType<DataType> = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "Address", dataIndex: "address", key: "address" },
    { title: "Content", dataIndex: "content", key: "content" },
  ];

  return (
    <div className="p-4">
      <Input
        placeholder="Tìm kiếm số điện thoại..."
        value={searchPhone}
        onChange={(e) => setSearchPhone(e.target.value)}
        style={{ maxWidth: 300, marginBottom: 16 }}
        allowClear
      />
      <Table<DataType>
        columns={columns}
        dataSource={filteredData}
        loading={loading}
      />
    </div>
  );
};

export default Contact;
