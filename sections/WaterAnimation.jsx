"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const WaterAnimation = () => {
    const containerRef = useRef(null);
    const outlineTextRef = useRef(null);
    const glowTextRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Wait for component to fully mount before starting animations
        const loadTimeout = setTimeout(() => {
            setIsLoaded(true);

            // Only start animation after elements are definitely rendered
            if (glowTextRef.current) {
                // Initial setup - hide until ready
                gsap.set(glowTextRef.current, {
                    clipPath: "polygon(0% 55%, 5% 54%, 10% 53%, 15% 52%, 20% 51%, 25% 50%, 30% 50%, 35% 51%, 40% 52%, 45% 53%, 50% 55%, 55% 56%, 60% 57%, 65% 58%, 70% 59%, 75% 60%, 80% 60%, 85% 59%, 90% 58%, 95% 56%, 100% 55%, 100% 100%, 0 100%)",
                    opacity: 0
                });

                // Fade in first - smoothly reveal the animation
                gsap.to(containerRef.current, {
                    opacity: 1,
                    duration: 0.5,
                    onComplete: () => {
                        // Once faded in, start the wave animation
                        startWaveAnimation();
                    }
                });
            }
        }, 100);

        function startWaveAnimation() {
            // Make sure the element exists before attempting to animate
            if (!glowTextRef.current) return;

            // Fade in the glow text
            gsap.to(glowTextRef.current, {
                duration: 0.5,
                opacity: 1
            });

            // Create the wave animation with GPU acceleration
            const tl = gsap.timeline({
                repeat: -1,
                defaults: {
                    duration: 2,
                    ease: "power1.inOut",
                    force3D: true, // Force GPU acceleration
                }
            });

            // First half of the wave animation
            tl.to(glowTextRef.current, {
                clipPath: "polygon(0% 55%, 5% 58%, 10% 61%, 15% 64%, 20% 66%, 25% 67%, 30% 66%, 35% 63%, 40% 59%, 45% 54%, 50% 47%, 55% 44%, 60% 42%, 65% 44%, 70% 48%, 75% 53%, 80% 58%, 85% 61%, 90% 60%, 95% 57%, 100% 55%, 100% 100%, 0 100%)"
            });

            // Second half of the wave animation
            tl.to(glowTextRef.current, {
                clipPath: "polygon(0% 55%, 5% 54%, 10% 53%, 15% 52%, 20% 51%, 25% 50%, 30% 50%, 35% 51%, 40% 52%, 45% 53%, 50% 55%, 55% 56%, 60% 57%, 65% 58%, 70% 59%, 75% 60%, 80% 60%, 85% 59%, 90% 58%, 95% 56%, 100% 55%, 100% 100%, 0 100%)"
            });
        }


        return () => {
            clearTimeout(loadTimeout);
            gsap.killTweensOf(glowTextRef.current);
        };
    }, []);

    return (
        <section className="flex justify-center mt-28">
            <div
                ref={containerRef}
                className="relative"
                style={{
                    opacity: 0, // Start hidden
                    willChange: 'transform', // Hint to browser to optimize
                }}
            >
                <h1
                    ref={outlineTextRef}
                    className="absolute whitespace-nowrap text-[4em] md:text-[7em] lg:text-[8em]"
                    style={{
                        transform: 'translate(-50%, -50%)',
                        color: 'transparent',
                        WebkitTextStroke: '1px #16ade0',
                        willChange: 'transform', // Optimize for animation
                    }}
                >
                    Stay Hydrated
                </h1>
                <h1
                    ref={glowTextRef}
                    className="absolute whitespace-nowrap text-[4em] md:text-[7em] lg:text-[8em] text-[#16ade0]"
                    style={{
                        transform: 'translate(-50%, -50%)',
                        textShadow: '0 0 10px #16ade0, 0 0 20px #16ade0, 0 0 40px #16ade0, 0 0 80px #16ade0',
                        willChange: 'clip-path, transform', // Optimize specific properties
                    }}
                >
                    Stay Hydrated
                </h1>
            </div>
        </section>
    );
};

export default WaterAnimation;