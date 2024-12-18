
        import React, { useState } from 'react';
        import Rating from './rating';
        
        const Card = ({ projectName, price, image, onRate }) => {
        const [rating, setRating] = useState(0); 
        
        const handleRatingChange = (newRating) => {
            setRating(newRating); 
            if (onRate) {
            onRate(newRating); 
            }
        };
        
        return (
            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <img src={image} alt={projectName} className="w-full h-48 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">UI/UX</span>
                <p className="text-lg font-bold text-black truncate block capitalize">{projectName}</p>
                <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-black cursor-auto my-3">${price}</p>
                <Rating rating={rating} setRating={handleRatingChange} /> 
                </div>
            </div>
            </div>
        );
        };
        
        export default Card;
    