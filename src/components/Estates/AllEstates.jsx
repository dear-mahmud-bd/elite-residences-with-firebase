/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import EstateCard from './EstateCard';
import { Helmet } from 'react-helmet';

const AllEstates = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [estatesData, setEstatesData] = useState([]);

    const loaderData = useLoaderData();

    useEffect(() => {
        if (loaderData) {
            setEstatesData(Array.isArray(loaderData) ? loaderData : []);
            setIsLoading(false);
        }
    }, [loaderData]);

    return (
        <div>
            <Helmet>
                <title> Estates </title>
            </Helmet>
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <p className="loading loading-bars loading-lg text-custom-green-dark"></p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
                    {estatesData.map((estateData, idx) => (
                        <EstateCard key={idx} estate={estateData} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllEstates;