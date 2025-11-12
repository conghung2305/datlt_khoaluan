import React, { useEffect, useState } from "react";
import { Table, Space, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";
import dayjs from "dayjs";

// Interface của Booking
export interface IBooking {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string; // API trả string dạng "YYYY-MM-DD"
  time: string; // API trả string dạng "HH:mm"
  people: number;
  branch: string;
  note?: string;
}

// Thêm key để Table hiển thị
interface DataType extends IBooking {
  key: string;
  dateObj: dayjs.Dayjs;
  timeObj: dayjs.Dayjs;
}

// Columns cho AntD Table
const Booking: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const columns: ColumnsType<DataType> = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    {
      title: "Date",
      dataIndex: "dateObj",
      key: "date",
      render: (date: dayjs.Dayjs) =>
        date.isValid() ? date.format("YYYY-MM-DD") : "-",
    },
    {
      title: "Time",
      dataIndex: "timeObj",
      key: "time",
      render: (time: dayjs.Dayjs) =>
        time.isValid() ? time.format("HH:mm") : "-",
    },
    { title: "People", dataIndex: "people", key: "people" },
    { title: "Branch", dataIndex: "branch", key: "branch" },
    { title: "Note", dataIndex: "note", key: "note" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => message.info(`Viewing booking: ${record.name}`)}>
            View
          </a>
          <a onClick={() => message.warning(`Deleting booking: ${record.name}`)}>
            Delete
          </a>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get<IBooking[]>(
          "http://localhost:3000/booking"
        );

        // Chuyển date và time thành dayjs + thêm key
        const dataWithKey: DataType[] = response.data.map((item, index) => ({
          ...item,
          key: index.toString(),
          dateObj: dayjs(item.date, "YYYY-MM-DD"),
          timeObj: dayjs(item.time, "HH:mm"),
        }));

        setData(dataWithKey);
      } catch (error) {
        console.error(error);
        message.error("Failed to fetch bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return <Table<DataType> columns={columns} dataSource={data} loading={loading} />;
};

export default Booking;
