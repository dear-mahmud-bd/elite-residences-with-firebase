/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../providers/AuthProvider';
import useFetchEstates from '../../utility/useFetchEstates';
import { toast } from 'react-toastify';

const ContactAgent = () => {
    const { user } = useContext(AuthContext);
    const { data: estatesData } = useFetchEstates('estatesData.json');

    const handleContactAgent = e =>{
        e.preventDefault();
        e.currentTarget.reset();
        toast.success('We Received Your Request', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Agent</title>
            </Helmet>

            <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8 lg:py-5">
                <div className="mb-4">
                    <div className="mb-3 max-w-3xl text-center sm:text-center md:mx-auto md:mb-5">
                        <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                            Ready to Get Started?
                        </h2>
                    </div>
                    <div className='mb-3 max-w-3xl text-center sm:text-center md:mx-auto '>
                        <p className='text-center text-lg '>
                            Our team of expert agents is here to help you find the perfect apartment that suits your lifestyle and needs.
                        </p>
                    </div>
                    <div className='md:flex justify-between space-y-4'>
                        <div className="flex items-center">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-custom-green-light text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"> </path>
                                </svg>
                            </div>
                            <div className="ml-4">
                                <h3 className="underline text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address</h3>
                                <p className="text-gray-600 dark:text-slate-400">Falguni Housing, Niribili, </p>
                                <p className="text-gray-600 dark:text-slate-400">Nabinagar, Savar, Dhaka</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-custom-green-light text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                    </path>
                                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                                </svg>
                            </div>
                            <div className="ml-4 ">
                                <h3 className="underline text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact</h3>
                                <p className="text-gray-600 dark:text-slate-400">Mobile: +880 1715-567401</p>
                                <p className="text-gray-600 dark:text-slate-400">Mail: dearmahmud.bd@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-custom-green-light text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                    <path d="M12 7v5l3 3"></path>
                                </svg>
                            </div>
                            <div className="ml-4 ">
                                <h3 className="underline text-lg font-medium leading-6 text-gray-900 dark:text-white">Working Hours</h3>
                                <p className="text-gray-600 dark:text-slate-400">Mon - Fri: 08:00 - 17:00</p>
                                <p className="text-gray-600 dark:text-slate-400">Satur &amp; Sun: 08:00 - 12:00</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <form onSubmit={handleContactAgent} className="space-y-4 p-6 bg-white rounded shadow-md">
                        <h2 className="text-2xl font-bold text-gray-700 mb-4">Contact our agent using whatever you prefer</h2>

                        <div className="md:flex md:space-x-4">
                            <div className="flex flex-col space-y-2 md:w-1/2">
                                <label htmlFor="name" className="font-medium text-gray-700">Name</label>
                                <input type="text" className="w-full px-4 py-2 border rounded-md" placeholder={user.displayName} disabled />
                            </div>
                            <div className="flex flex-col space-y-2 md:w-1/2">
                                <label htmlFor="email" className="font-medium text-gray-700">Email</label>
                                <input type="email" className="w-full px-4 py-2 border rounded-md" placeholder={user.email} disabled />
                            </div>
                        </div>

                        <div className="md:flex md:space-x-4">
                            <div className="flex flex-col space-y-2 md:w-1/2">
                                <label htmlFor="phone" className="font-medium text-gray-700">Phone Number</label>
                                <input type="tel" id="phone" className="w-full px-4 py-2 border rounded-md" placeholder="Your Phone Number" required />
                            </div>
                            <div className="flex flex-col space-y-2 md:w-1/2">
                                <label htmlFor="type" className="font-medium text-gray-700">Type</label>
                                <select id="type" className="w-full px-4 py-2 border rounded-md">
                                    <option value="">Select Type</option>
                                    <option value="rent">Rent</option>
                                    <option value="sale">Sale</option>
                                </select>
                            </div>
                        </div>

                        <div className="md:flex md:space-x-4">
                            <div className="flex flex-col space-y-2 md:w-1/2">
                                <label htmlFor="apartment" className="font-medium text-gray-700">Preferred Apartment</label>
                                <select id="apartment" className="w-full px-4 py-2 border rounded-md">
                                    <option value="">Select an Apartment</option>
                                    {estatesData && estatesData.map((estate) => (
                                        <option key={estate.id} value={estate.estate_title}>
                                            {estate.estate_title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col space-y-2 md:w-1/2">
                                <label htmlFor="budget" className="font-medium text-gray-700">Budget Range</label>
                                <input type="text" id="budget" className="w-full px-4 py-2 border rounded-md" placeholder="$1,000,000 - $20,000,000" />
                            </div>
                        </div>

                        <div className="md:flex md:space-x-4">
                            <div className="flex flex-col space-y-2 md:w-1/2">
                                <label htmlFor="move-in-date" className="font-medium text-gray-700">Preferred Move-in Date</label>
                                <input type="date" id="move-in-date" className="w-full px-4 py-2 border rounded-md" />
                            </div>
                            <div className="flex flex-col space-y-2 md:w-1/2">
                                <label htmlFor="lease-duration" className="font-medium text-gray-700">Lease Duration</label>
                                <select id="lease-duration" className="w-full px-4 py-2 border rounded-md">
                                    <option value="6 months">6 Months</option>
                                    <option value="12 months">12 Months</option>
                                    <option value="18 months">18 Months</option>
                                    <option value="24 months">24 Months</option>
                                </select>
                            </div>
                        </div>

                        {/* Preferences and Comments Section */}
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="requirements" className="font-medium text-gray-700">Additional Requirements</label>
                            <textarea id="requirements" className="w-full px-4 py-2 border rounded-md" placeholder="E.g., pet-friendly, parking required"></textarea>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="comments" className="font-medium text-gray-700">Additional Comments</label>
                            <textarea id="comments" className="w-full px-4 py-2 border rounded-md" placeholder="Any other comments or questions"></textarea>
                        </div>

                        <button className="w-full bg-custom-green-light text-white py-2 rounded-md hover:bg-custom-green-dark transition duration-300">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default ContactAgent;