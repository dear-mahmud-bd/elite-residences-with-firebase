/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const EstateCard = ({estate}) => {

    const navigate = useNavigate();
    const handleEstateDetails = (id)=>{
        // console.log(id);
        navigate(`/estates/${id}`)
    };
    return (
        <div className="card bg-base-100 border">
            <figure>
                <img src={estate.image_url} alt={estate.estate_title} className="rounded-t-md" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl border-t-2 border-dashed pt-2">{estate.estate_title}</h2>
                <p className='font-semibold text-gray-600'>{estate.segment_name}</p>
                <p className="text-lg text-gray-500 border-b-2 border-dashed pb-2">Area: {new Intl.NumberFormat().format(estate.area)} sq ft</p>
                <div className="flex items-center justify-between font-semibold">
                    <span className={`px-4 py-1 ${estate.status === 'sale' ? 'bg-custom-purple-light' : 'bg-custom-gold-light'} rounded-full text-gray-600`}>{estate.status}</span>
                    <button onClick={()=>handleEstateDetails(estate.id)} className="btn bg-custom-green-light hover:bg-custom-green-dark text-white font-semibold rounded-full">
                        <span className="text-lg">View Property</span>
                    </button>
                </div>
            </div>
        </div>
    );
};


EstateCard.propTypes = {
    estate: PropTypes.object
}
export default EstateCard;