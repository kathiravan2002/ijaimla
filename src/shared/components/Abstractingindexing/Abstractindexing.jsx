import React from 'react'
import Sidebar from '../../../core/Sidebar/Sidebar.jsx';
import Book from '/assets/Book.png'
import arrow from '/assets/Arrow.png'

function Abstractindexing() {
    return (
        <div className='flex flex-row  w-full'>
            <Sidebar />
            <div className=" text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2 ">
                <h1 className="text-2xl poppins-extrabold mb-4 text-[#1A4480]">Abstracting and Indexing:</h1>
                <p className="text-black text-base poppins-regular">The International Journal of Artificial Intelligence and Machine Learning Applications is committed to providing maximum research visibility through indexing in leading academic databases. Our journal ensures that published articles are easily accessible and discoverable by researchers, academicians, and professionals worldwide. Abstracting and indexing enhance the reach and impact of the research, increasing citation potential and academic recognition.
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
                    <h2 className="text-xl poppins-bold mb-4  text-[#1A4480]">Global Visibility :</h2>

                    <div className='flex items-start '><img src={arrow} alt="ll" /> <p className="text-base mb-2 poppins-regular">IJAIMLA provides open access to all published articles, ensuring that research findings are available to a global audience without any subscription barriers.</p><br />
                    </div>
                    <div className='flex items-start '><img src={arrow} alt="ll" /> <p className="text-base mb-2 poppins-regular">Our content is indexed and accessible through major databases, increasing the visibility and reach of authors’ work across the international research community.</p><br />
                    </div>
                    
                </div>

                {/* Scope Section */}
                <div className="bg-white p-4 border rounded-lg">
                    <h2 className="text-xl poppins-bold mb-4  text-[#1A4480]">Quality Assurance :</h2>
                    <div className='flex items-start '><img src={arrow} alt="ll" /><p className="text-base mb-2 poppins-regular">We follow a rigorous double-blind peer review process to maintain the highest standards of academic integrity and research quality.</p><br />
                    </div>
                    <div className='flex items-start '><img src={arrow} alt="ll" /><p className="text-base mb-2 poppins-regular">Each submission is reviewed by expert reviewers in the field to ensure accuracy, originality, and relevance. </p><br />
                    </div>

                </div>


                <div className="bg-[#DED3B5] p-6 rounded-lg mt-10 ">
                    <h2 className="text-xl poppins-bold text-center mb-6 text-[#1A4480]">
                    Indexing Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                       
                        <div className="bg-white p-4 border rounded-lg text-center">
                            <img
                                src={Book}
                                alt="Document Icon"
                                className="w-12 h-12 mx-auto mb-4"
                            />
                            <h3 className="text-lg text-[#1A4480] poppins-bold mb-2">Primary Database</h3>
                            <p className="text-black text-sm  text-justify poppins-regular">
                            Primary databases like Google Scholar, CrossRef, DOAJ, and WorldCat provide global access and citation tracking.
                            </p>
                        </div>

                        {/* In-depth Review Article */}
                        <div className="bg-white p-4 border rounded-lg text-center">
                            <img
                                src={Book}
                                alt="Document Icon"
                                className="w-12 h-12 mx-auto mb-4"
                            />
                            <h3 className="text-lg poppins-bold mb-2 text-[#1A4480]">Citation Indexes</h3>
                            <p className="text-black text-sm  text-justify poppins-regular">
                            Citation indexes such as Scopus and Web of Science (pending) enhance the credibility and impact of published work.
                            </p>
                        </div>

                        {/* Technical Article */}
                        <div className="bg-white p-4 border rounded-lg text-center">
                            <img
                                src={Book}
                                alt="Document Icon"
                                className="w-12 h-12 mx-auto mb-4"
                            />
                            <h3 className="text-lg poppins-bold mb-2 text-[#1A4480]">Discovery Services</h3>
                            <p className="text-black text-sm  text-justify poppins-regular">
                            Discovery services like OpenAIRE, EBSCO, and ProQuest further improve the accessibility and recognition of the journal’s content across institutions and research platforms.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Abstractindexing