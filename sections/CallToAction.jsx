import React from 'react';
import Image from 'next/image';
const CallToAction = () => {
    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4 flex">
                <div className="flex flex-none gap-16 text-7xl md:text-8xl font-medium whitespace-nowrap">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-8">
                            <Image
                                src="/assets/images/water.svg"
                                alt="water"
                                height={16}
                                width={16}
                                className="w-14 md:w-18"
                            />
                            <span>Sip. Track. Hydraze.</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CallToAction;