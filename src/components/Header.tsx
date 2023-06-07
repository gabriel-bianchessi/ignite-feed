import React from "react";
import styles from "./header.module.css" 

export function Header() {
  return (
    <header className={styles.header}>
      <strong className={styles.header}>Ignite Feed</strong>
    </header>
  )
}