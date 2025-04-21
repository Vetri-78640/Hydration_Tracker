import React from 'react'
import HeroExperience from "@/components/HeroModel/HeroExperience";
const Hero = () => {
    return (
        <section className="container mx-auto flex flex-col items-center py-12">
            <figure className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] mx-auto">
                <HeroExperience />
            </figure>

            <div className="mt-8 text-center px-4">
                <h1 className="text-3xl font-bold text-white">Your Heading</h1>
                <p className="text-white mt-2">Some cool description goes here.</p>
            </div>
        </section>
    )
}
export default Hero
