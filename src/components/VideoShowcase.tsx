import { Play } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  caption: string;
  watchUrl: string;
}

const videos: readonly VideoItem[] = [
  {
    id: "5xM9Y8-XhGU",
    title: "How we work with you to achieve your goals and projects",
    description:
      "Watch this brief walkthrough and see how we turn your goals into a clear, structured plan you can actually execute.",
    caption: "A quick look at how working with Exepath feels.",
    watchUrl: "https://youtube.com/shorts/5xM9Y8-XhGU",
  },
  {
    id: "vjvRiz4Hb00",
    title: "How Exepath supports business growth and teams",
    description:
      "See how our systems and accountability help businesses and teams stay consistent, aligned, and moving forward.",
    caption: "A quick look at how Exepath supports growth.",
    watchUrl: "https://youtube.com/shorts/vjvRiz4Hb00",
  },
];

const VideoShowcase = () => {
  return (
    <section id="videos" className="bg-[#F9F9F9] px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <span className="mb-6 inline-block rounded-full border border-[#FFD600]/40 bg-[#FFD600]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7A6500]">
            See It In Action
          </span>
          <h2 className="text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
            Watch how Exepath works
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {videos.map((video) => (
            <article
              key={video.id}
              className="flex flex-col items-center rounded-3xl border border-[#FFD600]/40 bg-gradient-to-b from-[#FFFBE0] to-white p-6 text-center shadow-sm sm:p-8"
            >
              <h3 className="mb-3 text-2xl font-black leading-tight text-gray-900">
                {video.title}
              </h3>
              <p className="mb-6 max-w-md text-base leading-relaxed text-gray-700">
                {video.description}
              </p>

              <div className="w-full max-w-[300px] rounded-[1.75rem] border-4 border-[#FFD600] bg-black p-1 shadow-xl">
                <div className="aspect-[9/16] w-full overflow-hidden rounded-3xl">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="h-full w-full"
                  />
                </div>
              </div>

              <p className="mt-6 text-sm text-gray-700">{video.caption}</p>

              <a
                href={video.watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#7A6500] transition-colors hover:text-black"
              >
                <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                Video not showing? Watch it on YouTube
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
