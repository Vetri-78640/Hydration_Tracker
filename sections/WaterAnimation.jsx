"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WaterAnimation = () => {
    const containerRef = useRef(null);
    const sectionRef = useRef(null);
    const scrollTriggerRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const section = sectionRef.current;

        if (!container || !section) return;

        const scrollDistance = container.scrollWidth - section.clientWidth;

        // Store the animation reference
        animationRef.current = gsap.to(container, {
            x: -scrollDistance,
            ease: "none",
        });

        // Store the ScrollTrigger reference
        scrollTriggerRef.current = ScrollTrigger.create({
            trigger: section,
            start: "top 0",
            end: "top -150%",
            pin: true,
            scrub: 0,
            animation: animationRef.current,
        });

        // Cleanup function
        return () => {
            // Kill the specific ScrollTrigger instance
            if (scrollTriggerRef.current) {
                scrollTriggerRef.current.kill();
                scrollTriggerRef.current = null;
            }

            // Kill the animation
            if (animationRef.current) {
                animationRef.current.kill();
                animationRef.current = null;
            }

            // Reset any transforms that might have been applied
            if (container) {
                gsap.set(container, { clearProps: "all" });
            }

            if (section) {
                gsap.set(section, { clearProps: "all" });
            }

            // Refresh ScrollTrigger to recalculate after cleanup
            ScrollTrigger.refresh();
        };
    }, []);

    // Additional cleanup on component unmount
    useEffect(() => {
        return () => {
            // Force cleanup of all ScrollTrigger instances as a fallback
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger === sectionRef.current) {
                    trigger.kill();
                }
            });
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative">
            <div ref={containerRef}>
                <div className="relative">
                    <h1
                        className="whitespace-nowrap text-[20em] md:text-[25em] lg:text-[32em]"
                        style={{
                            color: "transparent",
                            WebkitTextStroke: "1px #16ade0",
                        }}
                    >
                        Stay Hydrated
                    </h1>
                    <h1
                        className="absolute top-0 left-0 whitespace-nowrap text-[20em] md:text-[25em] lg:text-[32em] text-[#16ade0]"
                        style={{
                            textShadow:
                                "0 0 10px #16ade0, 0 0 20px #16ade0, 0 0 40px #16ade0",
                        }}
                    >
                        Stay Hydrated
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default WaterAnimation;