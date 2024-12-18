import React from 'react';

function Card() {
  return (
    <div >
      <div className="w-48 bg-blue-300 p-2 rounded-lg">
        <div className="bg-gray-800 w-full h-32 rounded-t-lg transform transition-transform hover:scale-95"></div>
        <div className="text-blue-500 uppercase text-xs font-semibold pt-2 pl-1 hover:cursor-pointer">
          Category
        </div>
        <div className="text-gray-700 font-semibold p-2 hover:cursor-pointer">
          Heading
        </div>
        <div className="text-gray-500 text-xs font-normal pt-5 pl-1">
          <span className="font-semibold hover:cursor-pointer">Author Name</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
