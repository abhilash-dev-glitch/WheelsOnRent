// src/api/cars.js

export const fetchCars = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Audi A4",
          brand: "Audi",
          image: "https://www.shutterstock.com/image-photo/st-petersburg-russia-september-19-600nw-2045174033.jpg",
          pricePerDay: 4000,
        },
        {
          id: 2,
          name: "Mercedes-Benz C-Class",
          brand: "Mercedes",
          image: "src/assets/images/Mercedes-C-Class.jpg",
          pricePerDay: 5500,
        },
        {
          id: 3,
          name: "BMW 3 Series",
          brand: "BMW",
          image: "https://imgd.aeplcdn.com/1920x1080/cw/ec/37067/BMW-3-Series-Exterior-167583.jpg?wm=0&q=80&q=80",
          pricePerDay: 5000,
        },
        // --- Appended older dummy data ---
        {
          id: 4,
          name: "Econoline E250",
          brand: "Ford",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTL27ueRHx6FARULxc0lnE_JwEWUFhOlT6ew&s",
          pricePerDay: 599,
        },
        {
          id: 5,
          name: "370Z",
          brand: "Nissan",
          image: "https://www.netcarshow.com/Nissan-370Z_Nismo-2015-Front_Three-Quarter.af6a9696.jpg",
          pricePerDay: 499,
        },
        {
          id: 6,
          name: "Safari",
          brand: "GMC",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjsJvbEnraIXPXxdfHhnDDvgS_ZTrzVte52w&s",
          pricePerDay: 2999,
        },
        {
          id: 7,
          name: "Wrangler",
          brand: "Jeep",
          image: "https://www.jeep-india.com/content/dam/cross-regional/apac/jeep/en_in/wrangler-price-reveal/gallery/Exterior-6-Website_Gallery-Page.jpg.img.1440.jpg",
          pricePerDay: 299,
        },
        {
          id: 8,
          name: "Impala",
          brand: "Chevrolet",
          image: "https://i.ytimg.com/vi/HG73FLidNlg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAiZ1qXKsJanaL5psEgQQON5p3x7w",
          pricePerDay: 429,
        },
        {
          id: 9,
          name: "E-Series",
          brand: "Ford",
          image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/37640/endeavour-exterior-right-front-three-quarter-149473.jpeg?q=80&q=80",
          pricePerDay: 7999,
        },
        {
          id: 10,
          name: "Country",
          brand: "Ford",
          image: "https://cdn-img.vincue.net/image/opt-dealerid34048-photoid1466417161--PND45-ltid2/1466417161.jpg",
          pricePerDay: 229,
        },
        {
          id: 11,
          name: "944",
          brand: "Porsche",
          image: "https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2020/history/Porsche-Klassik-16/Glass-dome/b-944S_20190831_002.jpg/jcr:content/b-944S_20190831_002.jpg",
          pricePerDay: 429,
        },
        {
          id: 12,
          name: "57",
          brand: "Maybach",
          image: "https://www.edmunds.com/assets/m/for-sale/fd-wdbvf78j76a001528/img-1-600x400.jpg",
          pricePerDay: 549,
        },
        {
          id: 13,
          name: "Firebird",
          brand: "Pontiac",
          image: "https://www.diamondmotorworks.com/imagetag/4750/37/l/Used-1996-Pontiac-Firebird-Formula-WS6-1721775308.jpg",
          pricePerDay: 2499,
        },
        {
          id: 14,
          name: "Sportvan G20",
          brand: "Chevrolet",
          image: "https://fourbieexchange.com/wp-content/uploads/2025/07/1995-chevy-sportvan-g20-for-sale-46.jpg",
          pricePerDay: 699,
        },
        {
          id: 15,
          name: "MPV",
          brand: "Mazda",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKT7BWIUayDoFdCJbmt3jDIJLt_TtdWlU9hg&s",
          pricePerDay: 169,
        },
        {
          id: 16,
          name: "GS",
          brand: "Lexus",
          image: "https://carsales.pxcrush.net/carsales/cars/dealer/7klkhpfhsg8pq1b5umwg28d3d.jpg?pxc_method=fitfill&pxc_bgtype=self&pxc_size=720,480",
          pricePerDay: 369,
        },
        {
          id: 17,
          name: "Sequoia",
          brand: "Toyota",
          image: "https://media.ed.edmunds-media.com/toyota/sequoia/2025/oem/2025_toyota_sequoia_4dr-suv_1794-edition_fq_oem_1_1600.jpg",
          pricePerDay: 1899,
        },
        {
          id: 18,
          name: "S80",
          brand: "Volvo",
          image: "https://img.indianautosblog.com/2014/06/Volvo-Concept-Estate-front-three-quarter.jpg",
          pricePerDay: 4999,
        }
      ]);
    }, 500); // Simulate network delay
  });
};
