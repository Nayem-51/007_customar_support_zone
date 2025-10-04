import React from "react";
import vector1 from "../assets/vector1.png";

const Banner = () => {
    return (
        <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="relative overflow-hidden rounded-xl shadow-lg p-10 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 text-white text-center">
                <img
                    src={vector1}
                    alt="vector-left"
                    className="absolute top-0 -left-4 w-1/2 h-full object-contain opacity-70 mix-blend-overlay"
                />
                <img
                    src={vector1}
                    alt="vector-right"
                    className="absolute top-0 -right-4 w-1/2 h-full object-contain opacity-70 mix-blend-overlay transform scale-x-[-1]"
                />
                <h2 className="text-lg font-normal relative z-10 mb-2">In-Progress</h2>
                <p className="text-6xl font-bold relative z-10">0</p>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg p-10 bg-gradient-to-r from-teal-500 via-green-400 to-teal-500 text-white text-center">
                <img
                    src={vector1}
                    alt="vector-left"
                    className="absolute top-0 -left-4 w-1/2 h-full object-contain opacity-70 mix-blend-overlay"
                />
                <img
                    src={vector1}
                    alt="vector-right"
                    className="absolute top-0 -right-4 w-1/2 h-full object-contain opacity-70 mix-blend-overlay transform scale-x-[-1]"
                />
                <h2 className="text-lg font-normal relative z-10 mb-2">Resolved</h2>
                <p className="text-6xl font-bold relative z-10">0</p>
            </div>
        </div>
    );
};

export default Banner;