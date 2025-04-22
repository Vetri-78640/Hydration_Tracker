import React from 'react'
import Button from "@/components/Button";
const Hero = () => {
    return (
        <section className="py-24 flex justify-center items-center">
            <div className="container">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mx-auto">Stay Hydrated, Stay Healthy</h1>
                <p className="text-center text-xl text-white/60 max-w-2xl mt-8 mx-auto">Track your daily water intake, build healthy habits, and keep your body refreshed one sip at a time.</p>
                <div className="flex justify-center items-center mt-8">
                    <Button variant="primary">Let's Go</Button>
                </div>
            </div>
        </section>
    )
}
export default Hero
