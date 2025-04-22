"use client";
import React, { useRef } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Water } from "@/components/HeroModel/Water";
import { EffectComposer, Bloom } from '@react-three/postprocessing';

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

    return (
        <Canvas camera={{ position: [0, 5, 12], fov: 28 }}>
            {/* Soft ambient light with the primary blue color */}
            <ambientLight intensity={0.4} color="#16ade0" />

            {/* Main light source - matches our text glow color */}
            <directionalLight
                position={[0, 10, 0]}
                intensity={2.0}
                color="#16ade0"
            />

            {/* Slightly brighter highlight from above */}
            <directionalLight
                position={[4, 6, 6]}
                intensity={2.0}
                color="#47c2ef"
            />

            {/* Deep underwater glow from below */}
            <directionalLight
                position={[0, -5, 0]}
                intensity={1.2}
                color="#0c7bb0"
            />

            {/* Rim highlight for definition */}
            <directionalLight
                position={[-5, 2, -4]}
                intensity={3.8}
                color="#7ad7ff"
            />

            {/* Additional accent light for more water-like refraction */}
            <pointLight
                position={[2, 0, 4]}
                intensity={2.5}
                color="#5acbff"
                distance={10}
            />

            <OrbitControls enablePan={!isTablet} enableZoom={false} />

            <EffectComposer>
                <Bloom
                    intensity={2.5}
                    luminanceThreshold={0.2}  // Lower threshold to capture more of the glow
                    luminanceSmoothing={0.9}  // Smoother bloom for water-like effect
                    mipmapBlur
                />
            </EffectComposer>

            <Rotating>
                <Water position={[0, -1.5, 0]} />
            </Rotating>
        </Canvas>
    )
}

const Rotating = ({ children }) => {
    const ref = useRef(null)
    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.2 // tweak speed here
        }
    })
    return <group ref={ref}>{children}</group>
}

export default HeroExperience