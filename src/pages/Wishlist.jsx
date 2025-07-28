// src/pages/Wishlist.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../features/wishlist/wishlistSlice";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <div className="text-center mt-20">
          <p className="text-gray-500 text-lg mb-6">Your wishlist is empty...</p>
          <Link to="/cars">
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-600 transition duration-200">
              Explore Options
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {wishlist.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{car.name}</h3>
              <p className="text-gray-600">{car.brand}</p>
              <p className="text-yellow-600 font-medium mt-2">
                ₹{car.pricePerDay} / day
              </p>
              <button
                className="mt-auto bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                onClick={() => handleRemove(car.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
