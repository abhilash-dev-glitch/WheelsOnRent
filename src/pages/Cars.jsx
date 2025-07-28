import React, { useEffect, useState } from 'react';
import { fetchCars } from '../api/cars';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../features/wishlist/wishlistSlice';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 6;

  const wishlistItems = useSelector(state => state.wishlist.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCars().then(data => {
      setCars(data);
      setFiltered(data);
    });
  }, []);

  useEffect(() => {
    let result = cars;
    if (search) result = result.filter(car => car.name.toLowerCase().includes(search.toLowerCase()));
    if (brand) result = result.filter(car => car.brand === brand);
    if (price) {
      result = result.filter(car => {
        if (price === '<1000') return car.pricePerDay < 1000;
        if (price === '1000-3000') return car.pricePerDay >= 1000 && car.pricePerDay <= 3000;
        if (price === '>3000') return car.pricePerDay > 3000;
        return true;
      });
    }
    setFiltered(result);
    setPage(1);
  }, [search, brand, price, cars]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  const uniqueBrands = [...new Set(cars.map(car => car.brand))];

  const isWishlisted = (id) => wishlistItems.some(item => item.id === id);

  const handleWishlistClick = (car) => {
    if (isWishlisted(car.id)) {
      dispatch(removeFromWishlist(car.id));
    } else {
      dispatch(addToWishlist(car));
    }
  };

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Available Cars</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search cars..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border p-2 rounded"
        />
        <select onChange={e => setBrand(e.target.value)} value={brand} className="border p-2 rounded">
          <option value="">All Brands</option>
          {uniqueBrands.map(b => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
        <select onChange={e => setPrice(e.target.value)} value={price} className="border p-2 rounded">
          <option value="">All Prices</option>
          <option value="<1000">Below ₹1000</option>
          <option value="1000-3000">₹1000 - ₹3000</option>
          <option value=">3000">Above ₹3000</option>
        </select>
      </div>

      {/* Car Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {paginated.map(car => (
          <div key={car.id} className="border rounded-xl shadow-md p-4 relative">
            <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded mb-3" />
            <h2 className="text-xl font-semibold">{car.name}</h2>
            <p className="text-gray-600">{car.brand}</p>
            <p className="font-bold text-lg text-orange-600">₹{car.pricePerDay} / day</p>

            <div className="flex justify-between mt-4 items-center">
              <button
                className="bg-red-500 text-white py-1 px-3 rounded"
                onClick={() => navigate(`/rent/${car.id}`)}
              >
                Rent Car
              </button>

              <button onClick={() => handleWishlistClick(car)}>
                {isWishlisted(car.id) ? (
                  <HeartSolid className="w-6 h-6 text-red-500" />
                ) : (
                  <HeartOutline className="w-6 h-6 text-gray-500" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-3 py-1 border rounded ${i + 1 === page ? 'bg-red-500 text-white' : ''}`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Cars;
