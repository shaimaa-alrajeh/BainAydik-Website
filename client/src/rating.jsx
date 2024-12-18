
import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";

const Rating = ({ rating, setRating, isEditable }) => {
    const [hover, setHover] = useState(null);

    return (
        <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={`cursor-pointer ${star <= (hover || rating) ? "text-yellow-500" : "text-gray-300"}`}
                    onClick={() => isEditable && setRating(star)} 
                    onMouseEnter={() => isEditable && setHover(star)}
                    onMouseLeave={() => isEditable && setHover(null)}
                >
                    {/* ★ */}<FaStar />
                </span>
            ))}
        </div>
    );
};

export default Rating;
