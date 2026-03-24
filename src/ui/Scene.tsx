"use client";

import { Canvas } from "@react-three/fiber";
import { View, Preload } from "@react-three/drei";
import { Suspense } from "react";

export default function Scene() {
    return (
        <Canvas
            camera={{ position: [0, 0, 5] }}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                pointerEvents: "none",
            }}
        >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                <View.Port />
            </Suspense>
            <Preload all />
        </Canvas>
    );
}