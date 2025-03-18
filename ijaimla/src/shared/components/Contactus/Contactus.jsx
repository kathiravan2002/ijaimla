import React from 'react'
import Sidebar from '../../../core/Sidebar/Sidebar.jsx';


function Contactus() {
    return (
        <div className='flex flex-row  w-full'>
            <Sidebar />
            <div className='w-full'> 
                <h1 className="text-2xl poppins-extrabold mb-4 text-[#1A4480]">Contact us:</h1>
                <p className="text-black text-base mb-4 poppins-regular">Get in touch with us for any queries or support </p>
               <div className='w-full  mx-auto'>
                <div className="bg-[#DED3B5] p-6 rounded-lg border max-w-md mx-auto">
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-[#1A4480] poppins-medium mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Name"
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A4480]"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-[#1A4480] poppins-medium mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A4480]"
                            />
                        </div>

                        {/* Subject Field */}
                        <div>
                            <label htmlFor="subject" className="block text-[#1A4480] poppins-medium mb-1">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="subject"
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A4480]"
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="message" className="block text-[#1A4480] poppins-medium mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Message..."
                                rows="4"
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A4480] max-h-[calc(85vh-100px)]"
                            ></textarea>
                        </div>

                        {/* Send Email Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#1A4480] text-white p-2 rounded-lg hover:bg-[#1d3c66] transition duration-300 flex items-center justify-center poppins-medium"
                        >
                            <span className="mr-2"></span> Send Email
                        </button>

                        <p className="text-center text-gray-600 mt-6 poppins-regular">
                            For any queries contact Email: <a href="mailto:editor@ijaimla.com" className="text-[#1A4480] hover:underline">editor@ijaimla.com</a>
                        </p>
                    </form>
                </div>
                </div>

            </div>
        </div>
    )
}

export default Contactus