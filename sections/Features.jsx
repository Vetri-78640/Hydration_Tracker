import React from 'react';
import FeatureCard from "@/components/FeatureCard";

const Features = () => {
    return (
        <section className="py-24 md:mt-12 flex flex-col items-center justify-center">
            <div className="container flex flex-col justify-center items-center p-12 md:p-6">
                <h2 className="text-6xl font-medium text-center mt-6">
                    Hydraze makes tracking <span className="text-blue-300 block">convenient</span>
                </h2>
                <div className="mt-24 grid grid-cols-1 gap-14 md:grid-cols-4 lg:grid-cols-3">
                    <FeatureCard
                        title="Fully Customisable Reminders"
                        description="Set reminders to keep you hydrated at all times"
                        image={<img src="/assets/images/bell.svg" alt="bell"/>}
                        className="md:col-span-2 lg:col-span-1"
                    />

                    <FeatureCard
                        title="Track Water Consumption"
                        description="Fully customisable water consumption tracking"
                        image={<img src="/assets/images/glass.svg" alt="glass"/>}
                        className="md:col-span-2 lg:col-span-1"
                    />

                    <FeatureCard
                        title="Weather Based Suggestions"
                        description="Dynamic reminders and suggestions based on your location's weather"
                        image={<img src="/assets/images/weather.svg" alt="weather"/>}
                        className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;