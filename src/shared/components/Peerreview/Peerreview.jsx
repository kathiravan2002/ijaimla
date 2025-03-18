import React from 'react'
import Sidebar from '../../../core/Sidebar/Sidebar.jsx';
import Book from '/assets/Book.png'
import arrow from '/assets/Arrow.png'

function Peerreview() {
    return (
        <div className='flex flex-row  w-full'>
            <Sidebar />
            <div className="text-justify max-w-[90rem] mx-autolg:pr-2 pr-2 lg:p-0 p-2  ">
                <h1 className="text-2xl poppins-extrabold mb-4 text-[#1A4480]">Peer Review Process :</h1>
                <p className="text-black text-base poppins-regular">The International Journal of Artificial Intelligence and Machine Learning Applications employs a rigorous, community-driven peer review process. Our editorial board and expert reviewers ensure the highest standards of scholarly research across diverse disciplines.
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
                    <h2 className="text-xl  mb-4  text-[#1A4480] poppins-bold">Requirements:</h2>

                    <div className='flex items-start '><img src={arrow} alt="ll" /> <p className="text-base mb-2 poppins-regular">Submissions must adhere to our specific journal template for consistent formatting and presentation.</p><br />
                    </div>
                    <div className='flex items-start '><img src={arrow} alt="ll" /> <p className="text-base mb-2 poppins-regular">Research must be original, unpublished, and free from plagiarism to maintain academic integrity. </p><br />
                    </div>
                    <div className='flex items-start '><img src={arrow} alt="ll" /> <p className="text-base mb-2 poppins-regular">Abstracts must be 200-1000 characters, following PubMed's structured format for clarity.</p><br />
                    </div>
                </div>

                {/* Scope Section */}
                <div className="bg-white p-4 border rounded-lg">
                    <h2 className="text-xl poppins-bold mb-4  text-[#1A4480] ">Benefits:</h2>
                    <div className='flex items-start '><img src={arrow} alt="ll" /><p className="text-base mb-2 poppins-regular">Enjoy the advantages of publishing with us, including full open access publication, Creative Commons BY-NC-SA 4.0 licensing, and maximum research visibility through our double-blind peer review process ensuring research quality and academic integrity. </p><br />
                    </div>

                </div>


                <div className="bg-[#DED3B5] p-6 rounded-lg mt-10 ">
                    <h2 className="text-xl poppins-bold text-center mb-6 text-[#1A4480]">
                        Accepted Article Types
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                       
                        <div className="bg-white p-4 border rounded-lg text-center">
                            <img
                                src={Book}
                                alt="Document Icon"
                                className="w-12 h-12 mx-auto mb-4"
                            />
                            <h3 className="text-lg text-[#1A4480] poppins-bold mb-2">Research Article</h3>
                            <p className="text-black text-sm  text-justify poppins-regular">
                            Articles (4000-8000 words) that report original research and which present objective, questions, methods, results, discussions, and conclusions.
                            </p>
                        </div>

                        {/* In-depth Review Article */}
                        <div className="bg-white p-4 border rounded-lg text-center">
                            <img
                                src={Book}
                                alt="Document Icon"
                                className="w-12 h-12 mx-auto mb-4"
                            />
                            <h3 className="text-lg poppins-bold mb-2 text-[#1A4480]">In-depth Review Article</h3>
                            <p className="text-black text-sm  text-justify poppins-regular">
                            In-depth review articles (4000-8000 words) on topics that build upon comprehensive references to the published literature.
                            </p>
                        </div>

                        {/* Technical Article */}
                        <div className="bg-white p-4 border rounded-lg text-center">
                            <img
                                src={Book}
                                alt="Document Icon"
                                className="w-12 h-12 mx-auto mb-4"
                            />
                            <h3 className="text-lg poppins-bold mb-2 text-[#1A4480]">Technical Article</h3>
                            <p className="text-black text-sm  text-justify poppins-regular">
                            Technical articles are original reports on specialist technical work, written for a professional audience.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Peerreview