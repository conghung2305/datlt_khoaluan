import React, { useState } from "react";
import { Input } from "antd";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BottomBanner from "../components/BottomBanner";

interface IJob {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

const jobsData: IJob[] = [
  {
    id: "1",
    title: "Đầu bếp",
    department: "Bếp",
    location: "Hà Nội",
    type: "Full-time",
    description: "Chuẩn bị nguyên liệu, nấu món ăn, đảm bảo chất lượng món.",
  },
  {
    id: "2",
    title: "Phục vụ bàn",
    department: "Phục vụ",
    location: "Hà Nội",
    type: "Part-time",
    description: "Chăm sóc khách hàng, phục vụ đồ ăn thức uống, dọn dẹp bàn.",
  },
  {
    id: "3",
    title: "Shipper",
    department: "Giao hàng",
    location: "Hồ Chí Minh",
    type: "Full-time",
    description: "Giao đồ ăn đúng giờ, đảm bảo an toàn và chất lượng món.",
  },
  {
    id: "4",
    title: "Thu ngân",
    department: "Thu ngân",
    location: "Đà Nẵng",
    type: "Full-time",
    description: "Thanh toán, quản lý hóa đơn và hỗ trợ khách hàng.",
  },
];

const RecruitmentPage: React.FC = () => {
  const [filter, setFilter] = useState<string>("");

  // Filter realtime theo title hoặc department
  const filteredJobs = jobsData.filter(
    (job) =>
      job.title.toLowerCase().includes(filter.toLowerCase()) ||
      job.department.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="w-screen overflow-x-hidden h-screen">
      <Header />
      <BottomBanner />

      <h1 className="text-3xl font-bold mb-6 mt-6 text-center text-red-600">
        Tuyển dụng
      </h1>

      <div className="flex justify-center mb-6">
        <Input
          placeholder="Tìm kiếm vị trí hoặc bộ phận..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          allowClear
          style={{ maxWidth: 400 }}
        />
      </div>

      {/* Hiển thị box theo kết quả search */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mb-8">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="border rounded-xl shadow p-6 hover:shadow-lg transition bg-yellow-50"
            >
              <h2 className="text-xl font-semibold mb-2 text-red-700">
                {job.title}
              </h2>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Bộ phận:</span> {job.department}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Địa điểm:</span> {job.location}
              </p>
              <p className="text-gray-600 mb-3">
                <span className="font-medium">Loại hình:</span> {job.type}
              </p>
              <p className="text-gray-700 mb-4">{job.description}</p>
              <div className="flex gap-2">
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                  Xem chi tiết
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                  Ứng tuyển
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-2 text-gray-500">
            Không có vị trí phù hợp
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default RecruitmentPage;
