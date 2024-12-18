import React from 'react';
import Navbar from '../components/navbar';
import Search from '../components/search';
import Btn from '../components/btn';
import Button from '../components/button';

const Home = () => {
    return (
        <div className='bg-[#252525] min-h-screen'>
        <Navbar />
        <div className='flex  lg:flex-row flex-col justify-evenly items-center sm:pl-10'>
            <div className='flex flex-col justify-center'>
            <h1 className='text-white text-6xl mt-32 bold'>Bain Aydik</h1>
            <h3 className='text-white text-2xl mt-6'>work MADE EASY!</h3>
            <h2 className='text-[#D5D5D5] text-xl mt-2'>Hire an Expert or Be an Expert.</h2>
            <h4 className='text-[#D5D5D5] text-sm mt-10 '>
                In the ever-evolving landscape of skills and knowledge, the choice between hiring an expert or becoming
            </h4>
            <h4 className='text-[#D5D5D5] text-sm mt-2'>one yourself is a pivotal decision.</h4>
            <Search />
            <div className='flex  sm:item-center justify-center gap-10'>
                <Btn/>
                <Button/>
            </div>
            
            </div>
            <div className='relative flex items-center'>
            <img
                src='/assets/images/Group_14582637-removebg-preview.png'
                className='absolute z-1 lg:w-72 w-52 lg:mr-16 lg:mt-24   m-0'
                loading='lazy'
                width='100'
                alt='Background Image'
            />
            <img
                src='/assets/images/lines-removebg-preview.png'
                className='w-80  lg:ml-24 lg:mt-20 ml:6'
                loading='lazy'
                width='100'
                alt='Line Image'
            />
            </div>
        </div>
        </div>
    );
    };

export default Home;
