import React from "react";
import {
  Modal,
  Form,
  Input,
  InputNumber,
  Button,
  DatePicker,
  TimePicker,
  Select,
  Grid,
} from "antd";
import { ClockCircleOutlined, CalendarOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import axios from "axios";
import type { IBooking } from "../../types/IBooking";
import { toast } from "react-toastify";

const { useBreakpoint } = Grid;

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [form] = Form.useForm<IBooking>();
  const screens = useBreakpoint();

  const branches = [
    { value: "co_so_1", label: "Cơ sở 1 - Quận 1" },
    { value: "co_so_2", label: "Cơ sở 2 - Quận 3" },
    { value: "co_so_3", label: "Cơ sở 3 - Gò Vấp" },
  ];

  const inputStyle = { backgroundColor: "transparent" };
  const buttonStyle = { backgroundColor: "#8bc34a", borderColor: "#8bc34a" };

  const handleSubmit = async (values: IBooking) => {
    try {
      const payload = {
        ...values,
        date: values.date.format("YYYY-MM-DD"),
        time: values.time.format("HH:mm"),
      };
      await axios.post("http://localhost:3000/booking", payload);
      toast.success("Đặt bàn thành công !")

      setTimeout(() => {
        form.resetFields();
        onClose();
      }, 200);
    } catch (error) {
      console.error(error);
      toast.error("Có lỗi xảy ra, vui lòng thử lại!");
    }
  };

  return (
    <Modal
      width={screens.md ? 980 : "90%"}
      title={
        <div className="text-center pt-4">
          <h2 className="text-5xl font-bold text-lime-700 m-0">
            KHÁCH HÀNG ĐĂNG KÝ ĐẶT BÀN
          </h2>
          <p className="text-base text-gray-600 mt-2 mb-0">
            Vui lòng đặt bàn trước giờ dùng bữa ít nhất 10 phút
          </p>
        </div>
      }
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{ people: 1 } as IBooking}
        className="mt-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          <div>
            <Form.Item
              label={
                <span className="font-bold text-base">
                  Họ và tên<span className="text-red-500">*</span>
                </span>
              }
              name="name"
              rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
              className="mb-4"
            >
              <Input
                placeholder="Nhập họ và tên"
                size="large"
                className="rounded-none"
                style={inputStyle}
              />
            </Form.Item>

            <Form.Item
              label={
                <span className="font-bold text-base">
                  Email<span className="text-red-500">*</span>
                </span>
              }
              name="email"
              rules={[
                { required: true, message: "Vui lòng nhập Email!" },
                { type: "email", message: "Email không hợp lệ!" },
              ]}
              className="mb-4"
            >
              <Input
                placeholder="Nhập email"
                size="large"
                className="rounded-none"
                style={inputStyle}
              />
            </Form.Item>

            <Form.Item
              label={
                <span className="font-bold text-base">
                  Ngày<span className="text-red-500">*</span>
                </span>
              }
              name="date"
              rules={[
                { required: true, message: "Vui lòng chọn ngày đặt bàn!" },
              ]}
              className="mb-4"
            >
              <DatePicker
                placeholder="Chọn ngày đặt bàn"
                size="large"
                className="rounded-none w-full"
                format="DD/MM/YYYY"
                suffixIcon={<CalendarOutlined style={{ color: "#52c41a" }} />}
                disabledDate={(current) =>
                  current && current < dayjs().startOf("day")
                }
                style={inputStyle}
              />
            </Form.Item>
          </div>

          <div>
            <Form.Item
              label={
                <span className="font-bold text-base">
                  Số điện thoại<span className="text-red-500">*</span>
                </span>
              }
              name="phone"
              rules={[
                { required: true, message: "Vui lòng nhập số điện thoại!" },
                {
                  pattern: /^\d{10,11}$/,
                  message: "Số điện thoại không hợp lệ!",
                },
              ]}
              className="mb-4"
            >
              <Input
                placeholder="Nhập số điện thoại"
                size="large"
                className="rounded-none"
                style={inputStyle}
              />
            </Form.Item>

            <Form.Item
              label={
                <span className="font-bold text-base">
                  Số lượng khách<span className="text-red-500">*</span>
                </span>
              }
              name="people"
              rules={[
                { required: true, message: "Vui lòng nhập số lượng khách!" },
              ]}
              className="mb-4"
            >
              <InputNumber
                min={1}
                placeholder="Nhập số lượng khách"
                className="rounded-none w-full"
                size="large"
                controls={false}
                style={inputStyle}
              />
            </Form.Item>

            <Form.Item
              label={
                <span className="font-bold text-base">
                  Giờ<span className="text-red-500">*</span>
                </span>
              }
              name="time"
              rules={[
                { required: true, message: "Vui lòng chọn giờ đặt bàn!" },
              ]}
              className="mb-4"
            >
              <TimePicker
                placeholder="Chọn giờ đặt bàn"
                size="large"
                className="rounded-none w-full"
                format="HH:mm"
                minuteStep={5}
                suffixIcon={
                  <ClockCircleOutlined style={{ color: "#52c41a" }} />
                }
                style={inputStyle}
              />
            </Form.Item>
          </div>
        </div>

        <Form.Item
          label={
            <span className="font-bold text-base">
              Cơ sở<span className="text-red-500">*</span>
            </span>
          }
          name="branch"
          rules={[{ required: true, message: "Vui lòng chọn cơ sở!" }]}
          className="mb-4"
        >
          <Select
            placeholder="Chọn cơ sở"
            size="large"
            options={branches}
            className="rounded-none"
            style={inputStyle}
          />
        </Form.Item>

        <Form.Item
          label={<span className="font-bold text-base">Ghi chú</span>}
          name="note"
          className="mb-6"
        >
          <Input.TextArea
            placeholder="Nhập ghi chú"
            rows={4}
            size="large"
            className="rounded-none"
            style={inputStyle}
          />
        </Form.Item>

        <div className="flex justify-center mt-4">
          <Button
            type="primary"
            htmlType="submit"
            className="bg-lime-600 hover:bg-lime-700 text-white font-bold w-48 h-12 text-xl rounded-none"
            style={buttonStyle}
          >
            Đặt bàn
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default BookingModal;
