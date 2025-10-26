import React from 'react';
import VideoCard from './VideoCard';

const videos = [
  {
    id: '1',
    title: 'Satisfying Liquid Blob Animation in React',
    channel: 'Creative Tech',
    views: '1.2M views',
    time: '2 days ago',
    thumb: 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1200&auto=format&fit=crop',
    avatar: 'https://ui-avatars.com/api/?name=Creative+Tech&background=111827&color=fff',
    duration: '12:36',
  },
  {
    id: '2',
    title: 'Build a YouTube Clone with React + Tailwind',
    channel: 'Code Studio',
    views: '856K views',
    time: '1 week ago',
    thumb: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1200&auto=format&fit=crop',
    avatar: 'https://ui-avatars.com/api/?name=Code+Studio&background=111827&color=fff',
    duration: '18:42',
  },
  {
    id: '3',
    title: 'Top 10 Visual Effects for Beginners',
    channel: 'FX Lab',
    views: '2.4M views',
    time: '3 weeks ago',
    thumb: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
    avatar: 'https://ui-avatars.com/api/?name=FX+Lab&background=111827&color=fff',
    duration: '9:10',
  },
  {
    id: '4',
    title: 'Learn Framer Motion in 15 Minutes',
    channel: 'Motion Dev',
    views: '490K views',
    time: '5 days ago',
    thumb: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop',
    avatar: 'https://ui-avatars.com/api/?name=Motion+Dev&background=111827&color=fff',
    duration: '15:00',
  },
  {
    id: '5',
    title: 'Dark UI Design Principles',
    channel: 'Design Hub',
    views: '742K views',
    time: '2 weeks ago',
    thumb: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    avatar: 'https://ui-avatars.com/api/?name=Design+Hub&background=111827&color=fff',
    duration: '7:58',
  },
  {
    id: '6',
    title: 'Master Tailwind CSS in 2025',
    channel: 'Frontend Pro',
    views: '1.1M views',
    time: '1 month ago',
    thumb: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    avatar: 'https://ui-avatars.com/api/?name=Frontend+Pro&background=111827&color=fff',
    duration: '22:18',
  },
];

export default function VideoGrid() {
  return (
    <section className="pt-8">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold">Trending</h2>
        <button className="text-sm text-pink-300 hover:text-pink-200">View all</button>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {videos.map((v) => (
          <VideoCard key={v.id} {...v} />
        ))}
      </div>
    </section>
  );
}
