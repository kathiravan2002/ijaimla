import React from 'react'
import Sidebar from '../../../core/Sidebar/Sidebar.jsx';
import ethics from '/assets/ethics.png'
import arrow from '/assets/Arrow.png'

function Publicationethics() {
    return (
        <div className='flex flex-row  w-full'>
            <Sidebar />
            <div className="text-justify  max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2  ">
                <h1 className="text-2xl poppins-extrabold mb-4 text-[#1A4480]">Publication Ethics :</h1>
                <p className="text-black text-base poppins-regular">International Journal of Artificial Intelligence and Machine Learning Applications  adheres to ethical publishing standards, ensuring transparency, integrity, and respect for all authors and researchers in the academic community. Our commitment to ethical practices maintains the highest standards of academic publishing.
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
                    <h2 className="text-xl poppins-bold mb-4  text-[#1A4480]">Research Integrity :</h2>

                    <div className='flex items-start '><img src={arrow} alt="ll" /> <p className="text-base mb-2 poppins-regular">We maintain rigorous standards for research integrity and ethical conduct throughout the publication process. Our commitment to academic honesty and transparency ensures the highest quality of published work.</p><br />
                    </div>
                    
                </div>

                {/* Scope Section */}
                <div className="bg-white p-4 border rounded-lg">
                    <h2 className="text-xl poppins-bold mb-4  text-[#1A4480]">Fail Review Process :</h2>
                    <div className='flex items-start '><img src={arrow} alt="ll" /><p className="text-base mb-2 poppins-regular">Our peer review process ensures unbiased evaluation and maintains the highest academic standards. We employ a double-blind review system to guarantee fair and objective assessment of all submissions.</p><br />
                    </div>

                </div>


                <div className="bg-[#DED3B5] p-6 rounded-lg mt-10 ">
                    <h2 className="text-xl poppins-bold text-center mb-6 text-[#1A4480]">
                    Ethical Guidelines
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                       
                        <div className="bg-white p-4 border rounded-lg text-center">
                            <img
                                src={ethics}
                                alt="Document Icon"
                                className="w-12 h-12 mx-auto mb-4"
                            />
                            <h3 className="text-lg text-[#1A4480] poppins-bold mb-2">Open Acess Policy</h3>
                            <p className="text-black text-sm  text-justify poppins-regular">
                            All articles published in IJAIMLA are freely accessible to readers worldwide under an open access model. This ensures that research findings are available to a global audience without any subscription or payment barriers.
                            </p>
                        </div>

                        {/* In-depth Review Article */}
                        <div className="bg-white p-4 border rounded-lg text-center">
                            <img
                                src={ethics}
                                alt="Document Icon"
                                className="w-12 h-12 mx-auto mb-4"
                            />
                            <h3 className="text-lg poppins-bold mb-2 text-[#1A4480]">Creative Common License</h3>
                            <p className="text-black text-sm  text-justify poppins-regular">
                            IJAIMLA publishes under the CC BY-NC-SA 4.0 license. This allows others to remix, adapt, and build upon the work non-commercially, as long as they credit the original source and license their new creations under the same terms.
                            </p>
                        </div>

                        {/* Technical Article */}
                        <div className="bg-white p-4 border rounded-lg text-center">
                            <img
                                src={ethics}
                                alt="Document Icon"
                                className="w-12 h-12 mx-auto mb-4"
                            />
                            <h3 className="text-lg poppins-bold mb-2 text-[#1A4480]">Community Standards</h3>
                            <p className="text-black text-sm  text-justify poppins-regular">
                            Community standards ensure proper attribution and responsible use of published work, maintaining ethical guidelines across academic and research communities.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Publicationethics