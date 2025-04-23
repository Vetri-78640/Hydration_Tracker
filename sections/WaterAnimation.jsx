"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WaterAnimation = () => {
    const containerRef = useRef(null);
    const outlineTextRef = useRef(null);
    const glowTextRef = useRef(null);
    const waveTimeline = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const section = sectionRef.current;
        const outlineText = outlineTextRef.current;
        const glowText = glowTextRef.current;

        const scrollDistance = container.scrollWidth - section.clientWidth;

        // Set initial opacity for both texts
        gsap.set([outlineText, glowText], { opacity: 0 });

        // Set initial clip path for wave
        gsap.set(glowText, {
            clipPath:
                "polygon(0% 55%, 5% 54%, 10% 53%, 15% 52%, 20% 51%, 25% 50%, 30% 50%, 35% 51%, 40% 52%, 45% 53%, 50% 55%, 55% 56%, 60% 57%, 65% 58%, 70% 59%, 75% 60%, 80% 60%, 85% 59%, 90% 58%, 95% 56%, 100% 55%, 100% 100%, 0 100%)",
        });

        // Fade in section then trigger wave
        const fadeInTimeline = gsap.timeline({
            onComplete: () => {
                startWaveAnimation();
            },
        });

        fadeInTimeline.to(container, {
            opacity: 1,
            duration: 0.5,
        });

        const horizontalScroll = gsap.to(container, {
            x: -scrollDistance,
            ease: "none",
        });

        ScrollTrigger.create({
            trigger: section,
            start: "top 0",
            end: "top -150%",
            pin: true,
            scrub: 2,
            animation: horizontalScroll,
            markers: true,
            onEnter: () => {
                gsap.to([outlineText, glowText], { opacity: 1, duration: 0.5 });
            },

            onEnterBack: () => {
                gsap.to([outlineText, glowText], { opacity: 1, duration: 0.5 });
            },
            onLeaveBack: () => {
                gsap.to([outlineText, glowText], { opacity: 0, duration: 2 });
            },
        });

        function startWaveAnimation() {
            if (!glowText) return;

            waveTimeline.current = gsap.timeline({
                repeat: -1,
                defaults: {
                    duration: 2,
                    ease: "power1.inOut",
                    force3D: true,
                },
            });

            waveTimeline.current
                .to(glowText, {
                    clipPath:
                        "polygon(0% 55%, 5% 58%, 10% 61%, 15% 64%, 20% 66%, 25% 67%, 30% 66%, 35% 63%, 40% 59%, 45% 54%, 50% 47%, 55% 44%, 60% 42%, 65% 44%, 70% 48%, 75% 53%, 80% 58%, 85% 61%, 90% 60%, 95% 57%, 100% 55%, 100% 100%, 0 100%)",
                })
                .to(glowText, {
                    clipPath:
                        "polygon(0% 55%, 5% 54%, 10% 53%, 15% 52%, 20% 51%, 25% 50%, 30% 50%, 35% 51%, 40% 52%, 45% 53%, 50% 55%, 55% 56%, 60% 57%, 65% 58%, 70% 59%, 75% 60%, 80% 60%, 85% 59%, 90% 58%, 95% 56%, 100% 55%, 100% 100%, 0 100%)",
                });
        }

        return () => {
            if (waveTimeline.current) waveTimeline.current.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative">
            <div ref={containerRef}>
                <div className="relative">
                    <h1
                        ref={outlineTextRef}
                        className="whitespace-nowrap text-[20em] md:text-[26em] lg:text-[32em]"
                        style={{
                            color: "transparent",
                            WebkitTextStroke: "1px #16ade0",
                        }}
                    >
                        Stay Hydrated
                    </h1>
                    <h1
                        ref={glowTextRef}
                        className="absolute top-0 left-0 whitespace-nowrap text-[20em] md:text-[26em] lg:text-[32em] text-[#16ade0]"
                        style={{
                            textShadow:
                                "0 0 10px #16ade0, 0 0 20px #16ade0, 0 0 40px #16ade0, 0 0 80px #16ade0",
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