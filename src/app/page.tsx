"use client";
import styles from "./page.module.css";
import Landing from "@/components/Landing";
import Des from "@/components/Des";
import About from "@/components/About";

export default function Home() {
  return (
    <div className={styles.page}>
      <Landing />
      <Des />
      <About />
    </div>
  );
}
