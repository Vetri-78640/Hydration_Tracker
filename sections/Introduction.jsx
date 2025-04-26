"use client";
import React, {useEffect, useRef, useState} from 'react'
import {useScroll, useTransform, motion} from "framer-motion";
import {twMerge} from "tailwind-merge";

const text = " - it can cause headaches, fatigue, dizziness, dry skin, and trouble concentrating. It also affects your mood, energy, and mental clarity."
const words = text.split(" ");
const Introduction = () => {
    const scrollTarget = useRef(null)
    const {scrollYProgress} = useScroll({target: scrollTarget, offset: ["start end","end end"]})
    const [currentWord, setCurrentWord] = useState(0)
    const wordIndex = useTransform(scrollYProgress,[0,1],[0,words.length]) //tells which word to highlight
    useEffect(() => {
        wordIndex.on('change',(latest)=>(
            setCurrentWord(latest)
        ))
    }, [wordIndex]);
    const isComplete = currentWord >= words.length;
    return (
        <section className="py-6 md:px-12 flex justify-center px-3">
            <div className="container px-3 md:w-2/3">
                <div className="text-center sticky top-32 md:top-38 lg:top-40">
                    <h2 className="inline-block px-6 py-4 rounded-full bg-blue-300/10 text-1xl md:text-2xl border border-blue-300/60 text-blue-300 mb-12">
                        Did you know ?
                    </h2>
                    <div className="text-3xl md:text-4xl font-medium">
                        <span>Dehydration doesn’t just make you thirsty</span>
                        <span>{words.map((word,wordIndex)=>(
                            <span
                                key={wordIndex}
                                className={twMerge(("transition duration-500 text-white/5"),wordIndex < currentWord && "text-white")}
                            >
                                {`${word} `}</span>
                        ))}</span>
                        <motion.span
                            className="text-blue-300 block mt-8"
                            initial={{opacity: 0}}
                            animate={{opacity: isComplete ? 1 : 0}}
                            transition={{duration: 1}}
                            >
                            To keep your body sharp and your mind clear remember to...
                        </motion.span>
                    </div>
                </div>
                <div className="h-[150vh]" ref={scrollTarget}></div>
            </div>
        </section>
    )
}
export default Introduction
