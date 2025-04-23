import { Link } from "react-router-dom";
import logo from "/assets/logo.png";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 px-6 py-4 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <h1 className="text-xl font-bold text-white">Architecture Firm</h1>
        </div>

        {/* منوی دسکتاپ */}
        <div className="hidden md:flex-1 md:flex justify-center">
          <nav className="flex space-x-6">
            <Link to="/" className="text-white hover:underline">
              Home
            </Link>
            <Link to="/portfolio" className="text-white hover:underline">
              Portfolio
            </Link>
            <Link to="/contact" className="text-white hover:underline">
              Contact
            </Link>
            <Link to="/form" className="text-white hover:underline">
              Form
            </Link>
          </nav>
        </div>

        {/* ستون راست: فضا برای دکمه یا فرم */}
        <div className="w-[150px]">{/* می‌تونی بعداً چیز اضافه کنی */}</div>
      </div>

      {/* دکمه همبرگر که در گوشه قرار می‌گیرد */}
      <div className="absolute top-4 right-4 md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* منوی همبرگر که در موبایل و دسکتاپ در گوشه نمایش داده می‌شود */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-gray-800 bg-opacity-70 text-white p-4 space-y-4 w-60 rounded-lg">
          {" "}
          {/* شفافیت اضافه شده با bg-opacity-70 */}
          <nav className="flex flex-col space-y-4 text-right">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/portfolio" className="hover:underline">
              Portfolio
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
            {/* لینک به صفحه فرم */}
            <Link to="/form" className="hover:underline">
              Form
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
