import React from 'react'
import Sidebar from '../../../core/Sidebar/Sidebar'
import submit from '/assets/upload.png'
import arrow from '/assets/Arrow.png'


function Aboutus() {
    return (
        <div className='flex flex-row '>
            <Sidebar />
            <div className="text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2 ">
                <h1 className="text-2xl poppins-extrabold mb-4 text-[#1A4480]">About us :</h1>
                <p className="text-black text-base poppins-regular">The International Journal of Artificial Intelligence and Machine Learning Applications is a Leading International, Open-Access, Peer-Reviewed journal focused on Advancing Research and Innovation in Artificial Intelligence (AI) and Machine Learning (ML). The journal provides a platform for Researchers, Academicians, and Industry experts to publish original Research, Case Studies, and Reviews Covering both Theoretical and Practical aspects of AI and ML. IJAIMLA aims to promote the exchange of Ideas and Knowledge in areas such as Deep Learning, Natural Language Processing, Computer Vision, Reinforcement Learning, and AI-driven solutions across various Industries. </p>

                {/* Submit Manuscript Button */}
                <div className='text-center mb-6 mt-3'>
                    <a href="https://ijaimla.com/Ijaimla/index.php/ijaimla/about/submissions" target="_blank" rel="noopener noreferrer">
                        <button className="bg-[#1A4480] text-white px-4 py-2 rounded-lg hover:bg-[#1d3c66] transition duration-300 poppins-bold" >
                            <div className='flex justify-between gap-3 '>  Submit Manuscript
                                <img src={submit} alt="Submit Icon" className="w-5 h-5" /></div>
                        </button>
                    </a>
                </div>

                <div className="bg-white p-4 border rounded-lg mb-4">
                    <h2 className="text-xl font-semibold mb-4  text-[#1A4480] poppins-bold">Scope :</h2>

                    <div className='flex items-start '><img src={arrow} alt="ll" /> <p className="text-base mb-2 poppins-regular">The journal focuses on both Theoretical Advancements and Practical Applications in areas such as Deep Learning, Natural Language Processing (NLP), Computer Vision, Reinforcement Learning, Generative Models, and Explainable AI.</p><br />
                    </div>
                    <div className='flex items-start '><img src={arrow} alt="ll" /> <p className="text-base mb-2 poppins-regular">It also explores AI and ML applications in Industries including Healthcare, Finance, Education,Cybersecurity, Autonomous Systems, Smart Cities, and Business Intelligence.</p><br />
                    </div>
                    <div className='flex items-start '><img src={arrow} alt="ll" /> <p className="text-base mb-2 poppins-regular">IJAIMLA welcomes original research, case studies, and reviews that contribute to the development and understanding of AI and ML Technologies.</p><br />
                    </div>
                </div>


                <div className="bg-white p-4 border rounded-lg  mb-4">
                    <h2 className="text-xl font-semibold mb-4  text-[#1A4480] poppins-bold">Mission :</h2>
                    <div className='flex items-start '><img src={arrow} alt="ll" /><p className="text-base mb-2 poppins-regular">Our mission is to provide a dynamic platform for Researchers, Academicians, Professionals, and Students to Publish Innovative research in the fields of Artificial Intelligence (AI) and Machine Learning (ML). </p><br />
                    </div>
                    <div className='flex items-start '><img src={arrow} alt="ll" /><p className="text-base mb-2 poppins-regular">By fostering rigorous inquiry and encouraging scholarly dialogue, we aim to significantly contribute to the body of knowledge that informs both Theory and Practice in these rapidly evolving fields.</p><br />
                    </div>
                </div>


                <div className="bg-white p-4 border rounded-lg mb-4">
                    <h2 className="text-xl font-semibold mb-4  text-[#1A4480] poppins-bold">Publications Ethics :</h2>

                    <div className='flex items-start '><img src={arrow} alt="ll" /> <p className="text-base mb-2 poppins-regular">We are committed to upholding the highest ethical standards in Publishing, Emphasizing Transparency, Integrity, and Fairness throughout our peer-review process.</p><br />
                    </div>
                    <div className='flex items-start '><img src={arrow} alt="ll" /> <p className="text-base mb-2 poppins-regular">Authors can expect a rigorous yet constructive review process that maintains confidentiality and ensures academic integrity. </p><br />
                    </div>
                    <div className='flex items-start '><img src={arrow} alt="ll" /> <p className="text-base mb-2 poppins-regular">We expect all Contributors, including Authors, Reviewers, and Editors, to adhere to these ethical guidelines to promote trust and credibility in the scientific community.</p><br />
                    </div>
                </div>

                <div className="bg-white p-4 border rounded-lg  mb-4">
                    <h2 className="text-xl font-semibold mb-4  text-[#1A4480] poppins-bold">Audience :</h2>
                    <div className='flex items-start '><img src={arrow} alt="ll" /><p className="text-base mb-2 poppins-regular">The International Journal of Artificial Intelligence and Machine Learning Applications (IJAIMLA) serves a diverse audience of Researchers, Educators, Practitioners, and Policymakers who are engaged in the latest advancements in Artificial Intelligence (AI) and Machine Learning (ML). </p><br />
                    </div>
                    <div className='flex items-start '><img src={arrow} alt="ll" /><p className="text-base mb-2 poppins-regular">We particularly encourage interdisciplinary research that connects theory with Practical Applications, Fostering Innovation and Progress in these rapidly evolving fields.
                    </p><br />
                    </div>
                </div>

                <div className="bg-white p-4 border rounded-lg">
                    <h2 className="text-xl font-semibold mb-4  text-[#1A4480] poppins-bold">Submission Guidelines :</h2>
                    <div className='flex items-start '><img src={arrow} alt="ll" /><p className="text-base mb-2 poppins-regular">Authors are invited to submit original, unpublished manuscripts that are not under review elsewhere. For a smooth and consistent submission process, detailed guidelines are available on our website.</p><br />
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Aboutus