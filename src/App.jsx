import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoGrid from './components/VideoGrid';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <VideoGrid />
      </main>
    </div>
  );
}
