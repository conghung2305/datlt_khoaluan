import React from "react";
import vector from "../../assets/images/Vector.png";
import xacnhanImage from "../../assets/images/pasted image 0 2.png"
import {
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const aboutLinks = [
  { label: "Thực đơn", href: "#" },
  { label: "Tin tức", href: "#" },
  { label: "Đặt bàn", href: "#" },
  { label: "Giới thiệu", href: "#" },
  { label: "Tuyển dụng", href: "#" },
  { label: "Liên hệ", href: "#" },
];

const supportLinks = [
  { label: "Hướng dẫn đặt bàn", href: "#" },
  { label: "Chính sách bảo mật", href: "#" },
  { label: "Câu hỏi thường gặp", href: "#" },
  { label: "CSKH: 1900636465", href: "tel:1900636465" },
  { label: "Phản ánh chất lượng dịch vụ", href: "#" },
  {
    label: "Email: giangmy.hotpot@gmail.com",
    href: "mailto:giangmy.hotpot@gmail.com",
  },
];

const Footer: React.FC = () => {
  const primaryColor = "#074A20";
  const secondaryColor = "#D4E8D4";
  const linkHoverColor = "#8bc34a";

  const LinkColumn: React.FC<{
    title: string;
    links: { label: string; href: string }[];
  }> = ({ title, links }) => (
    <div className="flex flex-col">
      <h3 className="text-2xl font-bold mb-4" style={{ color: secondaryColor }}>
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-lg font-light transition-colors duration-200"
              style={{ color: secondaryColor }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = linkHoverColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = secondaryColor)
              }
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="w-full" style={{ backgroundColor: primaryColor }}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white">
        {/* Flex container dàn đều 3 cột */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 pb-10 border-b border-gray-700 w-full">
          {/* Cột 1: Logo + Giới thiệu */}
          <div className=" w-1/3 space-y-4 ">
            <div className="relative w-24 h-20 flex items-center justify-center">
              <img
                src={vector}
                alt="Giang Mỹ Logo"
                className="w-48 h-48 object-contain z-0 opacity-90"
              />
              <span className="absolute text-white font-bold text-xs uppercase tracking-widest z-10">
                GIANG MỸ
              </span>
            </div>

            <p
              className="text-lg font-light pt-2"
              style={{ color: secondaryColor }}
            >
              Đến với Giang Mỹ Hotpot quý khách sẽ được trải nghiệm từ không
              gian, món ăn cho đến dịch vụ mà không ở đâu có được.
            </p>

            <p className="text-base pt-2" style={{ color: secondaryColor }}>
              Giấy phép ĐKKD số 01123456789 do Phòng Tài chính Kế hoạch - UBND
              quận Hai Bà Trưng cấp ngày 01/01/2020
            </p>

            <div className="pt-2">
              <img
                src={xacnhanImage}
                alt="Bộ thông báo đã đăng ký"
                className="w-60 h-24 "
              />
            </div>
          </div>

          {/* Cột 2: Về Giang Mỹ */}
          <div className="w-1/3 flex justify-center items-center">
            <LinkColumn title="Về Giang Mỹ" links={aboutLinks} />
          </div>

          {/* Cột 3: Hỗ trợ */}
          <div className="justify-center items-center">
            <LinkColumn title="Hỗ trợ" links={supportLinks} />
          </div>
        </div>

        {/* Footer dưới */}
        <div className="flex flex-col md:flex-row justify-center items-center pt-6">
          <p className="text-sm order-2 md:order-1  md:mt-0 mr-8">
            Giang Mỹ Hotpot. Copyright ©2023 - Design by Aladin Technology
            Company
          </p>

          <div className="flex space-x-3 order-1 md:order-2">
            {/* Facebook */}
            <a
              href="#"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
              style={{ backgroundColor: "#1877F2", color: "#fff" }}
            >
              <FacebookOutlined />
            </a>

            {/* Twitter */}
            <a
              href="#"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
              style={{ backgroundColor: "#1DA1F2", color: "#fff" }}
            >
              <TwitterOutlined />
            </a>

            {/* Youtube */}
            <a
              href="#"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
              style={{ backgroundColor: "#FF0000", color: "#fff" }}
            >
              <YoutubeOutlined />
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
              style={{
                background: "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF)",
                color: "#fff",
              }}
            >
              <InstagramOutlined />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
