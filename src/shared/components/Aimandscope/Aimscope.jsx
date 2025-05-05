import React from 'react';
import Sidebar from '../../../core/Sidebar/Sidebar.jsx';
import submit from '/assets/upload.png'
import arrow from '/assets/Arrow.png'

const Aimscope = () => {
    return (
        <div className='flex flex-row'>
            <Sidebar />
            <div className="text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2 ">
                <h1 className="text-2xl font-bold mb-4 text-[#1A4480] poppins-extrabold">Aim and Scope :</h1>
                <p className="text-black text-base  poppins-regular"> The International Journal of Artificial Intelligence and Machine Learning Applications aims to provide a global platform for publishing high-quality research in Artificial Intelligence (AI) and Machine Learning (ML). The journal focuses on Theories, Methods, and Real-World Applications in areas such as Deep Learning, Natural Language Processing, Computer Vision, and AI-driven Decision-making.</p>

                {/* Submit Manuscript Button */}
                <div className='text-center mb-6 mt-3'>
                    <a href="https://ijaimla.com/Ijaimla/index.php/ijaimla/about/submissions" target="_blank" rel="noopener noreferrer">
                        <button className="bg-[#1A4480] text-white px-4 py-2 rounded-lg hover:bg-[#1d3c66] transition duration-300 poppins-bold" >
                            <div className='flex justify-between gap-3 '>  Submit Manuscript
                                <img src={submit} alt="Submit Icon" className="w-5 h-5" /></div>
                        </button>
                    </a>
                </div>

                {/* Aim Section */}
                <div className="bg-white p-4 border rounded-lg mb-4">
                    <h2 className="text-xl poppins-bold mb-4  text-[#1A4480] ">Aim:</h2>

                    <div className='flex items-start '><img src={arrow} alt="ll" /> <p className="text-base  poppins-regular mb-2">The International Journal of Artificial Intelligence and Machine Learning Applications (IJAIMLA) aims to Advance Research and Innovation in the fields of Artificial Intelligence (AI) and Machine Learning (ML) by providing a global platform for Researchers, Academicians, and Industry Professionals to share their Knowledge and Findings.</p><br />
                    </div>
                    <div className='flex items-start '><img src={arrow} alt="ll" /> <p className="text-base poppins-regular mb-2">The journal seeks to promote the development of new Theories, Methodologies, and Real-World Applications of AI and ML across various domains, including Healthcare, Finance, Education, Cybersecurity, Autonomous Systems, and Smart Cities. </p><br />
                    </div>
                    <div className='flex items-start '><img src={arrow} alt="ll" /> <p className="text-base poppins-regular mb-2">IJAIMLA is committed to fostering interdisciplinary collaboration and encouraging high-quality research that contributes to the growth and practical implementation of AI and ML technologies.</p><br />
                    </div>
                </div>

                {/* Scope Section */}
                <div className="bg-white p-4 border rounded-lg">
                    <h2 className="text-xl poppins-bold  mb-4  text-[#1A4480]">Scope:</h2>
                    <div className='flex items-start '><img src={arrow} alt="ll" /><p className="text-base poppins-regular mb-2">The scope of the International Journal of Artificial Intelligence and Machine Learning Applications (IJAIMLA) is to provide an academic platform and an important reference for the advancement and dissemination of research findings that support high-level Learning, Teaching, and Research in the fields of Artificial Intelligence (AI) and Machine Learning (ML). </p><br />
                    </div>
                    <div className='flex items-start '><img src={arrow} alt="ll" /><p className="text-base poppins-regular mb-2">Original theoretical work and application-based studies, which contribute to a better understanding of AI and ML challenges and solutions, are encouraged.</p><br />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aimscope;