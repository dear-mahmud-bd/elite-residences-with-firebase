/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Banner';
import AllEstates from '../Estates/AllEstates';
import useFetchEstates from '../../utility/useFetchEstates';
import EstateCard from '../Estates/EstateCard';
import { Link } from 'react-router-dom';
import UserFeedback from './UserFeedback';
import { Helmet } from 'react-helmet';

const Home = () => {
    const { data: estatesData } = useFetchEstates('estatesData.json');

    return (
        <div>
            <Helmet>
                <title> Home </title>
            </Helmet>

            <Banner></Banner>

            {/* Our Story */}
            <div className='mt-10 '>
                <h1 className='text-center text-4xl font-bold border-b-2 pb-2 mb-4'>Our Story</h1>
                <p className='text-center text-lg'>
                    Elite Residences was founded with a vision to redefine luxury living. From sky-high penthouses to serene beachfront estates, we create exceptional homes that embody elegance, comfort, and exclusivity. Experience the art of luxurious living with us.
                </p>
            </div>

            {/* Estates */}
            <div>
                <div className='mt-16 border-b-2 pb-2 mb-4'>
                    <h1 className='text-center text-4xl font-bold'>Estates</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
                    {
                        estatesData.slice(0, 6).map((estateData, idx) => <EstateCard key={idx} estate={estateData}> </EstateCard>)
                    }
                </div>
                <div className='my-5 text-center'>
                    <Link to="/estates" className="btn bg-custom-green-light hover:bg-custom-green-dark text-white font-semibold px-10">
                        See All Estates
                    </Link>
                </div>
            </div>

            <UserFeedback></UserFeedback>
        </div>
    );
};

export default Home;