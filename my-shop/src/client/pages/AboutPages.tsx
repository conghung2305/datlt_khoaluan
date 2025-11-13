import React from "react";
import Header from "../components/Header";
import BottomBanner from "../components/BottomBanner";
import Footer from "../components/Footer";


const AboutPage: React.FC = () => {
  return (
    <div className="w-screen overflow-x-hidden h-screen">
      <Header />

      {/* Banner giới thiệu */}
      <div className="relative w-full h-64 md:h-96">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1600&auto=format&fit=crop&q=80"
          alt="Giới thiệu"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Về Chúng Tôi</h1>
        </div>
      </div>

      {/* Section giới thiệu công ty */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">Chúng tôi là ai</h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center">
          Chúng tôi là một nhà hàng uy tín, chuyên cung cấp các món ăn ngon, chất lượng, phục vụ tận tâm. Với đội ngũ đầu bếp và nhân viên giàu kinh nghiệm, chúng tôi luôn cam kết mang đến trải nghiệm tuyệt vời cho khách hàng.
        </p>
      </section>

      {/* Section các điểm nổi bật */}
      <section className="bg-yellow-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 border rounded-xl hover:shadow-lg transition bg-white">
            <h3 className="text-xl font-semibold mb-2 text-red-700">Đa dạng món ăn</h3>
            <p className="text-gray-600">Chúng tôi cung cấp nhiều loại món ăn từ truyền thống đến hiện đại, đảm bảo phù hợp khẩu vị mọi khách hàng.</p>
          </div>
          <div className="text-center p-6 border rounded-xl hover:shadow-lg transition bg-white">
            <h3 className="text-xl font-semibold mb-2 text-red-700">Đội ngũ chuyên nghiệp</h3>
            <p className="text-gray-600">Nhân viên được đào tạo bài bản, phục vụ tận tâm, đảm bảo khách hàng luôn hài lòng.</p>
          </div>
          <div className="text-center p-6 border rounded-xl hover:shadow-lg transition bg-white">
            <h3 className="text-xl font-semibold mb-2 text-red-700">Chất lượng & an toàn</h3>
            <p className="text-gray-600">Nguyên liệu tươi ngon, an toàn vệ sinh thực phẩm được đảm bảo 100%.</p>
          </div>
        </div>
      </section>

      {/* Section đội ngũ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">Đội ngũ của chúng tôi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <img
              src="https://th.bing.com/th/id/OIP.T17h90Tbu-krOiMXPmqEwAHaEJ?w=318&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1"
              alt="team member"
              className="w-32 h-32 rounded-full mx-auto mb-2 object-cover"
            />
            <h4 className="font-semibold text-red-700">Nguyễn Văn A</h4>
            <p className="text-gray-600 text-sm">Đầu bếp trưởng</p>
          </div>
          <div className="text-center">
            <img
              src="https://th.bing.com/th/id/OIP.byGzIiot2PEROsp6rGS4iwHaHa?w=189&h=189&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1"
              alt="team member"
              className="w-32 h-32 rounded-full mx-auto mb-2 object-cover"
            />
            <h4 className="font-semibold text-red-700">Trần Thị B</h4>
            <p className="text-gray-600 text-sm">Quản lý phục vụ</p>
          </div>
          <div className="text-center">
            <img
              src="https://th.bing.com/th/id/OIP._QD8GqHZFG6YGwvGrB-kEwHaEJ?w=333&h=187&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1"
              alt="team member"
              className="w-32 h-32 rounded-full mx-auto mb-2 object-cover"
            />
            <h4 className="font-semibold text-red-700">Lê Văn C</h4>
            <p className="text-gray-600 text-sm">Shipper</p>
          </div>
          <div className="text-center">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.NbiGTfsMuI40b_rlwjIZZgHaJR?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=203&h=254&c=7&o=7&rm=3"
              alt="team member"
              className="w-32 h-32 rounded-full mx-auto mb-2 object-cover"
            />
            <h4 className="font-semibold text-red-700">Phạm Thị D</h4>
            <p className="text-gray-600 text-sm">Thu ngân</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
