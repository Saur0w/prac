"use client";

import { useRef } from "react";
import { View } from "@react-three/drei";
import LandingMesh from "@/components/Landing/Mesh";

export default function HeroSection() {
    const ref = useRef<HTMLDivElement>(null!);

    return (
        <section style={{ height: "100vh" }}>
            <div ref={ref} style={{ width: "100%", height: "100%" }} />

            <View track={ref}>
                <ambientLight intensity={0.5} />
                <LandingMesh />
            </View>
        </section>
    );
}