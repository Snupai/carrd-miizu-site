"use client"

import Image from "next/image"
import Link from "next/link"
import { IconBrandX, IconBrandInstagram, IconBrandYoutubeFilled, IconWorld } from "@tabler/icons-react"
import { Button } from "~/components/ui/button"
import { AnimatedBackground } from "~/components/animated-background"

export default function Page() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden">
      <AnimatedBackground />

      {/* Main Content Box */}
      <div className="relative w-full max-w-[95vw] md:max-w-5xl lg:max-w-6xl animate-fade-in-up">
        {/* Localized blur effect */}
        <div className="absolute inset-0 backdrop-blur-2xl rounded-2xl" />

        {/* Content */}
        <div className="relative w-full bg-black/40 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 lg:p-16 border border-white/10">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left Side - Profile */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 ring-4 ring-purple-500/20 rounded-full shadow-2xl">
                <Image
                  src="/miizu-pfp.png"
                  alt="Profile Picture"
                  fill
                  className="rounded-full object-cover"
                  priority
                />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">Miizu</h1>
              <p className="text-base sm:text-lg text-white/80">Digital Creator & Content Producer</p>
            </div>

            {/* Right Side - Social Links */}
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              <Link href="https://www.youtube.com/@Miizumelon" target="_blank" className="w-full opacity-0 animate-fade-in-up-1">
                <Button
                  variant="secondary"
                  className="w-full h-14 text-lg justify-between bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all hover:scale-105 hover:border-purple-500/50 px-6"
                >
                  <span>YouTube</span>
                  <IconBrandYoutubeFilled className="w-8 h-8" />
                </Button>
              </Link>

              <Link href="https://www.instagram.com/Miizumelon" target="_blank" className="w-full opacity-0 animate-fade-in-up-2">
                <Button
                  variant="secondary"
                  className="w-full h-14 text-lg justify-between bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all hover:scale-105 hover:border-purple-500/50 px-6"
                >
                  <span>Instagram</span>
                  <IconBrandInstagram className="w-8 h-8" />
                </Button>
              </Link>

              <Link href="https://x.com/@heyMiizu" target="_blank" className="w-full opacity-0 animate-fade-in-up-3">
                <Button
                  variant="secondary"
                  className="w-full h-14 text-lg justify-between bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all hover:scale-105 hover:border-purple-500/50 px-6"
                >
                  <span>X</span>
                  <IconBrandX className="w-8 h-8" />
                </Button>
              </Link>

              <Link href="https://miizu.de" target="_blank" className="w-full opacity-0 animate-fade-in-up-4">
                <Button
                  variant="secondary"
                  className="w-full h-14 text-lg justify-between bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all hover:scale-105 hover:border-purple-500/50 px-6"
                >
                  <span>Website</span>
                  <IconWorld className="w-8 h-8" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

