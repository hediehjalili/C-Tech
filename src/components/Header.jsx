import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow bg-white">
      <h1 className="text-xl font-bold">Architecture Firm</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/portfolio" className="hover:underline">
          Portfolio
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
