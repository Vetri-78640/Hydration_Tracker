import React from 'react';
import Card1 from './Cards/Card1';

const cardClasses = "border border-blue-300/50 bg-blue-300/25 col-span-4 rounded-xl flex flex-col items-center p-4";

const StatCards = () => {
    return (
        <>
            <Card1 className={cardClasses} />
            <div className={cardClasses}>Card 2</div>
            <div className={cardClasses}>Card 3</div>
        </>
    );
};

export default StatCards;
