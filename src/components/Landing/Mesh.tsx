"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export default function LandingMesh() {
    const meshRef = useRef<Mesh>(null!);

    useFrame((state, delta) => {
        meshRef.current.rotation.x += delta * 0.5;
        meshRef.current.rotation.y += delta * 0.8;
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color="red" />
        </mesh>
    );
}