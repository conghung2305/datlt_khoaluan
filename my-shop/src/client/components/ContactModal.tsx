import React from "react";
import { Modal, Form, Input, Button, Grid } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
const { useBreakpoint } = Grid;
export interface IContact {
  name: string;
  email: string;
  phone: string;
  address?: string;
  content: string;
}
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [form] = Form.useForm();
  const screens = useBreakpoint();
  const handleSubmit = async (values: IContact) => {
    try {
      await axios.post("http://localhost:3000/contact", values);
      toast.success("Gửi liên hệ thành công !")
      form.resetFields();
      onClose();
    } catch (error: any) {
        toast.error("Gửi liên hệ thất bại !")
      console.error(error);
    }
  };

  const formItemLayout = {
    style: { marginBottom: screens.sm ? "16px" : "12px" },
  };

  const modalPadding = "32px";
  const inputStyle = { backgroundColor: "transparent" };

  return (
    <Modal
      width={screens.md ? 980 : "90%"}
      title={
        <div
          style={{
            paddingTop: "16px",
          }}
        >
          <h2 className="text-4xl font-bold text-lime-700 m-0">LIÊN HỆ</h2>
        </div>
      }
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit} className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          <div>
            <Form.Item
              {...formItemLayout}
              label={<span className="font-bold text-sm">Họ và tên<span className="text-red-500">*</span></span>}
              name="name"
              rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
            >
              <Input placeholder="Nhập họ và tên" size="large" className="rounded-tl-[20px] rounded-br-[20px]" style={inputStyle} />
            </Form.Item>

            <Form.Item
              {...formItemLayout}
              label={<span className="font-bold text-sm">Email<span className="text-red-500">*</span></span>}
              name="email"
              rules={[
                { required: true, message: "Vui lòng nhập Email!" },
                { type: "email", message: "Email không hợp lệ!" },
              ]}
            >
              <Input placeholder="Nhập email" size="large" className="rounded-tl-[20px] rounded-br-[20px]" style={inputStyle} />
            </Form.Item>
          </div>

          <div>
            <Form.Item
              {...formItemLayout}
              label={<span className="font-bold text-sm">Số điện thoại<span className="text-red-500">*</span></span>}
              name="phone"
              rules={[{ required: true, message: "Vui lòng nhập số điện thoại!" }]}
            >
              <Input placeholder="Nhập số điện thoại" size="large" className="rounded-tl-[20px] rounded-br-[20px]" style={inputStyle} />
            </Form.Item>

            <Form.Item
              {...formItemLayout}
              label={<span className="font-bold text-sm">Địa chỉ</span>}
              name="address"
            >
              <Input placeholder="Nhập địa chỉ" size="large" className="rounded-tl-[20px] rounded-br-[20px]" style={inputStyle} />
            </Form.Item>
          </div>
        </div>

        <Form.Item
          label={<span className="font-bold text-sm">Nội dung<span className="text-red-500">*</span></span>}
          name="content"
          rules={[{ required: true, message: "Vui lòng nhập nội dung liên hệ!" }]}
          style={{ marginBottom: "24px" }}
        >
          <Input.TextArea placeholder="Nhập nội dung" rows={6} size="large" className="rounded-tl-[20px] rounded-br-[20px]" style={inputStyle} />
        </Form.Item>

        <div className="pb-4">
          <Button
            type="primary"
            htmlType="submit"
            className="bg-lime-600 hover:bg-lime-700 text-white font-bold h-12 px-8 rounded-tl-[20px] rounded-br-[20px] text-base"
            style={{ backgroundColor: "#8bc34a", borderColor: "#8bc34a" }}
          >
            Gửi liên hệ
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default ContactModal;
