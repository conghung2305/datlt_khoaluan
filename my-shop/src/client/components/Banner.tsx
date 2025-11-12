import banner from "../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Hình nền */}
      <img
        src={banner}
        alt="Banner"
        className="w-full h-full object-cover"
      />

      {/* Lớp phủ tối nhẹ */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Nội dung */}
      <div className="absolute top-1/2 left-48 -translate-y-1/2 text-white">
        <h1 className="text-8xl font-extrabold uppercase leading-tight">
          BÁNH TRÁNG CAO BẰNG - UME
        </h1>

        <p className="mb-12 text-2xl font-normal">
       Cursus quisque vitae ac aliquet nullam amet ultricies quam tincidunt.
        </p>

        {/* Button */}
        <button className="text-2xl rounded-tl-[40px] rounded-br-[40px] mt-6 bg-lime-600 hover:bg-lime-700 text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 w-[200px] h-[80px]">
          Xem thêm
          <span className="text-2xl">→</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
