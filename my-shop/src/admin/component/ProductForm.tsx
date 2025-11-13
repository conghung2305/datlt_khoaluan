import React, { useEffect } from "react";
import { Form, Input } from "antd";
import type { IProduct } from "../../types/IProduct";


interface ProductFormProps {
  initialValues?: IProduct;
  onFinish: (values: IProduct) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ initialValues, onFinish }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    } else {
      form.resetFields();
    }
  }, [initialValues, form]);

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={(values) => onFinish(values as IProduct)}
    >
      <Form.Item
        label="Tên sản phẩm"
        name="name"
        rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm" }]}
      >
        <Input placeholder="Nhập tên sản phẩm" />
      </Form.Item>

      <Form.Item
        label="Giá"
        name="price"
        rules={[{ required: true, message: "Vui lòng nhập giá" }]}
      >
        <Input type="number" placeholder="Nhập giá" />
      </Form.Item>

      <Form.Item label="Giá cũ" name="oldPrice">
        <Input type="number" placeholder="Nhập giá cũ (nếu có)" />
      </Form.Item>

      {/* 🆕 Thêm input ảnh */}
      <Form.Item
        label="Ảnh sản phẩm (URL)"
        name="image"
        rules={[{ required: true, message: "Vui lòng nhập link ảnh" }]}
      >
        <Input placeholder="https://picsum.photos/200" />
      </Form.Item>
    </Form>
  );
};

export default ProductForm;
