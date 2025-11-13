import { useState } from "react";
import Header from "../components/Header";
import BottomBanner from "../components/BottomBanner";
import ComboCard from "../components/ComboCard";
import bg from "../../assets/images/bg-page-lsht.png";
import Footer from "../components/Footer";
import TatCaTab from "../components/products/AllProducts";
const tabContents: Record<string, React.ReactNode> = {
  lau1: (
    <div className="w-full flex justify-center mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <ComboCard
          image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
          discountPercent={30}
          title="Combo 2 Người lớn ăn thả ga"
          price={600000}
          originalPrice={800000}
        />
        <ComboCard
          image="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
          discountPercent={20}
          title="Combo 3 Người lớn"
          price={750000}
          originalPrice={950000}
        />
        <ComboCard
          image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
          discountPercent={25}
          title="Combo Gia đình 4 Người"
          price={1200000}
          originalPrice={1600000}
        />
        <ComboCard
          image="https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
          discountPercent={15}
          title="Combo 1 Người"
          price={300000}
          originalPrice={350000}
        />
        <ComboCard
          image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
          discountPercent={30}
          title="Combo 2 Người lớn ăn thả ga"
          price={600000}
          originalPrice={800000}
        />
        <ComboCard
          image="https://picsum.photos/id/305/536/354"
          discountPercent={20}
          title="Combo 3 Người lớn"
          price={750000}
          originalPrice={950000}
        />
        <ComboCard
          image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
          discountPercent={25}
          title="Combo Gia đình 4 Người"
          price={1200000}
          originalPrice={1600000}
        />
        <ComboCard
          image="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D"
          discountPercent={15}
          title="Combo 1 Người"
          price={300000}
          originalPrice={350000}
        />
      </div>
    </div>
  ),
  lau2: (
    <div className="w-full flex justify-center mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <ComboCard
          image="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8fDA%3D"
          discountPercent={30}
          title="Combo 2 Người lớn ăn thả ga"
          price={600000}
          originalPrice={800000}
        />
        <ComboCard
          image="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8fDA%3D"
          discountPercent={20}
          title="Combo 3 Người lớn"
          price={750000}
          originalPrice={950000}
        />
        <ComboCard
          image="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D"
          discountPercent={25}
          title="Combo Gia đình 4 Người"
          price={1200000}
          originalPrice={1600000}
        />
        <ComboCard
          image="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8fDA%3D"
          discountPercent={15}
          title="Combo 1 Người"
          price={300000}
          originalPrice={350000}
        />
        <ComboCard
          image="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8fDA%3D"
          discountPercent={30}
          title="Combo 2 Người lớn ăn thả ga"
          price={600000}
          originalPrice={800000}
        />
        <ComboCard
          image="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8fDA%3D"
          discountPercent={20}
          title="Combo 3 Người lớn"
          price={750000}
          originalPrice={950000}
        />
        <ComboCard
          image="https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDA%3D"
          discountPercent={25}
          title="Combo Gia đình 4 Người"
          price={1200000}
          originalPrice={1600000}
        />
        <ComboCard
          image="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D"
          discountPercent={15}
          title="Combo 1 Người"
          price={300000}
          originalPrice={350000}
        />
      </div>
    </div>
  ),
  lau4: (
    <div className="w-full flex justify-center mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <ComboCard
          image="https://plus.unsplash.com/premium_photo-1672363353881-68c8ff594e25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGZvb2R8ZW58MHx8MHx8fDA%3D"
          discountPercent={30}
          title="Combo 2 Người lớn ăn thả ga"
          price={600000}
          originalPrice={800000}
        />
        <ComboCard
          image="https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZvb2R8ZW58MHx8MHx8fDA%3D"
          discountPercent={20}
          title="Combo 3 Người lớn"
          price={750000}
          originalPrice={950000}
        />
        <ComboCard
          image="https://plus.unsplash.com/premium_photo-1675731118517-c85b8cd0904c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGZvb2R8ZW58MHx8MHx8fDA%3D"
          discountPercent={25}
          title="Combo Gia đình 4 Người"
          price={1200000}
          originalPrice={1600000}
        />
        <ComboCard
          image="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGZvb2R8ZW58MHx8MHx8fDA%3D"
          discountPercent={15}
          title="Combo 1 Người"
          price={300000}
          originalPrice={350000}
        />
        <ComboCard
          image="https://images.unsplash.com/photo-1432139509613-5c4255815697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGZvb2R8ZW58MHx8MHx8fDA%3D"
          discountPercent={30}
          title="Combo 2 Người lớn ăn thả ga"
          price={600000}
          originalPrice={800000}
        />
        <ComboCard
          image="https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGZvb2R8ZW58MHx8MHx8fDA%3D"
          discountPercent={20}
          title="Combo 3 Người lớn"
          price={750000}
          originalPrice={950000}
        />
        <ComboCard
          image="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGZvb2R8ZW58MHx8MHx8fDA%3D"
          discountPercent={25}
          title="Combo Gia đình 4 Người"
          price={1200000}
          originalPrice={1600000}
        />
        <ComboCard
          image="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D"
          discountPercent={15}
          title="Combo 1 Người"
          price={300000}
          originalPrice={350000}
        />
      </div>
    </div>
  ),
  tatca: <TatCaTab />,
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState("lau1");

  const tabs = [
    { key: "lau1", label: "LẨU 1 NGĂN" },
    { key: "lau2", label: "LẨU 2 NGĂN" },
    { key: "lau4", label: "LẨU 4 NGĂN" },
    { key: "tatca", label: "XEM TẤT CẢ" },
  ];

  return (
    <div
      className="w-screen h-screen overflow-x-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Header />
      <BottomBanner />

      <div className="flex justify-between mt-12 px-8">
        <div className="flex gap-6 items-start">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`font-bold transition px-4 py-2 rounded ${
                activeTab === tab.key
                  ? "text-yellow-400 bg-red-600 focus:outline-none"
                  : "text-gray-500 hover:text-yellow-400 focus:outline-none"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 px-8 mb-8">{tabContents[activeTab]}</div>

      <Footer />
    </div>
  );
};

export default Menu;
