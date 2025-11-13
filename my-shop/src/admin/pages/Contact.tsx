import React, { useEffect, useState } from "react";
import { Table, Space, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";

// Interface riêng của bạn
export interface IContact {
  name: string;
  email: string;
  phone: string;
  address?: string;
  content: string;
}

// Thêm key để Table hiển thị
interface DataType extends IContact {
  key: string;
}

// Columns cho Ant Design Table
const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Content",
    dataIndex: "content",
    key: "content",
  },
  // {
  //   title: "Action",
  //   key: "action",
  //   render: (_, record) => (
  //     <Space size="middle">
  //       <a>View</a>
  //       <a>Delete</a>
  //     </Space>
  //   ),
  // },
];

const Contact: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Gọi API riêng của bạn
        const response = await axios.get<IContact[]>("http://localhost:3000/contact");

        // Thêm key cho mỗi item
        const dataWithKey = response.data.map((item, index) => ({
          key: index.toString(),
          ...item,
        }));

        setData(dataWithKey);
      } catch (error) {
        console.error(error);
        message.error("Failed to fetch contacts");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return <Table<DataType> columns={columns} dataSource={data} loading={loading} />;
};

export default Contact;
