import { useEffect, useState } from "react";
import banner from "../../assets/images/banner.jpg";
import type { IMessage } from "../../types/IMessageTitle";
import axios from "axios";

const Banner = () => {
  const [latestTitle, setLatestTitle] = useState<IMessage | null>(null);

  useEffect(() => {
    const fetchTitles = async () => {
      try {
        const res = await axios.get<IMessage[]>("http://localhost:3000/title");
        if (res.data.length > 0) {
          setLatestTitle(res.data[res.data.length - 1]); 
        }
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
      }
    };
    fetchTitles();
  }, []);

  return (
    <div className="relative w-full h-[650px] overflow-hidden">
      {/* Hình nền */}
      <img src={banner} alt="Banner" className="w-full h-full object-cover" />

      {/* Lớp phủ tối nhẹ */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Nội dung */}
      {latestTitle && (
        <div className="absolute top-1/2 left-48 -translate-y-1/2 text-white">
          <h1 className="text-6xl font-extrabold uppercase leading-tight mb-4 max-w-[1280px]">
            {latestTitle.text}
          </h1>
          <p className="text-2xl font-normal mb-8 w-[800px]">
            {latestTitle.subText}
          </p>

          {/* Button */}
          <button className="text-2xl rounded-tl-[40px] rounded-br-[40px] mt-6 bg-lime-600 hover:bg-lime-700 text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 w-[200px] h-[80px]">
            Xem thêm
            <span className="text-2xl">→</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Banner;
