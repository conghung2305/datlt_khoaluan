import React, { useState, useEffect } from "react";
import { Table, Button, Space, Typography, Switch, Tooltip, Modal } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import type { IMessage } from "../../../types/IMessageTitle";
import MessageForm from "../../component/MessageForm";
const { Title } = Typography;
const API_URL = "http://localhost:3000/title";
const ListTitle: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [editingMessage, setEditingMessage] = useState<IMessage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Lấy danh sách bài viết
  const fetchMessages = async () => {
    setLoading(true);
    try {
      const res = await axios.get<IMessage[]>(API_URL);
      setMessages(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Không thể tải dữ liệu bài viết");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);
  const handleAddOrEdit = async (messageData: IMessage) => {
    try {
      if (editingMessage) {
        const id = messageData.id;
        await axios.patch(`${API_URL}/${id}`, {
          text: messageData.text,
          subText: messageData.subText,
        });
        toast.success("Cập nhật bài viết thành công");
      } else {
        const res = await axios.post<IMessage>(API_URL, {
          text: messageData.text,
          subText: messageData.subText,
        });
        messageData.id = res.data.id;
        toast.success("Thêm bài viết thành công");
      }

      fetchMessages();
      setIsModalOpen(false);
      setEditingMessage(null);
    } catch (error) {
      console.error(error);
      toast.error("Có lỗi xảy ra, vui lòng thử lại");
    }
  };

  // Sửa bài viết
  const handleEdit = (message: IMessage) => {
    setEditingMessage(message);
    setIsModalOpen(true);
  };

  // Xóa bài viết (dùng alert)
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Bạn có chắc muốn xóa bài viết này không?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_URL}/${id}`);
      alert("Xóa bài viết thành công!");
      fetchMessages();
    } catch (error) {
      console.error(error);
      alert("Xóa thất bại, vui lòng thử lại!");
    }
  };

  const columns = [
    {
      title: "STT",
      key: "index",
      width: 80,
      render: (_: any, __: IMessage, index: number) => index + 1, // Hiển thị số thứ tự
    },
    { title: "Tiêu đề", dataIndex: "text", key: "text" },
    { title: "Nội dung", dataIndex: "subText", key: "subText" },
    {
      title: "Hành động",
      key: "action",
      render: (_: any, record: IMessage) => (
        <Space>
          <Button type="link" onClick={() => handleEdit(record)}>
            Sửa
          </Button>
          <Button type="link" danger onClick={() => handleDelete(record.id)}>
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <Title level={3}>Quản lý bài viết</Title>

      <Tooltip title={messages.length > 0 ? "Chỉ được thêm 1 bài viết" : ""}>
        <Button
          type="primary"
          style={{ marginBottom: 16 }}
          onClick={() => setIsModalOpen(true)}
          disabled={messages.length > 0} // Vô hiệu hóa khi đã có data
        >
          Thêm bài viết
        </Button>
      </Tooltip>

      <Table
        dataSource={messages}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 5 }}
        loading={loading}
      />

      <Modal
        title={editingMessage ? "Chỉnh sửa bài viết" : "Thêm bài viết"}
        open={isModalOpen}
        footer={null}
        onCancel={() => {
          setIsModalOpen(false);
          setEditingMessage(null);
        }}
        destroyOnClose
      >
        <MessageForm
          key={editingMessage ? editingMessage.id : "new"}
          initialValues={editingMessage || undefined}
          onSubmit={handleAddOrEdit}
        />
      </Modal>
    </div>
  );
};

export default ListTitle;
