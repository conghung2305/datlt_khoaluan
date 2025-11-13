import React, { useState } from "react";

interface ComboCardProps {
  image: string;
  discountPercent?: number;
  title: string;
  price: number;
  originalPrice?: number;
}

const ComboCard: React.FC<ComboCardProps> = ({
  image,
  discountPercent,
  title,
  price,
  originalPrice,
}) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-64 overflow-hidden shadow-md border rounded-tl-[28px] rounded-br-[28px] relative">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-40 object-cover" />

        {/* Discount */}
        {discountPercent && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {discountPercent}%
          </div>
        )}

        {/* Heart icon */}
        <div
          className="absolute top-2 right-2 cursor-pointer"
          onClick={() => setLiked(!liked)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={liked ? "red" : "none"}
            viewBox="0 0 24 24"
            stroke="red"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.682l-7.682-7.682a4.5 4.5 0 010-6.364z"
            />
          </svg>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-sm font-medium">{title}</h3>
        <div className="flex items-center gap-2">
          <span className="text-red-500 font-bold text-lg">
            {price.toLocaleString()}₫
          </span>
          {originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              {originalPrice.toLocaleString()}₫
            </span>
          )}
        </div>
        <button className="mt-2 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};

export default ComboCard;
