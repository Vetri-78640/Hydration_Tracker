import React from 'react';
import Button from "@/components/Button";

const GetStarted = () => {
    return (
        <section className="py-8 flex flex-col justify-center items-center md:gap-8 px-3">
            <div className="container p-12 md:p-6 flex flex-col justify-center items-center gap-4">
                <h2 className="text-6xl font-medium text-center">
                    Convinced?
                </h2>
                <h3 className="text-blue-300 text-4xl text-center">
                    Get started with Hydraze
                </h3>
            </div>
            <Button>Sign up</Button>
        </section>
    );
}

export default GetStarted;