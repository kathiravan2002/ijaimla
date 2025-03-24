import React from 'react'
import Sidebar from '../../../core/Sidebar/Sidebar.jsx';
import Book from '/assets/Book.png'
import arrow from '/assets/Arrow.png'

function Authorguidelines() {
  return (
    <div className='flex flex-row  w-full'>
      <Sidebar />
      <div className=" text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2  "> 
        <h1 className="text-2xl font-bold mb-4 text-[#1A4480] poppins-extrabold">Author Guidelines :</h1>
        <p className="text-black text-base poppins-regular">Welcome to IJAIMLA comprehensive author guidelines. We are committed to maintaining high academic standards while providing authors with a smooth publication process. These guidelines will help you prepare and submit your manuscript effectively.
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
          <h2 className="text-xl poppins-bold mb-4  text-[#1A4480]">Publishing Requirements :</h2>

          <div className='flex items-start '><img src={arrow} alt="ll" /> <p className="text-base mb-2 poppins-regular">International Journal of Artificial Intelligence and Machine Learning Applications  (IJAIMLA) offers a platform for scholars and professionals to publish cutting-edge research. Our editorial and peer review process ensures the highest standards of academic integrity.</p><br />
          </div>
          <h2 className="text-base poppins-bold mb-2">Key Requirements :</h2>
          <ul className="list-disc pl-12 space-y-2 poppins-regular">
            <li>
            Manuscripts must adhere to the IJAIMLA template 
            </li>
            <li>
            Abstracts should be 200-1000 characters and structured as per PubMed format 
            </li>
            <li>
            Three to eight keywords must be included 
            </li>
            <li> References should follow the Vancouver style </li>
            <li>Ensure proper grammar, spelling, and use of formal English</li>
          </ul>
          
        </div>

        {/* Scope Section */}
        <div className="bg-white p-4 border rounded-lg mb-4 ">
          <h2 className="text-xl poppins-bold mb-4  text-[#1A4480]">Submission Process :</h2>

          <div className='flex items-start '><img src={arrow} alt="ll" /> <p className="text-base mb-2 poppins-regular">Submit your manuscript in OpenOffice, Microsoft Word, or RTF format through our Open Journal System (OJS).</p><br />
          </div>
          <h2 className="text-base poppins-bold mb-2">Key Requirements :</h2>
          <ul className="list-disc pl-12 space-y-2 poppins-regular">
            <li>
            Initial manuscript screening by editorial team 
            </li>
            <li>
            Double-blind peer review process 
            </li>
            <li>
            Author revision period
            </li>
            <li> Final editorial decision  </li>
            <li> Publication with Creative Commons licensing</li>
          </ul>
          <div className='flex items-start mt-2'><img src={arrow} alt="ll" /> <p className="text-base mb-2 poppins-regular">Our editorial team provides comprehensive support throughout the submission process to ensure a smooth publishing experience.</p><br />
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
              <p className="text-black text-sm  text-justify  poppins-regular">
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

export default Authorguidelines