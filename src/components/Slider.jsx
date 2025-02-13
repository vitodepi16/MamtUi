import { useState, useRef } from "react";

const TikTokVideoViewer = () => {
  const videos = [
    "https://cdn.shopify.com/videos/c/o/v/49f49e5ff92f404b89bdedd6fc371077.mp4",
    "https://cdn.shopify.com/videos/c/o/v/55345c02e44446ff827c47f366aacd6e.mp4",
    "https://cdn.shopify.com/videos/c/o/v/171162a47d1b44f1a042656ad7f85d02.mp4",
    "https://cdn.shopify.com/videos/c/o/v/d8d1ca1c53114802a2d840e57fcd7e75.mp4",
    "https://cdn.shopify.com/videos/c/o/v/354c7787f58b457a90f0f0f8751470d4.mp4",
    "https://cdn.shopify.com/videos/c/o/v/38d2b924b27e425d939ddba898550c3c.mp4",
    "https://cdn.shopify.com/videos/c/o/v/f9070d05630d4a73aa7c4c6133e21748.mp4",
    "https://cdn.shopify.com/videos/c/o/v/7b2f0f5c16c147769a931b8352840c80.mp4",
  ];

  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) video.pause();
    });
    setPlayingIndex(index);
  };

  const handlePause = () => setPlayingIndex(null);

  return (
    <div className="overflow-x-scroll flex items-center scroll-snap-x-mandatory max-w-5xl mx-auto px-2">
      <div className="flex gap-2">
        {videos.map((src, index) => (
          <div
            key={index}
            className="flex-none w-3/5 max-w-[360px] snap-center relative md:w-1/2 md:max-w-[260px]"
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="w-full h-auto aspect-[9/16] rounded"
              onPlay={() => handlePlay(index)}
              onPause={handlePause}
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div
              className={`absolute inset-0 flex justify-center items-center text-white text-2xl bg-black/60 rounded-full cursor-pointer w-12 h-12 mx-auto ${
                playingIndex === index ? "hidden" : "flex"
              }`}
              onClick={() => videoRefs.current[index]?.play()}
            >
              ▶
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TikTokVideoViewer;
