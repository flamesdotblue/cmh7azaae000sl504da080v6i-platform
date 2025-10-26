import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-500/15 text-pink-300 ring-1 ring-inset ring-pink-400/30">
              Modern • Playful • Creative
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Watch, Learn, and Create
            </h1>
            <p className="text-white/70 max-w-xl">
              A sleek YouTube-like experience with a modern, tech-forward vibe. Explore trending videos, discover creators, and enjoy a polished interface.
            </p>
            <div className="flex gap-3 pt-2">
              <button className="px-5 py-2.5 rounded-full bg-pink-500 text-white font-medium shadow-lg shadow-pink-500/20 hover:bg-pink-400 transition">
                Start Watching
              </button>
              <button className="px-5 py-2.5 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition">
                Explore Categories
              </button>
            </div>
          </div>

          <div className="relative h-72 sm:h-80 md:h-[28rem] rounded-2xl bg-neutral-900/50 border border-white/10">
            <Spline
              scene="https://prod.spline.design/4lyTnLJyQd-43uh0/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-neutral-950/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
