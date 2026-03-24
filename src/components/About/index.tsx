"use client";

import { useEffect, useRef } from "react";
import { useSceneStore } from "@/store/paths";

export default function About() {
    const ref = useRef<HTMLDivElement>(null);
    const setActiveSection = useSceneStore((s) => s.setActiveSection);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setActiveSection("about");
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} style={{ height: "100vh" }}>

        </div>
    );
}