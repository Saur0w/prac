"use client";

import styles from "@/components/style.module.css";
import {View} from "@react-three/drei";
import Mesh from "./Mesh";

export default function About() {
    return (
        <div className={styles.page}>
            <View>
                <Mesh />
            </View>
        </div>
    )
}