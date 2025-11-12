import React from "react";
import { Form, Input, Button } from "antd";
import type { IMessage } from "../../types/IMessageTitle";


interface MessageFormProps {
  initialValues?: IMessage;
  onSubmit: (values: IMessage) => void;
}

const MessageForm: React.FC<MessageFormProps> = ({ initialValues, onSubmit }) => {
  const [form] = Form.useForm();

const handleFinish = (values: any) => {
  const message: IMessage = {
    id: initialValues?.id?.toString() || Date.now().toString(), // đảm bảo id là string
    text: values.text,
    subText: values.subText,
  };
  onSubmit(message);
  form.resetFields();
};


  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={initialValues}
      onFinish={handleFinish}
    >
      <Form.Item
        label="Tiêu đề"
        name="text"
        rules={[{ required: true, message: "Nhập tiêu đề" }]}
      >
        <Input placeholder="Nhập tiêu đề" />
      </Form.Item>

      <Form.Item
        label="Nội dung"
        name="subText"
        rules={[{ required: true, message: "Nhập nội dung" }]}
      >
        <Input.TextArea placeholder="Nhập nội dung" rows={4} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Lưu
        </Button>
        <Button
          style={{ marginLeft: 8 }}
          onClick={() => form.resetFields()}
        >
          Hủy
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MessageForm;
