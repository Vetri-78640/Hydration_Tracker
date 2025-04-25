import React from 'react'

const Introduction = () => {
    return (
        <section className="py-6 md:px-24 flex justify-center px-3">
            <div className="container px-3">
                <div className="text-center">
                    <h2 className="inline-block px-6 py-4 rounded-full bg-blue-300/10 text-4xl md:text-5xl border border-blue-300/50 text-blue-300 mb-12">
                        Did you know ?
                    </h2>
                    <div className="text-3xl md:text-4xl font-medium">
                        <span>Dehydration doesn’t just make you thirsty</span>
                        <span className="text-white/15"> - it can cause headaches, fatigue, dizziness, dry skin, and trouble concentrating. It also affects your mood, energy, and mental clarity.</span>
                        <span className="text-blue-300 block">To keep your body sharp and your mind clear remember to...</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Introduction
