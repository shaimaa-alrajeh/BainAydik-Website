import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Photo/logo.png';

const Navbar = () => {
  const [toggle, setToggle] = useState(false); // For mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // For dropdown
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // For mobile dropdown
  const navigate = useNavigate();

  const handleToggle = () => setToggle(!toggle);
  const closeMenu = () => setToggle(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMobileDropdown = () => setMobileDropdownOpen(!mobileDropdownOpen);

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 h-[70px] border-b-2 border-[#E0B75A] bg-[#242424] backdrop-blur-lg z-50">
        <nav className="mx-auto flex max-w-6xl items-center gap-8 px-6 lg:px-12 py-4">
          {/* Logo */}
          <div className="relative flex items-center">
            <Link to="/">
              <img src={logo} loading="lazy" width="100" alt="Logo" />
            </Link>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center justify-center gap-6">
            <li>
              <Link
                to="/"
                className="pt-1.5 font-dm text-sm font-medium text-white hover:text-[#356CFD]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className="pt-1.5 font-dm text-sm font-medium text-white hover:text-[#356CFD]"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                className="pt-1.5 font-dm text-sm font-medium text-white hover:text-[#356CFD]"
              >
                Contact us
              </Link>
            </li>

            {/* Dropdown */}
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="pt-1.5 font-dm text-sm font-medium text-white hover:text-[#356CFD] flex items-center"
              >
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="ml-1 h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 mt-2 w-[150px] bg-[#242424] border border-gray-700 rounded-lg shadow-lg z-10">
                  <li className="py-2 px-4 hover:bg-[#356CFD] hover:text-white transition">
                    <Link to="/design" onClick={() => setDropdownOpen(false)}>
                      IT & Design
                    </Link>
                  </li>
                  <li className="py-2 px-4 hover:bg-[#356CFD] hover:text-white transition">
                    <Link to="/chraft" onClick={() => setDropdownOpen(false)}>
                      Chraft
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          {/* Spacer */}
          <div className="flex-grow"></div>

          {/* Auth and Language Buttons */}
          <div className="hidden md:flex items-center justify-center gap-6">
            <button
              className="text-[#356CFD] m-1 material-symbols-outlined mr-2"
              aria-label="Change Language"
            >
              language
            </button>
            <Link
              to="/login"
              className="border border-blue-400 p-1 rounded-md font-dm text-sm font-medium text-blue-400 shadow-md shadow-blue-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
            >
              Log In
            </Link>
            <Link
              to="/register"
              className="rounded-md bg-gradient-to-br from-blue-600 to-blue-400 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-blue-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="relative flex items-center justify-center md:hidden">
            <button
              type="button"
              className="transition-transform duration-200 ease-in-out hover:scale-[1.5]"
              onClick={handleToggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-auto text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {toggle && (
          <div className="md:hidden bg-[#242424] p-4">
            <ul className="flex flex-col items-center gap-4">
              <li>
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus" onClick={closeMenu}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contactus" onClick={closeMenu}>
                  Contact Us
                </Link>
              </li>

              {/* Mobile Services Dropdown */}
              <li className="relative">
                <button
                  onClick={toggleMobileDropdown}
                  className="pt-1.5 font-dm text-sm font-medium text-white hover:text-[#356CFD] flex items-center"
                >
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="ml-1 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                {mobileDropdownOpen && (
                  <ul className="absolute left-0 mt-2 w-[150px] bg-[#242424] border border-gray-700 rounded-lg shadow-lg z-10">
                    <li className="py-2 px-4 hover:bg-[#356CFD] hover:text-white transition">
                      <Link to="/design" onClick={() => setMobileDropdownOpen(false)}>
                        IT & Design
                      </Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-[#356CFD] hover:text-white transition">
                      <Link to="/chraft" onClick={() => setMobileDropdownOpen(false)}>
                        Chraft
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
            <div className="mt-4 flex flex-col items-center gap-2">
              <Link
                to="/login"
                className="border border-blue-400 p-2 rounded-md font-dm text-sm font-medium text-blue-400 shadow-md shadow-blue-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
                onClick={closeMenu}
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="rounded-md bg-gradient-to-br from-blue-600 to-blue-400 px-3 py-2 font-dm text-sm font-medium text-white shadow-md shadow-blue-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
                onClick={closeMenu}
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
