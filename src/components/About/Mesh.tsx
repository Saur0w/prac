"use client";

import { } from "@react-three/fiber";

export default function Mesh() {
    return (
        <mesh>
            <boxGeometry />
            <meshBasicMaterial color="green" />
        </mesh>
    )
}