import React, { useEffect, useState } from "react";

import axios from "axios";
import ComboCard from "../ComboCard";
import { toast } from "react-toastify";

export interface IProduct {
  id: string;
  image: string;
  name: string;
  price: number;
  oldPrice: number;
}

const TatCaTab = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/products");
        setProducts(res.data);
        console.log("data", res.data);
      } catch (error) {
        console.error("Lỗi khi tải sản phẩm:", error);
        toast.error("Không thể tải danh sách sản phẩm!");
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full flex justify-center mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => {
          const discountPercent = Math.round(
            ((product.oldPrice - product.price) / product.oldPrice) * 100
          );

          return (
            <ComboCard
              key={product.id}
              image={product.image}
              discountPercent={discountPercent}
              title={product.name}
              price={product.price}
              originalPrice={product.oldPrice}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TatCaTab;
