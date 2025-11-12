import React, { useEffect, useState } from "react";
import { Table, Space, message, Input, Row, Col, Modal } from "antd";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";
import dayjs from "dayjs";
import type { IMember } from "../../types/IMembers";

const { Search } = Input;

export interface IBooking {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  people: number;
  branch: string;
  note?: string;
}
interface DataType extends IBooking {
  key: string;
  dateObj: dayjs.Dayjs;
  timeObj: dayjs.Dayjs;
}

const Booking: React.FC = () => {
  const [members, setMembers] = useState<IMember[]>([]);
  const [data, setData] = useState<DataType[]>([]);
  const [filteredData, setFilteredData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleDelete = async (record: DataType) => {
    const confirmDelete = window.confirm(
      `Bạn có chắc chắn muốn xóa đặt bàn của ${record.name} (${record.phone}) không?`
    );
    if (!confirmDelete) return;
    try {
      await axios.delete(`http://localhost:3000/booking/${record.id}`);
      message.success("Xóa đặt bàn thành công!");
      const updatedData = data.filter((item) => item.id !== record.id);
      setData(updatedData);
      setFilteredData(updatedData);
    } catch (error) {
      console.error(error);
      message.error("Xóa thất bại, vui lòng thử lại!");
    }
  };

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await axios.get<IMember[]>("http://localhost:3000/members");
        setMembers(res.data);
      } catch (error) {
        console.error(error);
        message.error("Không thể tải danh sách thành viên");
      }
    };

    fetchMembers();
  }, []);

  const columns: ColumnsType<DataType> = [
    { title: "Họ và tên", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Số điện thoại", dataIndex: "phone", key: "phone" },
    {
      title: "Ngày đặt",
      dataIndex: "dateObj",
      key: "date",
      render: (date: dayjs.Dayjs) =>
        date.isValid() ? date.format("YYYY-MM-DD") : "-",
    },
    {
      title: "Giờ đặt",
      dataIndex: "timeObj",
      key: "time",
      render: (time: dayjs.Dayjs) =>
        time.isValid() ? time.format("HH:mm") : "-",
    },
    { title: "Số lượng", dataIndex: "people", key: "people" },
    { title: "Chi nhánh", dataIndex: "branch", key: "branch" },
    { title: "Ghi chú", dataIndex: "note", key: "note" },
    {
      title: "Loại khách",
      key: "type",
      render: (_, record) => {
        const isMember = members.some(
          (member) =>
            member.email.toLowerCase() === record.email.toLowerCase() && member.phone === record.phone
        );
        return isMember ? "Thành viên" : "Khách vãng lai";
      },
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => message.info(`Xem chi tiết: ${record.name}`)}>
            Xem
          </a>
          <a onClick={() => handleDelete(record)} style={{ color: "red" }}>
            Xóa
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
        const dataWithKey: DataType[] = response.data.map((item, index) => ({
          ...item,
          key: item.id || index.toString(),
          dateObj: dayjs(item.date, "YYYY-MM-DD"),
          timeObj: dayjs(item.time, "HH:mm"),
        }));

        setData(dataWithKey);
        setFilteredData(dataWithKey);
      } catch (error) {
        console.error(error);
        message.error("Không thể tải danh sách đặt bàn");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value.trim() === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        item.phone.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <Row justify="end" style={{ marginBottom: 16 }}>
        <Col>
          <Search
            placeholder="Tìm theo số điện thoại"
            allowClear
            value={searchValue}
            onChange={handleSearchChange}
            style={{ width: 250 }}
          />
        </Col>
      </Row>

      <Table<DataType>
        columns={columns}
        dataSource={filteredData}
        loading={loading}
        pagination={{ pageSize: 8 }}
      />
    </div>
  );
};

export default Booking;
