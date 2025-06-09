import React, { useState } from 'react';
import { FiRefreshCw } from 'react-icons/fi';

const PRESET_AMOUNTS = [100, 250, 500];
const MAX_CAPACITY = 2000;

const Card1 = ({ className = "" }) => {
    const [consumed, setConsumed] = useState(0);
    const [customAmount, setCustomAmount] = useState('');

    const handleDrink = (amount) => {
        let newConsumed = consumed + amount;
        if (newConsumed > MAX_CAPACITY) newConsumed = MAX_CAPACITY;
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
    };
    const progress = Math.min(100, (consumed / MAX_CAPACITY) * 100);

    return (
        <div className={className}>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
                {PRESET_AMOUNTS.map((amt) => (
                    <button
                        key={amt}
                        onClick={() => handleDrink(amt)}
                        className="px-5 py-3 border rounded-xl border-blue-600/50 bg-blue-300 text-neutral-950 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-blue-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                    >
                        {amt}ml
                    </button>
                ))}
                <div className="flex gap-2 items-center">
                    <input
                        type="number"
                        min="1"
                        max={MAX_CAPACITY}
                        value={customAmount}
                        onChange={e => setCustomAmount(e.target.value)}
                        placeholder="Amount (ml)"
                        className="w-30 px-3 py-3 rounded-xl border border-blue-600/50 bg-blue-300 text-neutral-950 focus:outline-none focus:ring-1 focus:ring-blue-600 text-center"
                    />
                    <button
                        onClick={handleCustomDrink}
                        disabled={!customAmount}
                        className="px-4 py-3 border-2 rounded-xl border-blue-600/50 bg-blue-300 text-neutral-950 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-blue-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Add
                    </button>
                    <button
                        onClick={handleReset}
                        className="flex items-center justify-center px-3 py-3 border border-red-400 rounded-xl bg-white/85 text-red-400 hover:bg-red-100 hover:scale-105 active:scale-95 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all duration-200 shadow-md hover:shadow-lg ml-2"
                        aria-label="Reset"
                    >
                        <FiRefreshCw className="size-6" />
                    </button>
                </div>
            </div>
            {/* Progress Bar */}
            <div className="max-w-xs w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner mb-2">
                <div
                    className="h-full bg-gradient-to-r from-sky-400 via-sky-500 to-blue-500 transition-all duration-700 ease-out shadow-sm"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <div className="text-lg text-white/75 mt-1">
                {consumed}ml / {MAX_CAPACITY}ml ({Math.round(progress)}%)
            </div>
        </div>
    );
};

export default Card1;
