import React from 'react'
import HeroExperience from "@/components/HeroModel/HeroExperience";
import WaterAnimation from "@/sections/WaterAnimation";

const Showcase = () => {
    return (
        <setion className="container mx-auto flex flex-col items-center pb-12">
            <figure className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] mx-auto">
                <HeroExperience />
            </figure>

        </setion>
    )
}
export default Showcase
