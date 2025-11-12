import React from "react";
import type { FoodCardProps } from "../../types/IFood";
const FoodCard: React.FC<FoodCardProps> = ({
  id,
  image,
  discount,
  price,
  oldPrice,
  name,
}) => {
  return (
    <div  key={id} className="relative bg-white rounded-tl-[60px] rounded-br-[60px] overflow-hidden shadow-md w-full max-w-[250px] h-[400px]">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-[480px] object-cover" />
        {discount && (
          <div className="absolute top-4 left-6 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
            {discount}
          </div>
        )}
      </div>
      <div className="bg-gradient-to-t from-black/80 to-transparent text-white p-4 absolute bottom-0 left-0 w-full">
        <div className="text-xl text-center">
          <span className="font-semibold text-white text-center">{price}</span>
          {oldPrice && (
            <span className="text-gray-300 line-through text-xs text-red-400 ml-2 text-center">
              {oldPrice}
            </span>
          )}
        </div>
        <p className="text-sm font-semibold mt-1 text-center">{name}</p>
      </div>
    </div>
  );
};
export default FoodCard;
