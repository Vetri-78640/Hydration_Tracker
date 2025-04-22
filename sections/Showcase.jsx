import React from 'react'
import HeroExperience from "@/components/HeroModel/HeroExperience";

const Showcase = () => {
    return (
        <setion className="container mx-auto flex flex-col items-center py-12">
            <figure className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] mx-auto">
                <HeroExperience />
            </figure>
            <div className="mt-8 text-center px-4">
                <p className="text-center text-xl text-white/50 max-w-2xl mt-8 mx-auto">Did you know? Dehydration can affect your mood, energy, and cognitive performance. Stay on top of your hydration to keep your body and mind at their best!</p>
            </div>
        </setion>
    )
}
export default Showcase
