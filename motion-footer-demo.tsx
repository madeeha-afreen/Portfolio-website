"use client";

import { CinematicFooter } from "@/components/ui/motion-footer";

/** Example page layout: tall main block, then cinematic footer reveal. */
export default function MotionFooterDemo() {
  return (
    <div className="relative w-full min-h-screen bg-background font-sans overflow-x-hidden">
      <main className="relative z-10 w-full min-h-[120vh] bg-background flex flex-col items-center justify-center text-foreground border-b border-border/10 shadow-2xl rounded-b-3xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none" />

        <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-muted-foreground mb-8 uppercase text-center px-4">
          Scroll down to reveal
        </h1>

        <div className="w-px h-32 bg-gradient-to-b from-muted-foreground to-transparent" />
      </main>

      <CinematicFooter />
    </div>
  );
}
