import React, { useState } from "react";
import { Modal, Form, Input, Button, Typography } from "antd";
import axios from "axios";
import { toast } from "react-toastify";

const { Title } = Typography;

export interface IMember {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  createdAt: string;
}

interface ModalMemberProps {
  isOpen: boolean;
  onClose: () => void;
}

const API_URL = "http://localhost:3000/members";

const ModalMember: React.FC<ModalMemberProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = async (values: any) => {
    try {
      setLoading(true);

      // Lấy danh sách thành viên hiện tại
      const res = await axios.get<IMember[]>(API_URL);
      const existingMember = res.data.find(
        (member) => member.email.toLowerCase() === values.email.toLowerCase()
      );

      if (existingMember) {
        toast.error("Email này đã được đăng ký!");
        return; // không tiếp tục thêm
      }

      // Nếu email chưa tồn tại thì tạo mới
      const newMember: IMember = {
        id: Date.now().toString(),
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        createdAt: new Date().toISOString(),
      };

      await axios.post(API_URL, newMember);

      toast.success("Đăng ký thành viên thành công!");
      form.resetFields();
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Có lỗi xảy ra, vui lòng thử lại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title={<Title level={4}>Đăng ký thành viên</Title>}
      open={isOpen}
      onCancel={onClose}
      footer={null}
      destroyOnClose
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Họ và tên"
          name="fullName"
          rules={[{ required: true, message: "Nhập họ và tên" }]}
        >
          <Input placeholder="Nhập họ và tên" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Nhập email" },
            { type: "email", message: "Email không hợp lệ" },
          ]}
        >
          <Input placeholder="Nhập email" />
        </Form.Item>

        <Form.Item
          label="Số điện thoại"
          name="phone"
          rules={[{ required: true, message: "Nhập số điện thoại" }]}
        >
          <Input placeholder="Nhập số điện thoại" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalMember;
