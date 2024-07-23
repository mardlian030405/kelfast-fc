// components/VideoCard.js
import React from "react";

const VideoCard = ({ videoUrl, imageUrl, title, description }) => {
  return (
    <article className="group max-w-xs rounded overflow-hidden shadow-lg bg-white m-4">
      <div className="relative h-60">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        ></iframe>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
    </article>
  );
};

export default VideoCard;
