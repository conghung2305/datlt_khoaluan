import { useState } from "react";
import vector from "../../assets/images/Vector.png";
import BookingModal from "./BookingModal";
import ContactModal from "./ContactModal";
import LoginModal from "./LoginModal";
import { UserOutlined } from "@ant-design/icons";
import { FiSettings } from "react-icons/fi";
const Header = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 bg-black bg-opacity-40 text-white w-full">
        <nav className="flex justify-center items-center py-3 space-x-16 text-sm tracking-wider text-white relative">
          {/* Menu links */}
          <a href="#" className="hover:text-yellow-400 transition text-white">
            THỰC ĐƠN
          </a>
          <a href="#" className="hover:text-yellow-400 transition text-white">
            TIN TỨC
          </a>
          <a
            onClick={() => setIsBookingModalOpen(true)}
            className="hover:text-yellow-400 transition cursor-pointer text-white"
          >
            ĐẶT BÀN
          </a>

          {/* Logo */}
          <div className="relative w-24 h-20 flex items-center justify-center mx-6">
            <img
              src={vector}
              alt="Giang Mỹ Logo"
              className="w-48 h-48 object-contain z-0 opacity-90"
            />
            <span className="absolute text-white font-bold text-xs uppercase tracking-widest z-10">
              GIANG MỸ
            </span>
          </div>

          <a href="#" className="hover:text-yellow-400 transition text-white">
            GIỚI THIỆU
          </a>
          <a href="#" className="hover:text-yellow-400 transition text-white">
            TUYỂN DỤNG
          </a>
          <a
            onClick={() => setIsContactModalOpen(true)}
            className="hover:text-yellow-400 transition cursor-pointer text-white"
          >
            LIÊN HỆ
          </a>

          {/* Nút User hình tròn */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className={`w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white 
              hover:bg-green-700 transition focus:outline-green-600 focus:ring-0`}
              >
                <UserOutlined className="text-xl" />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-60 bg-white text-black rounded shadow-lg overflow-hidden z-50">
                  <button
                    className="flex items-center gap-2 w-full text-left text-xl px-4 py-2 hover:bg-gray-300"
                    onClick={() => {
                      setIsLoginOpen(true);
                      setIsUserMenuOpen(false);
                    }}
                  >
                    <FiSettings className="text-lg" />
                    Trang quản trị
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Modals */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Header;
