import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Popconfirm, Input } from "antd";
import type { IProduct } from "../../../types/IProduct";
import ProductForm from "../../component/ProductForm";
import axios from "axios";
import { toast } from "react-toastify";

const { Search } = Input;

const ListProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/products");
        setProducts(res.data);
        setFilteredProducts(res.data);
      } catch (error) {
        console.error(error);
        toast.error("Không thể tải danh sách sản phẩm!");
      }
    };
    fetchProducts();
  }, []);
  useEffect(() => {
    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  const handleAddOrEditProduct = async (values: IProduct) => {
    try {
      if (editingProduct) {
        await axios.put(
          `http://localhost:3000/products/${editingProduct.id}`,
          values
        );

        setProducts((prev) =>
          prev.map((p) =>
            p.id === editingProduct.id ? { ...p, ...values } : p
          )
        );
        toast.success("Cập nhật sản phẩm thành công!");
      } else {
        const res = await axios.post("http://localhost:3000/products", values);
        setProducts((prev) => [...prev, res.data]);
        toast.success("Thêm sản phẩm thành công!");
      }

      setIsModalOpen(false);
      setEditingProduct(null);
    } catch (error) {
      console.error(error);
      toast.error("Có lỗi xảy ra khi lưu sản phẩm!");
    }
  };

  const handleEdit = (product: IProduct) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      setProducts((prev) => prev.filter((p) => p.id !== id));
      toast.success("Xóa sản phẩm thành công!");
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
      toast.error("Xóa sản phẩm thất bại!");
    }
  };

  const columns = [
    {
      title: "STT",
      key: "index",
      render: (_: any, __: IProduct, index: number) => index + 1,
      width: 80,
      align: "center" as const,
    },
    { title: "Tên sản phẩm", dataIndex: "name", key: "name" },
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      render: (image: string) =>
        image ? (
          <img
            src={image}
            alt="product"
            className="w-16 h-16 object-cover rounded"
          />
        ) : (
          "—"
        ),
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (price: number) => price.toLocaleString() + "₫",
    },
    {
      title: "Giá cũ",
      dataIndex: "oldPrice",
      key: "oldPrice",
      render: (oldPrice?: number) =>
        oldPrice ? oldPrice.toLocaleString() + "₫" : "-",
    },
    {
      title: "Hành động",
      key: "action",
      render: (_: any, record: IProduct) => (
        <div className="flex gap-2">
          <Button type="primary" onClick={() => handleEdit(record)}>
            Sửa
          </Button>
          <Popconfirm
            title="Bạn có chắc muốn xóa?"
            onConfirm={() => handleDelete(record.id)}
            okText="Xóa"
            cancelText="Hủy"
          >
            <Button danger>Xóa</Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Danh sách món ăn</h1>
      <div className="flex items-center justify-between mb-4">
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          Thêm món ăn
        </Button>
        <Input
          placeholder="Tìm sản phẩm theo tên..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: 300 }}
          allowClear
        />
      </div>

      <Table dataSource={filteredProducts} columns={columns} rowKey="id" />

      <Modal
        title={editingProduct ? "Sửa sản phẩm" : "Thêm sản phẩm"}
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
          setEditingProduct(null);
        }}
        onOk={() =>
          document
            .querySelector("form")
            ?.dispatchEvent(
              new Event("submit", { cancelable: true, bubbles: true })
            )
        }
        okText={editingProduct ? "Cập nhật" : "Thêm"}
      >
        <ProductForm
          initialValues={editingProduct || undefined}
          onFinish={handleAddOrEditProduct}
        />
      </Modal>
    </div>
  );
};

export default ListProducts;
