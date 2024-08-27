/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EstateCard from './EstateCard';
import { Helmet } from 'react-helmet';

const AllEstates = () => {
    const estatesData = useLoaderData();

    return (
        <div>
            <Helmet>
                <title> Estates </title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
                {
                    estatesData.map((estateData, idx) => <EstateCard key={idx} estate={estateData}> </EstateCard>)
                }
            </div>
        </div>
    );
};

export default AllEstates;