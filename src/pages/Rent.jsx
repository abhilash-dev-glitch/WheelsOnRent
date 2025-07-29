import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCars } from "../api/cars";

const Rent = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchCars().then((data) => {
      const selectedCar = data.find((car) => car.id === parseInt(id));
      setCar(selectedCar);
    });
  }, [id]);

  const getDays = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diff = (end - start) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };

  const rentalDays = getDays();
  const baseAmount = car ? rentalDays * car.pricePerDay : 0;
  const gstAmount = baseAmount * 0.18;
  const totalAmount = baseAmount + gstAmount;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !startDate || !endDate) {
      alert("Please fill in all fields.");
      return;
    }
    alert(`Rental confirmed for ${car.name}!\nTotal: ₹${totalAmount.toFixed(2)}`);
  };

  if (!car) return <p className="text-center mt-10">Loading car details...</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10cbg-white dark:bg-gray-900 ">
      <h2 className="text-3xl font-bold mb-6">Rent {car.name}</h2>

      <div className="flex flex-col sm:flex-row gap-8">
        {/* Car Info */}
        <img
          src={car.image}
          alt={car.name}
          className="w-full sm:w-1/2 h-64 object-cover rounded-lg"
        />

        {/* Billing Summary */}
        <div className="space-y-3 sm:w-1/2">
          <p><span className="font-semibold dark:text-gray-400">Brand:</span> {car.brand}</p>
          <p><span className="font-semibold dark:text-gray-400">Price/Day:</span> ₹{car.pricePerDay}</p>
          <p><span className="font-semibold dark:text-gray-400">Rental Days:</span> {rentalDays} days</p>
          <p><span className="font-semibold dark:text-gray-400">Base Amount:</span> ₹{baseAmount.toFixed(2)}</p>
          <p><span className="font-semibold text-yellow-700">GST (18%):</span> ₹{gstAmount.toFixed(2)}</p>
          <p className="text-green-700 font-bold text-lg">
            Total: ₹{totalAmount.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-10 space-y-6 bg-gray-50 p-6 rounded-xl shadow-md dark:bg-gray-500 dark:text-gray-900">
        <h3 className="text-xl font-semibold mb-4">Enter Rental Details</h3>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-400"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-red-500 hover:bg-red-600 text-white rounded-md font-semibold text-lg"
        >
          Rent Now
        </button>
      </form>
    </div>
  );
};

export default Rent;
