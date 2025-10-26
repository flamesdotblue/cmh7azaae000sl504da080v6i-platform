import React from 'react';

export default function VideoCard({ title, channel, views, time, thumb, avatar, duration }) {
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-800 border border-white/10">
        <img
          src={thumb}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
        {duration && (
          <span className="absolute bottom-2 right-2 text-xs px-1.5 py-0.5 rounded bg-black/80">{duration}</span>
        )}
      </div>
      <div className="flex gap-3 mt-3">
        <img src={avatar} alt={channel} className="w-9 h-9 rounded-full border border-white/10" loading="lazy" />
        <div className="min-w-0">
          <h3 className="text-sm font-semibold leading-snug line-clamp-2">
            {title}
          </h3>
          <p className="text-xs text-white/60 mt-1">{channel}</p>
          <p className="text-xs text-white/50">{views} • {time}</p>
        </div>
      </div>
    </article>
  );
}
