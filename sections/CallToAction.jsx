"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
const CallToAction = () => {
    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4 flex">
                <motion.div
                    animate={{
                        x: "-50%",
                    }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}

                    className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium whitespace-nowrap">
                    {/*add pr-16 same as gap-16 to account for jumps*/}
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-8">
                            <Image
                                src="/assets/images/water.svg"
                                alt="water"
                                height={16}
                                width={16}
                                className="w-14 md:w-18"
                            />
                            <span>Sip. Track. Hydraze.</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;