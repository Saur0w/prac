"use client";

import { useEffect, useRef } from "react";
import { useSceneStore } from "@/store/paths";

export default function Des() {
    const ref = useRef<HTMLDivElement>(null);
    const setActiveSection = useSceneStore((s) => s.setActiveSection);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setActiveSection("des");
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ setActiveSection]);

    return (
        <div ref={ref} style={{ height: "100vh" }}>

        </div>
    );
}