"use client";
import React, { useState } from 'react';

const MAX_CAPACITY = 2000; // ml
const PRESET_AMOUNTS = [200, 300, 500];

const Bottle = () => {
    const [consumed, setConsumed] = useState(0);
    const [customAmount, setCustomAmount] = useState('');
    const [showEmptyMsg, setShowEmptyMsg] = useState(false);

    const handleDrink = (amount) => {
        let newConsumed = consumed + amount;
        if (newConsumed >= MAX_CAPACITY) {
            newConsumed = MAX_CAPACITY;
            setShowEmptyMsg(true);
        } else {
            setShowEmptyMsg(false);
        }
        setConsumed(newConsumed);
    };

    const handleCustomDrink = () => {
        const amt = parseInt(customAmount, 10);
        if (!isNaN(amt) && amt > 0) {
            handleDrink(amt);
            setCustomAmount('');
        }
    };

    const handleReset = () => {
        setConsumed(0);
        setShowEmptyMsg(false);
    };

    // Calculate water fill height (0ml = 100%, 2000ml = 0%)
    const fillPercent = Math.max(0, 100 - (consumed / MAX_CAPACITY) * 100);

    return (
        <div className="bg-white text-black min-h-screen w-full flex flex-col items-center justify-center p-4">
            <div className="mb-8">
                {/* Bottle Container with SVG overlay */}
                <div className="relative mx-auto" style={{ width: '200px', height: '400px' }}>

                    {/* Water Fill - positioned to match bottle interior */}
                    <div
                        className="absolute z-10"
                        style={{
                            left: '67px',      // Match bottle interior left
                            right: '45px',     // Match bottle interior right
                            bottom: '102px',    // Match bottle interior bottom
                            width: '66px',    // Interior width of bottle
                            height: '130px',   // Interior height of bottle
                        }}
                    >
                        <div className="absolute bottom-0 left-0 right-0 h-full overflow-hidden rounded-2xl">
                            <div
                                className="w-full absolute bottom-0 bg-gradient-to-t from-sky-400 to-sky-300 transition-all duration-700 ease-out"
                                style={{ height: `${fillPercent}%` }}
                            />
                        </div>
                    </div>

                    {/* SVG Bottle Outline */}
                    <svg
                        className="absolute top-0 left-0 z-20 pointer-events-none select-none"
                        fill="#0074D9"
                        height="400px"
                        width="200px"
                        version="1.1"
                        viewBox="0 0 441.224 441.224"
                        style={{
                            filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))'
                        }}
                    >
                        <g>
                            <g>
                                <path d="M282.847,152.109c-5.216-2.914-8.456-8.426-8.456-14.385s3.24-11.472,8.456-14.385 c6.948-3.882,11.265-11.222,11.265-19.155c0-4.444-2.546-8.296-6.252-10.198v-5.3c3.503-0.344,6.25-3.305,6.25-6.897V67.2 c0-9.994-6.044-18.827-15.397-22.503c-7.663-3.01-15.659-5.393-23.771-7.083c-5.32-1.104-9.182-5.9-9.182-11.403V14.22 c0-7.841-6.415-14.22-14.3-14.22h-21.7c-7.885,0-14.3,6.379-14.3,14.22v11.99c0,5.503-3.857,10.299-9.175,11.404 c-8.089,1.684-16.089,4.066-23.776,7.083c-4.559,1.791-8.425,4.862-11.178,8.88c-2.761,4.026-4.221,8.736-4.221,13.623v14.589 c0,3.592,2.747,6.553,6.25,6.897v5.302c-3.703,1.902-6.248,5.754-6.248,10.196c0,7.934,4.316,15.274,11.264,19.155 c5.216,2.914,8.456,8.425,8.456,14.385s-3.24,11.472-8.455,14.385c-6.948,3.881-11.265,11.22-11.265,19.155v225.94 c0,24.272,19.747,44.02,44.02,44.02h58.96c24.273,0,44.021-19.748,44.021-44.02v-225.94 C294.112,163.33,289.797,155.99,282.847,152.109z M279.86,88.72v4h-118.5v-4H279.86z M209.76,8h21.7 c3.475,0,6.301,2.79,6.301,6.22v0.004H203.46V14.22C203.46,10.79,206.286,8,209.76,8z M155.11,67.2 c0-3.264,0.975-6.41,2.819-9.099c1.846-2.695,4.44-4.755,7.502-5.957c7.27-2.852,14.834-5.105,22.482-6.697 c9.008-1.872,15.546-9.961,15.546-19.236v-3.986h34.301v3.986c0,9.276,6.542,17.366,15.553,19.236 c7.668,1.598,15.229,3.851,22.474,6.697c6.271,2.463,10.323,8.374,10.323,15.056v13.52h-131V67.2z M286.112,397.204 c0,19.861-16.159,36.02-36.021,36.02h-58.96c-19.861,0-36.02-16.159-36.02-36.02v-225.94c0-5.039,2.745-9.702,7.166-12.17 c7.743-4.326,12.554-12.515,12.554-21.37s-4.811-17.043-12.554-21.369c-4.42-2.469-7.166-7.132-7.166-12.171 c0-1.91,1.554-3.464,3.464-3.464h124.072c1.91,0,3.464,1.554,3.464,3.464c0,5.038-2.746,9.702-7.167,12.171 c-7.743,4.326-12.554,12.514-12.554,21.369s4.811,17.043,12.555,21.37c4.42,2.469,7.166,7.132,7.166,12.17L286.112,397.204 L286.112,397.204z"></path>
                                <path d="M264.561,161.224c-2.209,0-4,1.791-4,4s1.791,4,4,4c3.337,0,6.051,2.714,6.051,6.051v220.449c0,2.209,1.791,4,4,4 s4-1.791,4-4v-220.45C278.612,167.527,272.309,161.224,264.561,161.224z"></path>
                                <path d="M264.561,55.224c-2.209,0-4,1.791-4,4s1.791,4,4,4c3.336,0,6.051,2.714,6.051,6.051v5.449c0,2.209,1.791,4,4,4 s4-1.791,4-4v-5.449C278.612,61.527,272.309,55.224,264.561,55.224z"></path>
                            </g>
                        </g>
                    </svg>

                </div>

                <div className="mt-6 font-bold text-center text-xl text-gray-700">
                    {consumed < MAX_CAPACITY
                        ? `${MAX_CAPACITY - consumed} ml remaining`
                        : 'Bottle Empty!'}
                </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-3 mb-4 flex-wrap">
                {PRESET_AMOUNTS.map((amt) => (
                    <button
                        key={amt}
                        onClick={() => handleDrink(amt)}
                        disabled={consumed >= MAX_CAPACITY}
                        className={`px-5 py-3 font-semibold border-2 rounded-xl border-sky-600 bg-white text-sky-700 transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-sky-300 ${
                            consumed >= MAX_CAPACITY
                                ? 'opacity-50 cursor-not-allowed'
                                : 'hover:bg-sky-50 hover:scale-105 cursor-pointer active:scale-95 shadow-md hover:shadow-lg'
                        }`}
                    >
                        {amt}ml
                    </button>
                ))}
                <input
                    type="number"
                    min="1"
                    max={MAX_CAPACITY}
                    value={customAmount}
                    onChange={e => setCustomAmount(e.target.value)}
                    placeholder="Custom"
                    className="w-24 px-3 py-3 rounded-xl border-2 border-sky-600 text-sky-700 bg-white focus:outline-none focus:ring-3 focus:ring-sky-300 disabled:opacity-50 font-semibold text-center"
                    disabled={consumed >= MAX_CAPACITY}
                />
                <button
                    onClick={handleCustomDrink}
                    disabled={consumed >= MAX_CAPACITY || !customAmount}
                    className={`px-5 py-3 font-semibold border-2 rounded-xl border-sky-600 bg-white text-sky-700 transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-sky-300 ${
                        consumed >= MAX_CAPACITY || !customAmount
                            ? 'opacity-50 cursor-not-allowed'
                            : 'hover:bg-sky-50 hover:scale-105 cursor-pointer active:scale-95 shadow-md hover:shadow-lg'
                    }`}
                >
                    Add
                </button>
            </div>

            <button
                onClick={handleReset}
                className="px-8 py-3 bg-white border-2 border-red-500 rounded-xl font-bold text-red-500 mt-2 cursor-pointer hover:bg-red-50 hover:scale-105 active:scale-95 focus:outline-none focus:ring-3 focus:ring-red-300 transition-all duration-200 shadow-md hover:shadow-lg"
            >
                🔄 Reset Bottle
            </button>

            {showEmptyMsg && (
                <div className="text-red-600 mt-8 font-bold text-center text-xl animate-bounce bg-red-50 px-6 py-3 rounded-xl border-2 border-red-200">
                    🎉 Congratulations! You drank 2000ml! 🎉
                </div>
            )}

            {/* Progress Bar */}
            <div className="mt-8 w-80 bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                <div
                    className="h-full bg-gradient-to-r from-sky-400 via-sky-500 to-blue-500 transition-all duration-700 ease-out shadow-sm border border-red-500"
                    style={{ width: `${(consumed / MAX_CAPACITY) * 100}%` }}
                ></div>
            </div>
            <div className="text-lg font-semibold text-gray-600 mt-3">
                {consumed}ml / {MAX_CAPACITY}ml ({Math.round((consumed / MAX_CAPACITY) * 100)}%)
            </div>
        </div>
    );
};

export default Bottle;