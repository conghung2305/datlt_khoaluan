import React, { useState } from "react";
import { Modal, Form, Input, Button, message } from "antd";
import axios from "axios";
import { toast } from "react-toastify";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3000/users", values);
      if (response.data?.token) {
        localStorage.setItem("token", response.data.token);
        toast.success("Đăng ký thành công 🎉");
        onClose();
      } else {
        message.warning("Không nhận được token từ server!");
      }
    } catch (error: any) {
      console.error(error);
      if (error.response?.status === 400) {
        toast.error("Email đã tồn tại, vui lòng đăng ký email khác!");
      } else {
        toast.error("Đăng ký thất bại, vui lòng thử lại!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title={<h2 className="text-3xl font-bold text-center">Đăng ký</h2>}
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      width={600}
    >
      <Form layout="vertical" onFinish={onFinish} className="text-lg">
        <Form.Item
          label={<span className="text-xl font-semibold">Họ và tên</span>}
          name="fullname"
          rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
        >
          <Input placeholder="Họ và tên" className="text-lg" />
        </Form.Item>

        <Form.Item
          label={<span className="text-xl font-semibold">Email</span>}
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập email!" },
            { type: "email", message: "Email không hợp lệ!" },
          ]}
        >
          <Input placeholder="Email" className="text-lg" />
        </Form.Item>

        <Form.Item
          label={<span className="text-xl font-semibold">Mật khẩu</span>}
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <Input.Password placeholder="Mật khẩu" className="text-lg" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            className="text-lg h-12"
            loading={loading}
          >
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default RegisterModal;
