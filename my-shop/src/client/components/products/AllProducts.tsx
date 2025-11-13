import React, { useEffect, useState } from "react";

import axios from "axios";
import ComboCard from "../ComboCard";

export interface IProduct {
  id: string;
  image: string;
  title: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
}

const TatCaTab = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Lỗi khi tải sản phẩm:", err));
  }, []);

  return (
    <div className="w-full flex justify-center mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ComboCard
            key={product.id}
            image={product.image}
            discountPercent={product.discountPercent}
            title={product.title}
            price={product.price}
            originalPrice={product.originalPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default TatCaTab;
