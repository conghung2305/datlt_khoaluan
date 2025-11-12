import FoodCard from "./FoodCard";
import backgroundNew from "../../assets/images/bg-page-lsht.png";

const News = () => {
  return (
    <div 
      className="w-full h-[700px] bg-cover bg-center pt-16"
      style={{ backgroundImage: `url(${backgroundNew})` }}
    >
      <div className="px-4 md:px-8 lg:px-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-black">TIN TỨC SỰ KIỆN</h1>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <FoodCard
            id="1"
            image="https://picsum.photos/id/237/536/354"
            discount="30%"
            price="600.000"
            oldPrice="800.000"
            name="01. KỲ NGƯ ÁP CHẢO"
          />
          <FoodCard
            id="2"
            image="https://picsum.photos/id/238/536/354"
            discount="10%"
            price="500.000"
            oldPrice="600.000"
            name="02. MÓN KHÁC"
          />
          <FoodCard
            id="3"
            image="https://picsum.photos/id/239/536/354"
            discount="15%"
            price="450.000"
            oldPrice="550.000"
            name="03. MÓN THÊM"
          />
          <FoodCard
            id="4"
            image="https://picsum.photos/id/240/536/354"
            discount="15%"
            price="450.000"
            oldPrice="550.000"
            name="04. MÓN THÊM"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
