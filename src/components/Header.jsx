import { NavLink } from "react-router-dom";
import { Heart, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

import mobileLogo from "../assets/images/logo.png"; 

function Header() {
  const { darkMode, toggleTheme } = useTheme();

  const navLinks = [
    { to: "/", label: "Home", internal: true },
    { to: "/cars", label: "Cars", internal: true },
    { to: "/becomepartner", label: "Become a partner", internal: true },
    { to: "/aboutus", label: "AboutUs", internal: true },
    {
      to: "/wishlist",
      label: "",
      internal: true,
      icon: <Heart size={20} className="hover:fill-red-500" />,
    },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Desktop Logo */}
        <div className="hidden md:block">
          <img
            src="../assets/images/logo.png"
            alt="WheelsOnRent logo"
            className="w-[150px] object-contain"
          />
        </div>

        {/* Mobile Logo */}
        <div className="md:hidden">
          <img
            src={mobileLogo}
            alt="WheelsOnRent"
            className="h-10 w-auto"
          />
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 pr-10">
          {navLinks.map((link, index) => (
            <li key={index} className="flex items-center gap-1">
              {link.internal ? (
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 hover:text-red-600 transition duration-200 ${
                      isActive
                        ? "font-bold text-red-600"
                        : "text-gray-800 dark:text-gray-100"
                    }`
                  }
                >
                  {link.icon && <span>{link.icon}</span>}
                  {link.label}
                </NavLink>
              ) : (
                <a
                  href={link.to}
                  className="text-gray-800 hover:text-red-600 transition duration-200"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}

          {/* Theme Toggle */}
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
        </ul>

        {/* Mobile Theme Toggle and Wishlist */}
        <div className="md:hidden flex items-center gap-4">
          <NavLink to="/wishlist">{<Heart size={20} />}</NavLink>
          <button
            onClick={toggleTheme}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
