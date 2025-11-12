import React, { useState } from "react";
import {
  FaUserCircle,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaHome,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderAdmin: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const iconColor = "#000000";
  return (
    <header className="w-full flex justify-between items-center h-16 px-6 bg-white shadow-4xl border-b border-gray-200">
      <div className="flex items-center">
        <img src="/logo192.png" alt="Logo" className="h-10 mr-3" />
        <h2 className="text-xl font-bold ml-44">TRANG QUẢN TRỊ</h2>
      </div>
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="focus:outline-none"
        >
          <FaUserCircle size={32} />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-44 bg-white shadow-xl rounded-md border border-gray-200 z-50">
            <ul className="py-1">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                <FaUser color={iconColor} /> Profile
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                <FaCog color={iconColor} /> Settings
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                <FaSignOutAlt color={iconColor} /> Logout
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                <FaHome color={iconColor} />
                <Link to="/" className="w-full block">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
export default HeaderAdmin;
