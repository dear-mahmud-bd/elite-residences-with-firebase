/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const UserFeedback = () => {
    return (
        <div className="container mx-auto p-10 md:py-10 px-0 md:p-10 md:px-0">
            <p className="text-2xl md:text-4xl lg:text-5xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-[285px] md:before:w-[430px] lg:before:w-[570px] before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-custom-green-dark to-custom-green-dark transition-all ease-in-out duration-100 mb-5">Give us your experience</p>
            <div className=" relative px-10 md:p-0 transform duration-500">
                <img className="md:max-w-5xl" src="https://images.pexels.com/photos/5990153/pexels-photo-5990153.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1860" alt="" />
                <div className="content bg-white md:bg-opacity-60 xl:bg-white p-2 pt-8 md:p-12 pb-12 md:max-w-lg w-full md:absolute top-20 right-5 rounded-xl shadow-2xl border-l-4 border-green-600">
                    <div className="flex items-center justify-center mt-8">
                        <form>
                            <div className="relative w-full mb-2">
                                <span className="p-2 text-custom-green-dark font-semibold text-lg">- Your Name</span>
                                <input type="text" name="name" className="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="FirstName LastName" style={{ transition: "all 0.15s ease 0s" }} required />
                            </div>
                            <div className="relative w-full mb-2">
                                <span className="p-2 text-custom-green-dark font-semibold text-lg">- Your Email</span>
                                <input type="email" name="email" className="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="some@example.com" style={{ transition: "all 0.15s ease 0s" }} required />
                            </div>
                            <div className="relative w-full mb-2">
                                <span className="p-2 text-custom-green-dark font-semibold text-lg">- Your Message</span>
                                <textarea type="text" name="message" className="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Awesome (^_^)" style={{ transition: "all 0.15s ease 0s" }} required />
                            </div>
                            <div className="text-center mt-6">
                                <input type="submit" name="submit" value="Send Feedback" className="btn bg-custom-green-light hover:bg-custom-green-dark text-white font-semibold px-10" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserFeedback;