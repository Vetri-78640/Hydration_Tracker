import React from 'react';
import Card1 from './Cards/Card1';
import Card2 from './Cards/Card2';
import Card3 from './Cards/Card3';

const cardClasses = "border border-blue-300/50 bg-blue-300/25 col-span-4 rounded-xl flex flex-col items-center p-4 self-start";

const StatCards = () => {
    return (
        <>
            <Card2 className={cardClasses}/>
            <Card1 className={cardClasses} />
            <Card3 className={cardClasses} />
        </>
    );
};

export default StatCards;
