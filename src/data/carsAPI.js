// src/data/carsAPI.js

export const fetchCars = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Tesla Model S",
          brand: "Tesla",
          image: "https://tesla-cdn.thron.com/delivery/public/image/tesla/0c812...",
          price: "$120/day",
        },
        {
          id: 2,
          name: "BMW X5",
          brand: "BMW",
          image: "https://www.bmwusa.com/.../x5.png",
          price: "$90/day",
        },
        {
          id: 3,
          name: "Audi A6",
          brand: "Audi",
          image: "https://www.audi.in/media/IN_Model_A6.jpg",
          price: "$100/day",
        },
      ]);
    }, 500); // simulate network delay
  });
};
