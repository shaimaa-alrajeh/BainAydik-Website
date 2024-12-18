import React from 'react';
import Search from './search';
import Btn from './btn';
import Button from './button';

const MostPopularHome = () => {
    return (
        <div className="bg-[#252525] min-h-screen mt-10 ">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center sm:pl-10 px-6 py-8">
            {/* Left Column (Text and Buttons) */}
            <div className="flex flex-col justify-center text-center lg:text-left">
                <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mt-8 lg:mt-32">
                    Bain Aydik
                </h1>
                <h3 className="text-white text-xl sm:text-2xl mt-4">
                    Work MADE EASY!
                </h3>
                <h2 className="text-[#D5D5D5] text-lg sm:text-xl mt-2">
                    Hire an Expert or Be an Expert.
                </h2>
                <h4 className="text-[#D5D5D5] text-sm sm:text-base mt-6">
                    In the ever-evolving landscape of skills and knowledge, the choice between hiring an expert or becoming
                </h4>
                <h4 className="text-[#D5D5D5] text-sm sm:text-base mt-2">
                    one yourself is a pivotal decision.
                </h4>
    
                {/* Search Component */}
                <div className="mt-8">
                    <Search />
                </div>
    
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row sm:justify-center gap-6 mt-8">
                    <Btn />
                    <Button />
                </div>
            </div>
    
            {/* Right Column (Images) */}
            <div className="relative flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
                {/* Image */}
                <img
                    src="/assets/images/GroupHome.png"
                    className="w-72 sm:w-80 md:w-[35rem] lg:w-[35rem] lg:ml-24 lg:mt-20 ml-6"
                    loading="lazy"
                    alt="Home Image"
                />
            </div>
        </div>
    </div>
    
    );
    };

export default MostPopularHome;
