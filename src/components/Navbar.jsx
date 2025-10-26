import React from 'react';
import { Search, Bell, User, PlayCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
        <div className="flex items-center gap-2 shrink-0">
          <PlayCircle className="w-6 h-6 text-pink-400" />
          <span className="font-semibold tracking-tight">YouTube Clone</span>
        </div>

        <div className="flex-1" />

        <div className="hidden md:flex items-center w-full max-w-xl mx-auto">
          <div className="flex items-center w-full bg-white/5 border border-white/10 rounded-full focus-within:border-pink-400/60 transition">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent px-4 py-2.5 outline-none text-sm placeholder-white/50"
              aria-label="Search"
            />
            <button className="px-4 py-2.5 rounded-r-full bg-pink-500/20 hover:bg-pink-500/30 border-l border-white/10">
              <Search className="w-5 h-5 text-pink-300" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <button className="p-2 rounded-full hover:bg-white/10" aria-label="Notifications">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full bg-white/10 hover:bg-white/20" aria-label="Account">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
