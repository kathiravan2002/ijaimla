import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const links = [
    { text: 'Home', path: '/' },
    { text: 'Aim & Scope', path: '/aimscope' },
    { text: 'About Us', path: '/aboutus' },
    { text: 'Editorial Board', path: '/editorial' },
    { text: 'Issues', path: '/issues' },
    { text: 'Peer review Process', path: '/peer' },
    { text: 'Publications Ethics', path: '/publicationethicspage' },
    { text: 'Abstracting and Indexing', path: '/abstractindexing' },
    { text: 'Article Processing', path: '/articalprocessingpage' },
    { text: 'Author Guidelines', path: '/authorguidelinespage' },
    { text: 'Copyright Form', path: '/copyrightformpage' },
    { text: 'Contact Us', path: '/contactuspage' },
  ];

  return (
    <div className="hidden lg:flex relative ">
      <div className="    sticky top-32 max-h-[calc(90vh-175px)]  ">
        <div className='border rounded-lg p-4 w-64 overflow-auto bg-white'>
        <h2 className=" font-poppins text-[#1A4480] underline  underline-offset-4 p-2   text-xl font-bold  w-full">
          Important Links
        </h2>
        <ul className="space-y-2">
          {links.map((item, index) => (
            <li key={index} className="border-b border-gray-200">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-black hover:text-white hover:bg-[#1A4480] poppins-regular  hover:p-2 hover:px-3 block p-2 px-3 rounded-lg transition-all duration-300 ease-in-out ${
                    isActive ? 'text-white bg-[#1A4480] p-1 px-3 font-poppins' : ''
                  }`
                }
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
        </div>
      </div>
     
      <div className="w-0.5 bg-gray-300 mx-5 hidden lg:block min-h-[85vh]"></div>
      
    </div>
  );
};

export default Sidebar;

