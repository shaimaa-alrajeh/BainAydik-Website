import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CotactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '' 
    });

    const navigate = useNavigate();

    const changeEmail = (e) => {
        setFormData({ ...formData, email: e.target.value });
    };

    const changename = (e) => {
        setFormData({ ...formData, name: e.target.value });
    };

    const changeMessage = (e) => {
        setFormData({ ...formData, message: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/cotactUs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            if (response.ok) {
                alert('We have received your message.')
            } else {
                alert(result.message || 'cotactUs failed. Please check your email and name.');
            }
        } catch (error) {
            console.error('cotactUs failed:', error);
            alert('Cotact Us failed. Please check your internet connection.');
        }
    };

    return (
        <body className="font-sans antialiased text-white leading-normal tracking-wider bg-cover bg-[#242424] flex flex-col mt-12 ">

        <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 bg-[#242425]">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 ">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-2xl font-semibold text-blue-400">contact us </h1>
                        <h3>Fill up the form below to send us a message</h3>
                        <div className="divide-y divide-gray-200">
                            <form onSubmit={handleSubmit} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

                                <div className="relative">
                                    <input
                                        id="name"
                                        name="name"
                                        type="name"
                                        value={formData.name}
                                        onChange={changename}
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                        placeholder="name"
                                    />
                                    <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">name</label>
                                </div>
                                <div className="relative">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={changeEmail}
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                        placeholder="Email "
                                    />
                                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                </div>
                                <div className="relative flex-1">
                                    <input
                                        id='message'
                                        type="text"
                                        name="message"
                                        placeholder="type your message here"
                                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                        value={formData.message}
                                        onChange={changeMessage}
                                        required
                                    />
                                </div>
                                <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4 w-full">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </body>
    );
}

export default CotactUs;
