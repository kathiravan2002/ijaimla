import React from 'react'
import Sidebar from '../../../core/Sidebar/Sidebar.jsx';
import submit from '/assets/upload.png'
import article from '/assets/article.png'
import arrow from '/assets/Arrow.png'

function Articalprocessing() {
    return (
        <div className='flex flex-row  w-full'>
            <Sidebar />
            <div className="text-justify  max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2  ">
                <h1 className="text-2xl poppins-extrabold mb-4 text-[#1A4480]">Article Processing :</h1>
                <p className="text-black text-base poppins-regular">The International Journal of Artificial Intelligence and Machine Learning Applications (IJAIMLA) follows a structured article processing system to ensure a smooth and efficient publication experience for authors. The process is designed to maintain high research quality and provide timely publication of accepted articles.
                </p>

                {/* Submit Manuscript Button */}
                <div className='text-center mb-6 mt-3'>
                    <a href="https://www.ijaimla.com/Ijaimla/index.php/ijaimla/about/submissions" target="_blank" rel="noopener noreferrer">
                        <button className="bg-[#1A4480] text-white px-4 py-2 rounded-lg hover:bg-[#1d3c66] transition duration-300 poppins-bold" >
                            <div className='flex justify-between gap-3 '>  Submit Manuscript
                                <img src={submit} alt="Submit Icon" className="w-5 h-5" /></div>
                        </button>
                    </a>
                </div>

                {/* Aim Section */}
                <div className="bg-white p-4 border rounded-lg mb-4 mt-6">
                    <h2 className="text-xl poppins-bold mb-4  text-[#1A4480]">Publication Process :</h2>

                    <div className='flex items-start '><img src={arrow} alt="ll" /> <p className="text-base mb-2 poppins-regular">The publication process at IJAIMLA is transparent and systematic. After the initial submission, manuscripts undergo a rigorous peer review process conducted by expert reviewers. </p><br />
                    </div>
                    <div className='flex items-start '><img src={arrow} alt="ll" /> <p className="text-base mb-2 poppins-regular">Once the review is complete and revisions are approved, the final version is prepared for publication.  </p><br />
                    </div>
                    <div className='flex items-start '><img src={arrow} alt="ll" /> <p className="text-base mb-2 poppins-regular">The article is assigned a Digital Object Identifier (DOI) and published online with open access, ensuring global reach and visibility.</p><br />
                    </div>
                </div>

                {/* Scope Section */}
                <div className="bg-white p-4 border rounded-lg">
                    <h2 className="text-xl poppins-bold mb-4  text-[#1A4480]">Author Benefits :</h2>
                    <div className='flex items-start '><img src={arrow} alt="ll" /><p className="text-base mb-2 poppins-regular">Authors publishing with IJAIMLA enjoy several benefits, including open access to a global audience, Creative Commons licensing for flexible distribution, and indexing in major academic databases. </p><br />
                    </div>
                    <div className='flex items-start '><img src={arrow} alt="ll" /><p className="text-base mb-2 poppins-regular">Authors also benefit from a fast and transparent review process, increased citation potential, and professional editorial support to enhance the quality and impact of their work.</p><br />
                    </div>

                </div>


                <div className="bg-[#DED3B5] p-6 rounded-lg mt-10 ">
                    <h2 className="text-xl poppins-bold text-center mb-6 text-[#1A4480]">
                        Processing Steps
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="bg-white p-4 border rounded-lg text-center">
                            <img
                                src={article}
                                alt="Document Icon"
                                className="w-12 h-12 mx-auto mb-4"
                            />
                            <h3 className="text-lg text-[#1A4480] poppins-bold mb-2">Initial Submission</h3>
                            <p className="text-black text-sm  text-justify poppins-regular">
                                Authors submit their manuscript through the journal's online submission system. The editorial team conducts an initial review to check the manuscript’s relevance, formatting, and adherence to the journal's guidelines.
                            </p>
                        </div>

                        {/* In-depth Review Article */}
                        <div className="bg-white p-4 border rounded-lg text-center">
                            <img
                                src={article}
                                alt="Document Icon"
                                className="w-12 h-12 mx-auto mb-4"
                            />
                            <h3 className="text-lg poppins-bold mb-2 text-[#1A4480]">Peer Review</h3>
                            <p className="text-black text-sm  text-justify poppins-regular">
                                Manuscripts undergo rigorous double-blind peer review by expert reviewers in your field. Receive detailed feedback to enhance your work.Authors may be required to revise their manuscripts based on reviewer comments.
                            </p>
                        </div>

                        {/* Technical Article */}
                        <div className="bg-white p-4 border rounded-lg text-center">
                            <img
                                src={article}
                                alt="Document Icon"
                                className="w-12 h-12 mx-auto mb-4"
                            />
                            <h3 className="text-lg poppins-bold mb-2 text-[#1A4480]">Publications</h3>
                            <p className="text-black text-sm  text-justify poppins-regular">
                                After the peer review and final approval, the manuscript is formatted and published online under an open access model with a DOI for permanent referencing. The published article becomes accessible to researchers, academicians, and professionals worldwide.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Articalprocessing