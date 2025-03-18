import React from 'react';
import logo from "/assets/ojs_brand.jpg"; 
import ijaimla from '/assets/footerlogo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const resourcesLinks = [
    { text: 'Home', path: '/' },
    { text: 'About Us', path: '/aboutus' },
    { text: 'Contact Us', path: '/contactuspage' },
  ];
  const journalOverviewLinks = [
    { text: 'Editorial Board', path: '/editorial' },
    { text: 'Peer review Process', path: '/peer' },
    { text: 'Publications Ethics', path: '/publicationethicspage' },
    { text: 'Abstracting and indexing', path: '/abstractindexing' },
    { text: 'Article Processing', path: '/articleprocessingpage' },
  ];

  return (
    <footer className="bg-[#1A4480] text-white py-0 md:py-5 lg:py-3 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          <div>
             
             <img src={ijaimla} alt="logo" width="150px" height="150px" className=" mt-4"/>
           
            <div className="flex items-center mb-2">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <a href="mailto:editor@ijaimla.com" className="hover:underline text-sm sm:text-base poppins-regular">
                editor@ijaimla.com
              </a>
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                ></path>
              </svg>
              <a href="http://www.ijaimla.com" className="hover:underline text-sm sm:text-base poppins-regular">
                www.ijaimla.com
              </a>
            </div>
          </div>
          <div className="mt-5 md:mt-40 md:absolute md:left-0 lg:mt-25 md:top-0  ">
            <img src={logo} alt="OJS Logo" className="w-20 sm:w-24 lg:w-28 h-auto" />
          </div>
     
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 mt-4 sm:mt-5 poppins-bold">
              Resources
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              {resourcesLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className=" flex items-center text-sm sm:text-base poppins-regular"
                  >
                    <span className="mr-2">•</span><span className='hover:underline'> {item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 mt-4 sm:mt-5 poppins-bold">
              Journal Overview
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              {journalOverviewLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className=" flex items-center text-sm sm:text-base poppins-regular" 
                  >
                    <span className="mr-2">•</span> <span className='hover:underline'>{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
        </div>

        <hr className="border-t border-gray-400 my-4 sm:my-6" />

        <div className="flex flex-col md:flex-row justify-center text-center text-sm sm:text-base poppins-regular">
          <p>© 2025 IJAIMLA. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


