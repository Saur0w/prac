"use client";

import { useRef } from "react";
import { View } from "@react-three/drei";
import LandingMesh from "@/components/Landing/Mesh";
import styles from "@/components/style.module.css";

export default function HeroSection() {
    const ref = useRef<HTMLDivElement>(null!);

    return (
        <section className={styles.page}>
            <div ref={ref} className={styles.canvas} />

            <View track={ref}>
                <ambientLight intensity={0.5} />
                <LandingMesh />
            </View>
        </section>
    );
}