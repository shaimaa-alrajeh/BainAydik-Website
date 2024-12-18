import React ,{useState}from 'react'

import Rating from './rating';
    const Card = ({projectName,isEditable}) => {
        const [rating, setRating] = useState(0);
    return (
    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <img src="/assets/images/ui-2.jfif"/>
            <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">UI/UX</span>
                <p class="text-lg font-bold text-black truncate block capitalize">{projectName}</p>
                <div class="flex items-center justify-between ">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <Rating rating={rating} setRating={setRating} isEditable={isEditable} />
            {isEditable ? (
                <p className="text-gray-500 mt-2">Rate this project</p>  
            ) : (
                <p className="text-gray-500 mt-2">User Rating: {rating} / 5</p> 
            )}
                    
                </div>
                </div>
            </div>
    )}
    
export default Card

