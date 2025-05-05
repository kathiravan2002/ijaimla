import React, { useState } from 'react';
import ijaimla from '/assets/IJAIMLA.png';
import { NavLink } from 'react-router-dom'; // Assuming you're using react-router-dom
import submit from '/assets/sideups.png';
import { useNavigate } from "react-router-dom";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();


  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'Aim & Scope', path: '/aimscope' },
    { text: 'About Us', path: '/aboutus' },
    { text: 'Editorial Board', path: '/editorial' },
    { text: 'Issues', path: '/issues' },
    { text: 'Peer review Process', path: '/peer' },
    { text: 'Publications Ethics', path: '/publicationethicspage' },
    { text: 'Abstracting and indexing', path: '/abstractindexing' },
    { text: 'Article Processing', path: '/articleprocessingpage' },
    { text: 'Author Guidelines', path: '/authorguidelinespage' },
    { text: 'Copyright Form', path: '/copyrightformpage' },
    { text: 'Contact Us', path: '/contactuspage' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlepage = () => {
    navigate("/");

  };
  return (
    <div className="w-full bg-[#1A4480] text-white fixed top-0 z-20 max-h-[102px]">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div
          className="bg-white p-3 w-64 lg:w-80 md:w-96 "
          style={{
            clipPath: ' polygon(0% 0%, 100% 0, 79% 49%, 100% 100%, 0% 100%)',
          }}
        >
          <button
            onClick={handlepage}
          >
            <img
              src={ijaimla}
              alt="logo"
              className="ml-4 md:ml-6 lg:ml-16 mt-2 w-[150px]"
            />
          </button>
        </div>

        {/* Title Section - Hidden on small devices */}
        <div className="hidden md:flex flex-grow text-center">
          <h1 className="2xl:text-xl md:text-base  poppins-extrabold 2xl:ml-64 xl:ml-[150px] lg:ml-54 font-bold">
            International Journal of Artificial Intelligence and Machine Learning Applications
          </h1>
        </div>

        {/* Hamburger Menu Button - Visible only on small devices */}
        <button
          className="lg:hidden text-white focus:outline-none mr-5"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Sidebar Menu - Visible only on small devices when toggled */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#1A4480] text-white transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out lg:hidden z-30`}
      >
        <div className="p-4">
          {/* <h2 className="text-lg font-semibold mb-4 text-center">Menu</h2> */}
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block p-2 rounded-lg hover:bg-white hover:text-[#1A4480] ${isActive ? 'bg-white text-[#1A4480] ' : ''
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  {item.text}

                </NavLink>

              </li>
            ))}
            <li>
              <a href="https://ijaimla.com/Ijaimla/index.php/ijaimla/about/submissions" target="_blank" rel="noopener noreferrer">
                <button className="bg-[#DED3B5] text-[#1A4480] px-3 py-2 lg:px-4 lg:py-2 rounded-lg hover:bg-[#f5e0a5] transition duration-300">
                  <div className="flex justify-between items-center gap-2 lg:gap-3 poppins-bold">
                    Submit Manuscript
                    <img src={submit} alt="Submit Icon" className="w-4 h-4 lg:w-5 lg:h-5" />
                  </div>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay - Visible when menu is open on small devices */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden z-20"
          onClick={toggleMenu}
        ></div>
      )}

      <div className="w-full bg-[#DED3B5] p-2"></div>
    </div>
  );
};

export default Header;

