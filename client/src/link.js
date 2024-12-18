import React from 'react';
import { Link } from 'react-router-dom';

export default function Links({ username }) {
    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg  text-center">
        <div>  
            <h1>Welcome, {username}!</h1> 
        </div> 
        <div className="space-y-4">
            <Link
                to="/register"
                className="block py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
            registered
            </Link>
            <Link
                to="/login"
                className="block py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
            Login
            </Link>
            <Link
                to="/profile"
                className="block py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
                Profile
            </Link>
        </div>
            <Link
                to="/home"
                className="block py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
            Home
            </Link>
        </div>
    </div>
    );
}