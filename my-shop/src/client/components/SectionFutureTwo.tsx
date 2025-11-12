import SectionBanner from "../../assets/images/Frame 288.png";
import FoodCard from "./FoodCard";

const SectionFutureTwo = () => {
  return (
    <section className="relative w-full overflow-hidden h-full">
      <img
        src={SectionBanner}
        alt="Section Banner"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-lime-600/80"></div>
      <div className="relative z-10 h-full px-10 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 items-center">
        <div className="text-white max-w-full p-48">
          <h1 className="text-3xl md:text-6xl font-extrabold leading-loose uppercase mb-4 mr-32 ">
            Khuyến mãi hot trong tuần
          </h1>
          <p className="text-white/80 text-sm md:text-lg leading-relaxed">
            Lectus ipsum dis eu enim lacus nunc. Duis pellentesque felis sit
            commodo mattis cras mattis netus. Sagittis id diam eu eu. Varius
            pellentesque ac congue in. Arcu venenatis tortor rhoncus tellus
            felis pellentesque at. Eu eget pellentesque suspendisse vitae amet
            tellus felis pellentesque at. Eu eget pellentesque.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-16">
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
        </div>
      </div>
    </section>
  );
};

export default SectionFutureTwo;
