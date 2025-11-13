import FoodCard from "./FoodCard";
import backgroundNew from "../../assets/images/bg-page-lsht.png";

const News = () => {
  return (
    <div 
      className="w-full h-[600px] bg-cover bg-center pt-16"
      style={{ backgroundImage: `url(${backgroundNew})` }}
    >
      <div className="px-4 md:px-8 lg:px-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-black">TIN TỨC SỰ KIỆN</h1>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <FoodCard
            id="1"
            image="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGZvb2R8ZW58MHx8MHx8fDA%3D"
            discount="30%"
            price="600.000"
            oldPrice="800.000"
            name="01. KỲ NGƯ ÁP CHẢO"
          />
          <FoodCard
            id="2"
            image="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHxmb29kfGVufDB8fDB8fHww"
            discount="10%"
            price="500.000"
            oldPrice="600.000"
            name="02. MÓN KHÁC"
          />
          <FoodCard
            id="3"
            image="https://plus.unsplash.com/premium_photo-1683619761468-b06992704398?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxmb29kfGVufDB8fDB8fHww"
            discount="15%"
            price="450.000"
            oldPrice="550.000"
            name="03. MÓN THÊM"
          />
          <FoodCard
            id="4"
            image="https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxmb29kfGVufDB8fDB8fHww"
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
