"use client"

import styles from "./animated-background.module.css"

export function AnimatedBackground() {
  return (
    <div className={styles.gradient}>
      <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={styles.gradientsContainer}>
        <div className={styles.gradient1}></div>
        <div className={styles.gradient2}></div>
        <div className={styles.gradient3}></div>
        <div className={styles.gradient4}></div>
        <div className={styles.gradient5}></div>
        <div className={styles.interactive}></div>
      </div>
    </div>
  )
}
  
  