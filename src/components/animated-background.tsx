"use client"

export function AnimatedBackground() {
  return (
    <div className="gradient-bg">
      <svg className="gradient-svg" xmlns="http://www.w3.org/2000/svg">
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
      <div className="gradients-container">
        <div className="gradient1"></div>
        <div className="gradient2"></div>
        <div className="gradient3"></div>
        <div className="gradient4"></div>
        <div className="gradient5"></div>
        <div className="interactive"></div>
      </div>
    </div>
  )
}
  
  