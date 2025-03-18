import React from 'react';
import Sidebar from '../../../core/Sidebar/Sidebar.jsx';
import submit from '/assets/upload.png';

const Home = () => {
  const researchDomains = [
    [
      'Artificial Intelligence',
      'Machine Learning',
      'Deep Learning',
      'AI in Healthcare',
      'AI Ethics',
      'Generative AI',
      'Reinforcement Learning',
      'Computer Vision',
      'Natural Language Processing',
      'Neural Networks',
      'AI in Finance',
      'AI in Robotics',
      'Transfer Learning',
      'Predictive Analytics',
      'Explainable AI (XAI)',
    ],
    [
      'AI in Smart Cities',
      'Internet of Things (IoT)',
      'AI in Business Intelligence',
      'Human-AI Interaction',
      'Time Series Forecasting',
      'AI in Education',
      'AI-driven Decision Making',
      'AI in Autonomous Systems',
      'Multimodal Learning',
      'AI for Cybersecurity',
      'Semi-Supervised Learning',
      'Edge AI',
      'Big Data and AI',
      'Data Mining',
      'Federated Learning',
    ],
    [
      'Pattern Recognition',
      'Algorithmic Bias',
      'Cognitive Computing',
      'Meta-Learning',
      'Knowledge Graphs',
      'Self-Supervised Learning',
      'Zero-Shot Learning',
      'Few-Shot Learning',
      'AI in Manufacturing',
      'AI for Climate Change',
      'AI in E-commerce',
      'Hybrid AI Models',
      'Autonomous Vehicles',
      'Bayesian Networks',
      'Continual Learning',
    ],
  ];

  return (
    <div className="flex flex-row min-h-screen w-full max-w-[1500px] mx-auto">
      <Sidebar />
      <div className="flex flex-1  w-full  lg:pr-2 pr-2 lg:p-0 p-2 " >
        <main className="w-full text-justify ">
          <section className="mb-4 lg:mb-4 w-full">
            <h1 className="text-2xl  lg:text-2xl font-bold mb-3 lg:mb-4 text-[#1A4480]  lg:px-0 poppins-extrabold">
              Welcome to IJAIMLA
            </h1>
            <p className="  text-black mb-3 lg:mb-4   lg:px-0  poppins-regular">
              <span className=" poppins-semibold ">
                The International Journal of Artificial Intelligence and Machine Learning Applications (IJAIMLA)
              </span>{' '}
              is a scholarly, open-access, peer-reviewed interdisciplinary journal that publishes high-quality research in Artificial Intelligence (AI) and Machine Learning (ML). It is a quarterly publication that focuses on the latest theories, methods, and applications in AI and ML, covering areas such as Deep Learning, Natural Language Processing, Computer Vision, Reinforcement Learning, and AI-driven Decision-making. The journal aims to Advance Scientific Knowledge and Promote Innovation in AI and ML by encouraging collaboration among Researchers, Academicians, and Industry Professionals.
            </p>
            <div className="text-center px-4 lg:px-0">
              <a href="https://www.ijaimla.com/Ijaimla/index.php/ijaimla/about/submissions" target="_blank" rel="noopener noreferrer">
                <button className="bg-[#1A4480] text-white px-4 py-2 rounded-lg hover:bg-[#1d3c66] transition duration-300 poppins-bold" >
                  <div className='flex justify-between gap-3 '>  Submit Manuscript
                    <img src={submit} alt="Submit Icon" className="w-5 h-5" /></div>
                </button>
              </a>
            </div>
          </section>
          <div className="bg-black mb-4 lg:mb-4 w-full">
            <hr />
          </div>

          {/* Key Research Domains Section */}
          <section className="bg-[#DED3B5] p-4 lg:p-5 rounded-lg lg:rounded-lg mb-4 lg:mb-4 w-full">
            <h2 className="text-center text-xl lg:text-2xl poppins-extrabold mb-3 lg:mb-4 text-[#1A4480] px-4 lg:px-0">
              Key Research Domains
            </h2>
            <p className="text-center text-base lg:text-xl mb-3 lg:mb-4 text-[#000000] poppins-bold px-4 lg:px-0">
              The journal covers the following areas of Artificial Intelligence and Machine Learning
            </p>
            <div className="bg-white p-3 lg:p-4 rounded-lg lg:rounded-lg w-full">
              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 lg:gap-0 mt-2">
                {researchDomains.map((column, colIndex) => (
                  <ul key={colIndex} className="space-y-1 lg:space-y-2">
                    {column.map((domain, index) => (
                      <li key={index} className="flex gap-2 lg:gap-4 md:gap-0">
                        <span className="ml-4 lg:ml-10">•</span>
                        <span className="lg:text-lg  poppins-regular ">{domain}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </section>
          <div className="bg-black mb-4 lg:mb-4 w-full">
            <hr />
          </div>

          {/* Submission Info Section */}
          <section className="w-full rounded-none lg:rounded-lg text-center">
            <p className="text-black mb-2 poppins-medium  lg:text-base px-4 lg:px-0 text-pretty">
              We publish original research articles, review articles, and technical notes. The journal reviews papers within two weeks of submission and publishes accepted articles on the internet immediately upon receiving the final versions. Our fast reviewing process is our strength.
            </p>
            <div className="bg-[#DED3B5] rounded p-2 mx-4 lg:mx-0">
              <p className="text-[#1A4480] poppins-regular  text-sm lg:text-base">
                The last date for manuscript submission for the next issue is June 22, 2025
              </p>
            </div>
            <p className="text-black mt-2 poppins-regular   px-4 lg:px-0">
              With Warm Regards, <br />
              Editor-in-Chief<br />
              <span className="font-bold">IJAIMLA</span>
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
