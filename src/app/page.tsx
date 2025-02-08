"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { IconBrandX, IconBrandInstagram, IconBrandYoutubeFilled, IconWorld } from "@tabler/icons-react"
import { Button } from "~/components/ui/button"
import { AnimatedBackground } from "~/components/animated-background"

export default function Page() {
  const [mounted, setMounted] = useState(false)
  const name = "Miizu"
  const description = "made with love ❤️"

  useEffect(() => {
    setMounted(true)
  }, [])

  const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => (
    <span className="inline-block whitespace-nowrap">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="inline-block animate-[letterAppear_0.5s_ease-out_forwards]"
          style={{
            animationDelay: `${delay + (i * 0.1)}s`,
            opacity: 0,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden">
      <AnimatedBackground />

      {/* Main Content Box */}
      <div className="relative w-full max-w-[400px] md:max-w-[400px] animate-box-animations">
        {/* Localized blur effect */}
        <div className="absolute inset-0 backdrop-blur-2xl rounded-[64px]" />

        {/* Content */}
        <div className="relative w-full bg-black/40 rounded-[64px] shadow-2xl p-6 sm:p-8 md:p-12 lg:p-16 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left Side - Profile */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 ring-4 ring-purple-500/20 rounded-full shadow-2xl animate-fade-in">
                <Image
                  src="/miizu-pfp.png"
                  alt="Profile Picture"
                  fill
                  className="rounded-full object-cover"
                  priority
                />
              </div>
              {mounted && (
                <>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white">
                    <AnimatedText text={name} delay={0.8} />
                  </h1>
                  <p className="text-base sm:text-lg text-white/80">
                    <AnimatedText text={description} delay={1.8} />
                  </p>
                </>
              )}
            </div>

            {/* Right Side - Social Links */}
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
              {/* YouTube Button */}
              <Link 
                href="https://www.youtube.com/@Miizumelon" 
                target="_blank" 
                className="w-full max-w-[360px] opacity-0 animate-button-reveal-1"
              >
                <Button
                  variant="secondary"
                  className="w-full h-16 text-lg justify-between bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all hover:scale-105 hover:border-purple-500/50 px-6 sm:px-10 rounded-[32px]"
                >
                  <span className="pl-2">Miizumelon</span>
                  <IconBrandYoutubeFilled className="w-16 h-16 mr-2" />
                </Button>
              </Link>

              {/* Instagram Button */}
              <Link 
                href="https://www.instagram.com/Miizumelon" 
                target="_blank" 
                className="w-full max-w-[360px] opacity-0 animate-button-reveal-2"
              >
                <Button
                  variant="secondary"
                  className="w-full h-16 text-lg justify-between bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all hover:scale-105 hover:border-purple-500/50 px-6 sm:px-10 rounded-[32px]"
                >
                  <span className="pl-2">Miizumelon</span>
                  <IconBrandInstagram className="w-16 h-16 mr-2" />
                </Button>
              </Link>

              {/* X Button */}
              <Link 
                href="https://x.com/@heyMiizu" 
                target="_blank" 
                className="w-full max-w-[360px] opacity-0 animate-button-reveal-3"
              >
                <Button
                  variant="secondary"
                  className="w-full h-16 text-lg justify-between bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all hover:scale-105 hover:border-purple-500/50 px-6 sm:px-10 rounded-[32px]"
                >
                  <span className="pl-2">@heyMiizu</span>
                  <IconBrandX className="w-16 h-16 mr-2" />
                </Button>
              </Link>

              {/* Website Button */}
              <Link 
                href="https://miizu.de" 
                target="_blank" 
                className="w-full max-w-[360px] opacity-0 animate-button-reveal-4"
              >
                <Button
                  variant="secondary"
                  className="w-full h-16 text-lg justify-between bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all hover:scale-105 hover:border-purple-500/50 px-6 sm:px-10 rounded-[32px]"
                >
                  <span className="pl-2">Portfolio</span>
                  <IconWorld className="w-16 h-16 mr-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

