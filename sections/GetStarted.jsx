import React from 'react'
import Button from "@/components/Button";
const GetStarted = () => {
    return (
        <section className="py-8 mt-6 md:mt-12 flex flex-col justify-center items-center gap-8">
            <div className="container p-12 md:p-6 flex flex-col justify-center items-center gap-4">
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">Are you Convinced ?</h2>
                <h3 className="text-blue-300 block text-4xl">Get started with Hydraze</h3>
            </div>
            <Button>Sign up</Button>
        </section>
    )
}
export default GetStarted
