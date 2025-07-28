import React, { useEffect, useState } from 'react';
import BrandSlider from '../components/BrandSlider';
import CarCard from '../components/CarCard';

const mockApiUrl = 'https://mocki.io/v1/2d9a8c39-cb8c-4eec-8586-04efb17cd7f4'; // Replace with your actual car API

function CarsPage() {
  const [cars, setCars] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [brand, setBrand] = useState('All');

  useEffect(() => {
    fetch(mockApiUrl)
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setFiltered(data);
      });
  }, []);

  useEffect(() => {
    if (brand === 'All') {
      setFiltered(cars);
    } else {
      setFiltered(cars.filter((car) => car.brand === brand));
    }
  }, [brand, cars]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
        Rent Your Dream Car
      </h1>

      <BrandSlider selected={brand} onSelect={setBrand} />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {filtered.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default CarsPage;
