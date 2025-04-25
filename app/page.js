import React from 'react'
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Showcase from "@/sections/Showcase";
import WaterAnimation from "@/sections/WaterAnimation";
import Features from "@/sections/Features";
import Introduction from "@/sections/Introduction";
import GetStarted from "@/sections/GetStarted";
import CallToAction from "@/sections/CallToAction";
import Footer from "@/sections/Footer";

const Page = () => {
    return (
        <>
            <Navbar />
            <Hero/>
            <Showcase />
            <Introduction/>
            <WaterAnimation/>
            <Features />
            <CallToAction/>
            <GetStarted/>
            <Footer/>
        </>
    )
}
export default Page
