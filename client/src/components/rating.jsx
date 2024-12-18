
import React from 'react';
const Rating = ({ rating, setRating }) => {
const totalStars = 5;

const handleClick = (value) => {
    setRating(value); 
};

const getStarColor = (index) => {
    return index < rating ? 'text-yellow-500' : 'text-gray-400'; 
};
return (
    <div className="flex items-center">
    {[...Array(totalStars)].map((_, index) => (
        <span
        key={index}
        className={`cursor-pointer text-2xl ${getStarColor(index)}`} 
        onClick={() => handleClick(index + 1)}
        >
        ★
        </span>
    ))}
    </div>
);
};

export default Rating;
