import { useState } from 'react';
import { Play } from 'lucide-react';
import { youtubeId } from '../../data/wwtp';

// Shows the YouTube thumbnail and loads the player only on click,
// so pages stay fast and no YouTube cookies are set until then.
export default function ProjectVideo({ url, title }) {
  const [playing, setPlaying] = useState(false);
  const id = youtubeId(url);
  if (!id) return null;

  return (
    <div className="relative mt-6 aspect-video overflow-hidden rounded-2xl bg-ink-900">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={`${title}: project video`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Play project video: ${title}`}
        >
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-xl transition-transform group-hover:scale-110">
              <Play className="ml-1 h-7 w-7 fill-current" />
            </span>
          </span>
          <span className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white">
            Watch the plant in action
          </span>
        </button>
      )}
    </div>
  );
}
