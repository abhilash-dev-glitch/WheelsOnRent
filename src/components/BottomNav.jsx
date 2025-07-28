import {
  Home,
  CarFront,
  UsersRound,
  Info,
  Moon,
  Sun,
  Heart,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const BottomNav = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Apply theme on load and toggle
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50 md:hidden">
      <div className="flex justify-around items-center py-2">
        <NavItem to="/" label="Home" active={isActive("/")} icon={<Home className="w-5 h-5" />} />
        <NavItem to="/cars" label="Cars" active={isActive("/cars")} icon={<CarFront className="w-5 h-5" />} />
        <NavItem to="/becomepartner" label="Partner" active={isActive("/partner")} icon={<UsersRound className="w-5 h-5" />} />
        <NavItem to="/aboutus" label="About" active={isActive("/about")} icon={<Info className="w-5 h-5" />} />
        <NavItem to="/wishlist" label="Wishlist" active={isActive("/wishlist")} icon={<Heart className="w-5 h-5" />} />
        
        {/* ✅ Theme toggle button */}
        <button onClick={toggleTheme} className="flex flex-col items-center text-xs">
          <div className="text-gray-500 dark:text-yellow-400">
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </div>
          <span className="text-gray-500 dark:text-yellow-400">Theme</span>
        </button>
      </div>
    </nav>
  );
};

const NavItem = ({ to, label, icon, active }) => (
  <Link
    to={to}
    className="flex flex-col items-center text-xs"
  >
    <div className={`${active ? "text-red-600 dark:text-red-400" : "text-gray-500 dark:text-gray-300"}`}>{icon}</div>
    <span className={`${active ? "text-red-600 font-semibold dark:text-red-400" : "text-gray-500 dark:text-gray-300"}`}>{label}</span>
  </Link>
);

export default BottomNav;
