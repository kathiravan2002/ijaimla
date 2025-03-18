import React from 'react'
import Sidebar from '../../../core/Sidebar/Sidebar.jsx';
import Copyright from '/assets/Copyright.png'
import arrow from '/assets/Arrow.png'

function Peerreview() {
    return (
        <div className='flex flex-row  w-full'>
            <Sidebar />
            <div className="text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2  ">
                <h1 className="text-2xl font-bold mb-4 text-[#1A4480] poppins-extrabold">Copyright Declaration :</h1>
                <p className="text-black text-base poppins-regular">Authors submitting to IJAIMLA must complete this copyright declaration to ensure proper protection of both the author's rights and the journal's interests. This document outlines the terms and conditions for publication of your research work.
                </p>

                {/* Submit Manuscript Button */}
                {/* <div className='text-center mb-6 mt-3'>
                    <button className="bg-[#1A4480] text-white px-4 py-2 rounded-lg hover:bg-[#1d3c66] transition duration-300" >
                        <div className='flex justify-between gap-3 '>  Submit Manuscript
                            <img src={submit} alt="Submit Icon" className="w-5 h-5" /></div>
                    </button>
                </div> */}

                {/* Aim Section */}
                <div className="bg-white p-4 border rounded-lg mb-4 mt-6">
                    <h2 className="text-xl poppins-bold mb-4  text-[#1A4480]">Copyright Declaration :</h2>

                    <div className='flex items-start ml-12 '><p className="text-base mb-2  poppins-regular">I/We __________ the author(s) of the research paper/article entitled __________ authorize you to publish the above mentioned paper/article in IJAIMLA. By submitting this declaration, the author(s) confirm their agreement to the following terms and conditions regarding the publication of their research work.</p><br />
                    </div>
                    
                </div>

                {/* Scope Section */}
                <div className="bg-white p-4 border rounded-lg">
                    <h2 className="text-xl poppins-bold mb-4  text-[#1A4480]">Author Agreement :</h2>
                    <div className='flex items-start ml-12'><p className="text-base mb-2 poppins-regular">This agreement outlines the terms and conditions for publication, ensuring the protection of both the author's rights and the journal's interests. The author(s) maintain their copyright while granting the journal the necessary rights to publish and distribute the work.</p><br />
                    </div>

                </div>


                <div className="bg-[#DED3B5] p-6 rounded-lg mt-10 ">
                    <h2 className="text-xl poppins-bold text-center mb-6 text-[#1A4480]">
                    Copyrights Points
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                       
                        <div className="bg-white p-4 border rounded-lg text-center">
                            <img
                                src={Copyright}
                                alt="Document Icon"
                                className="w-12 h-12 mx-auto mb-4"
                            />
                            <h3 className="text-lg text-[#1A4480] poppins-bold mb-2">Publication Rights</h3>
                            <p className="text-black text-sm  text-justify poppins-regular">
                            I/We will not publish the above-mentioned contribution anywhere else without the prior written permission of the publisher, unless it has been substantially changed.
                            </p>
                        </div>

                        {/* In-depth Review Article */}
                        <div className="bg-white p-4 border rounded-lg text-center">
                            <img
                                src={Copyright}
                                alt="Document Icon"
                                className="w-12 h-12 mx-auto mb-4"
                            />
                            <h3 className="text-lg poppins-bold mb-2 text-[#1A4480]">Content Warranty</h3>
                            <p className="text-black text-sm  text-justify poppins-regular">
                            I/We declare and warrant that the contribution is original, except for excerpts from copyrighted works that may be included with the permission of the copyright holder and author thereof. </p>
                        </div>

                        {/* Technical Article */}
                        <div className="bg-white p-4 border rounded-lg text-center">
                            <img
                                src={Copyright}
                                alt="Document Icon"
                                className="w-12 h-12 mx-auto mb-4"
                            />
                            <h3 className="text-lg poppins-bold mb-2 text-[#1A4480]">Legal Compliance</h3>
                            <p className="text-black text-sm  text-justify poppins-regular">
                            The Author warrants the right to enter into this Agreement and that the Article contains no libelous or unlawful statements, harmful instructions, and does not violate any rights or privacy of others.

                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Peerreview