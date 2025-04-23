import React from 'react'
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Showcase from "@/sections/Showcase";
import WaterAnimation from "@/sections/WaterAnimation";
import Features from "@/sections/Features";

const Page = () => {
    return (
        <>
            <Navbar />
            <Hero/>
            <Showcase />
            <WaterAnimation/>
            <Features />
        </>
    )
}
export default Page
