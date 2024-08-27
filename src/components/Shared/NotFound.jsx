/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet } from 'react-helmet';

const NotFound = () => {
    return (
        <div className='text-center flex flex-col items-center justify-center h-60 md:h-96'>
            <Helmet>
                <title>Page Not Found</title>
            </Helmet>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-red-600'>404 - Page Not Found</h1>
            <p className='text-lg md:text-xl font-semibold text-gray-600 mt-2'>The page you are looking for does not exist.</p>
        </div>
    );
};

export default NotFound;