// src/components/CarCard.jsx
import React from "react";
import { Heart, HeartOff } from "lucide-react";

const CarCard = ({ car, isWishlisted, onToggleWishlist }) => {
  return (
    <div className="border p-4 rounded-xl shadow-lg flex flex-col items-center gap-4">
      <img src={car.image} alt={car.name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-xl font-semibold">{car.name}</h2>
      <p className="text-gray-600">{car.brand}</p>
      <p className="font-bold">{car.price}</p>
      <button onClick={() => onToggleWishlist(car.id)} className="text-red-500">
        {isWishlisted ? <HeartOff size={24} /> : <Heart size={24} />}
      </button>
    </div>
  );
};

export default CarCard;
