import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Wishlist from "./pages/Wishlist";
import Rent from "./pages/Rent";
import BecomePartner from "./pages/BecomePartner";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import InstantRent from "./pages/InstantRent";
import PrivateDriver from "./pages/PrivateDriver";
import LongTrip from "./pages/LongTrip";

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <>
      <ScrollToTop /> {/* Auto-scrolls to top on route change */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cars" element={<Cars />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="rent/:id" element={<Rent />} />
          <Route path="becomepartner" element={<BecomePartner />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />}>
            <Route path="instant-rent" element={<InstantRent />} />
            <Route path="private-driver" element={<PrivateDriver />} />
            <Route path="long-trip" element={<LongTrip />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
