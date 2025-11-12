import { FaLeaf, FaMobileAlt, FaUtensils, FaConciergeBell } from "react-icons/fa";

const FeatureSection = () => {
  return (
    <section className="w-full bg-[#f9f7f3] py-[84px] px-4">
      {/* Tiêu đề */}
      <h2 className="text-center text-[#0d4b0d] text-2xl md:text-6xl font-extrabold tracking-wide mb-12">
        LẨU HẤP THỦY NHIỆT NGON & KHÔNG SỢ BÉO
      </h2>

      {/* Các ô nội dung */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center justify-items-stretch">
        {/* Box 1 */}
        <div className="flex flex-col items-center justify-between bg-white rounded-2xl shadow-md p-6 h-full">
          <FaLeaf className="text-8xl text-lime-700 mb-4" />
          <p className="text-gray-700 text-xl leading-relaxed">
            Không dầu mỡ, không chiên rán, healthy, tốt cho sức khỏe
          </p>
        </div>

        {/* Box 2 */}
        <div className="flex flex-col items-center justify-between bg-white rounded-2xl shadow-md p-6 h-full">
          <FaMobileAlt className="text-8xl text-lime-700 mb-4" />
          <p className="text-gray-700 text-xl leading-relaxed">
            Công nghệ hấp số 1 Hồng Kông giúp giữ được nguyên vẹn vitamin và dưỡng chất
          </p>
        </div>

        {/* Box 3 */}
        <div className="flex flex-col items-center justify-between bg-white rounded-2xl shadow-md p-6 h-full">
          <FaUtensils className="text-8xl text-lime-700 mb-4" />
          <p className="text-gray-700 text-xl leading-relaxed">
            Không gian phong cách Hồng Kông sang trọng, hiện đại, tha hồ check-in
          </p>
        </div>

        {/* Box 4 */}
        <div className="flex flex-col items-center justify-between bg-white rounded-2xl shadow-md p-6 h-full">
          <FaConciergeBell className="text-8xl text-lime-700 mb-4" />
          <p className="text-gray-700 text-xl leading-relaxed">
            Phục vụ tận tình: Chu đáo, luôn đặt khách hàng là trung tâm
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
