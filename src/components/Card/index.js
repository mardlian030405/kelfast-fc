// src/components/Card.js
import Image from "next/image";

export default function Card({ title, content, imageUrl }) {
  return (
    <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
        <div className="p-4 sm:p-6">
          <h2 className="mt-0.5 text-lg text-white">{title}</h2>
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
            {content}
          </p>
        </div>
      </div>
    </article>
  );
}
