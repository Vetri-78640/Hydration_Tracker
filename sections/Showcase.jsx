import React from 'react'
import HeroExperience from "@/components/HeroModel/HeroExperience";

const Showcase = () => {
    return (
        <setion className="container mx-auto flex flex-col items-center py-12">
            <figure className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] mx-auto">
                <HeroExperience />
            </figure>
            <div className="mt-8 text-center px-4">
                <h4 className="text-lg md:text-3xl text-white/70 font-semibold">Did you know?</h4>
                <p className="text-center text-base md:text-xl text-white/60 max-w-2xl mt-6 mx-auto">
                    Dehydration doesn’t just make you thirsty — it can cause headaches, fatigue, dizziness, dry skin, and trouble concentrating. It also affects your mood, energy, and mental clarity.
                </p>
                <h4 className="text-lg md:text-2xl text-white/70 font-semibold mt-6">
                    To keep your body sharp and your mind clear remember to...
                </h4>
            </div>
        </setion>
    )
}
export default Showcase
