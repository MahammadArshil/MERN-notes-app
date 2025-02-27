import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../context/ContextProvider";

const Navbar = ({ setQuery, query, setNotes }) => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setNotes([]);
  };

  return (
    <>
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/">Note App</Link>
      </div>

      {/* Search Bar */}
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-gray-600 px-4 py-2 rounded hidden md:block"
        type="text"
        placeholder="Search Notes..."
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-4 items-center">
        {!user ? (
          <>
            <Link to="/login" className="bg-blue-500 px-4 py-2 rounded">Login</Link>
            <Link to="/register" className="bg-green-500 px-4 py-2 rounded">Signup</Link>
          </>
        ) : (
          <>
            <span className="text-white">{user.name}</span>
            <button className="bg-red-500 px-4 py-2 rounded" onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>
    </nav>

    {/* Mobile Menu */}
    {isOpen && (
      <div className="md:hidden bg-gray-700 p-4 flex flex-col space-y-4 text-center">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-gray-600 px-4 py-2 rounded w-full"
          type="text"
          placeholder="Search Notes..."
        />
        {!user ? (
          <>
            <Link to="/login" className="bg-blue-500 px-4 py-2 rounded">Login</Link>
            <Link to="/register" className="bg-green-500 px-4 py-2 rounded">Signup</Link>
          </>
        ) : (
          <>
            <span className="text-white">{user.name}</span>
            <button className="bg-red-500 px-4 py-2 rounded" onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    )}
    </>
  );
};

export default Navbar;
