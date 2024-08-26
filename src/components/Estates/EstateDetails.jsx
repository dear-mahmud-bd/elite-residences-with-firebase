/* eslint-disable no-unused-vars */
import React from 'react';
import { IoLocationOutline, IoPricetagsOutline } from 'react-icons/io5';
import { useLoaderData, useParams } from 'react-router-dom';

const EstateDetails = () => {
    const estates = useLoaderData();

    const { id } = useParams();
    const estate = estates.find(estate => estate.id === id);

    if (!estate) {
        return (
            <div className="text-center flex flex-col items-center justify-center h-60 md:h-96">
                <h1 className="text-4xl font-bold text-red-600">Estate Not Found</h1>
                <p className="text-lg font-semibold text-gray-600 mt-2">Sorry, the Estate you are looking for does not exist.</p>
            </div>
        );
    }

    const { id: apertmentCode, image_url, estate_title, segment_name, description, price, status, area, location, facilities } = estate;

    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col md:flex-row">
                    <div className=' md:w-1/2'>
                        <h2 className="text-4xl font-bold mb-2">{estate_title}</h2>
                        <p className="text-gray-700 text-lg font-semibold mb-3 pb-3 border-b">Segment: {segment_name}</p>

                        <p className="text-gray-700 text-sm mb-4">
                            <span className='font-bold text-black'>Review :</span> {description}
                        </p>
                        <div className="flex gap-4 mb-4 pb-4 border-b">
                            <span className="font-bold">Facilities:</span>
                            <div className='text-gray-700'>
                                {facilities.map((facility, index) => (
                                    <p key={index}>- {facility}</p>
                                ))}
                            </div>
                        </div>
                        
                        <div className="flex gap-3 font-semibold mb-4">
                            <span className={`px-4 py-1 ${estate.status === 'sale' ? 'bg-custom-purple-light' : 'bg-custom-gold-light'} rounded-full text-gray-600`}>Status: {status}</span>
                            <span className={`px-4 py-1 ${estate.status === 'sale' ? 'bg-custom-purple-light' : 'bg-custom-gold-light'} rounded-full text-gray-600`}>Area: {new Intl.NumberFormat().format(area)} sq ft</span>
                        </div>

                        <div className="flex gap-3 font-semibold mb-4 pb-4 border-b">
                            <span className="flex items-center justify-center px-4 py-1 gap-1 bg-custom-green-light2 rounded-full text-gray-600"><IoPricetagsOutline /> ${new Intl.NumberFormat().format(price)}</span>
                            <span className=" flex items-center justify-center px-4 py-1 gap-1 bg-custom-green-light2 rounded-full text-gray-600"><IoLocationOutline /> {location}</span>
                        </div>

                        <div className="flex items-center justify-between font-semibold">
                            <span className={`px-4 py-1 ${estate.status === 'sale' ? 'bg-custom-purple-light' : 'bg-custom-gold-light'} rounded-full text-gray-600`}>AP Number: {apertmentCode}</span>
                            <button className="btn bg-custom-green-light hover:bg-custom-green-dark text-white font-semibold rounded-full">
                                <span className="text-lg">Contact Agent</span>
                            </button>
                        </div>
                    </div>

                    <figure className="rounded-lg w-full md:w-1/2 flex justify-center">
                        <img src={image_url} className="rounded-lg shadow-2xl h-80 mmd:h-[400px] md:h-[500px]" />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;