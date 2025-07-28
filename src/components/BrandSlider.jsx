import React from 'react';

const brands = ['All', 'Audi', 'BMW', 'Tesla', 'Toyota', 'Hyundai'];

function BrandSlider({ selected, onSelect }) {
  return (
    <div className="flex overflow-x-auto gap-4 p-4">
      {brands.map((brand) => (
        <button
          key={brand}
          onClick={() => onSelect(brand)}
          className={`px-4 py-2 rounded-full border ${
            selected === brand ? 'bg-red-500 text-white' : 'bg-gray-200'
          }`}
        >
          {brand}
        </button>
      ))}
    </div>
  );
}

export default BrandSlider;
