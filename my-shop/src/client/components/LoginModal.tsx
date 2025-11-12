import React from "react";
import { Modal, Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FAKE_USER = {
  email: "user@example.com",
  password: "password123",
  fullname: "Người Dùng Thử",
};

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    const { email, password } = values;

    if (!email || !password) {
      message.error("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      const fakeToken = `fake-token-${Date.now()}`;
      localStorage.setItem("token", fakeToken);
      localStorage.setItem(
        "user",
        JSON.stringify({ email: FAKE_USER.email, fullname: FAKE_USER.fullname })
      );

      toast.success("Đăng nhập thành công! Đang chuyển hướng...");

      setTimeout(() => {
        onClose();
        navigate("/admin");
      }, 3000);
    } else {
      toast.error("Email hoặc mật khẩu không đúng!");
    }
  };
  return (
    <Modal
      title={<h2 className="text-3xl font-bold text-center">Đăng nhập</h2>}
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      width={600}
    >
      <Form layout="vertical" onFinish={onFinish} className="text-lg">
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
          >
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginModal;
