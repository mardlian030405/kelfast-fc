"use client";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";

const Card = ({ title, content, imageUrl, onClick }) => (
  <article
    className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
    onClick={onClick}
  >
    <Image
      alt=""
      src={imageUrl}
      layout="fill"
      objectFit="cover"
      className="absolute inset-0 h-full w-full object-cover"
    />

    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
      <div className="p-4 sm:p-6">
        <h3 className="mt-0.5 text-lg text-white">{title}</h3>

        <p className="mt-2 line-clamp-3 text-justify text-sm/relaxed text-white/95">
          {content}
        </p>
      </div>
    </div>
  </article>
);

const PopUp = ({ title, content, imageUrl, onClose }) => (
  <div className="fixed top-0 mx-10 left-0 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="relative w-96 h-64 mb-4">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg relative inset-0"
        />
      </div>
      <h2 className="text-xl text-start mb-4">{title}</h2>
      <p className="mb-4 text-justify">{content}</p>
      <button
        className="bg-blue-500 max-sm:text-sm text-white px-4 py-2 rounded"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </div>
);

export default function About() {
  const [popUpContent, setPopUpContent] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Post 1",
      content:
        "Setiap diri yang percaya bahwa keberhasilan adalah titik pertemuan antara kesiapan dan kesempatan akan selalu berusaha keras Setiap diri yang percaya bahwa keberhasilan adalah titik pertemuan antara kesiapan dan kesempatan akan selalu berusaha keras anjayyyyyy Hari ini Kelfast FC U-16 turut serta dalam kompetisi futsal se-Karesidenan Kediri.Rosalia Futsal Championship U-23.Bertanding dan Belajar!.Mohon do'a dan dukungan Kelfans! semua ya Kelfast Jaya! Jaya! Jaya! oke diri yang percaya bahwa keberhasilan adalah titik pertemuan antara kesiapan dan kesempatan akan selalu berusaha keras Setiap diri yang percaya bahwa keberhasilan adalah titik pertemuan antara kesiapan dan kesempatan akan selalu berusaha keras anjayyyyyy",
      imageUrl: "/blog1.jpg",
    },
    {
      id: 2,
      title: "Post 2",
      content:
        "oke diri yang percaya bahwa keberhasilan adalah titik pertemuan antara kesiapan dan kesempatan akan selalu berusaha keras Setiap diri yang percaya bahwa keberhasilan adalah titik pertemuan antara kesiapan dan kesempatan akan selalu berusaha keras anjayyyyyy",
      imageUrl: "/juara2.jpg",
    },
    {
      id: 3,
      title: "Post 3",
      content:
        "Siap diri yang percaya bahwa keberhasilan adalah titik pertemuan antara kesiapan dan kesempatan akan selalu berusaha keras Setiap diri yang percaya bahwa keberhasilan adalah titik pertemuan antara kesiapan dan kesempatan akan selalu berusaha keras anjayyyyyy",
      imageUrl: "/juara3.jpg",
    },
    {
      id: 4,
      title: "Post 2",
      content:
        "oke diri yang percaya bahwa keberhasilan adalah titik pertemuan antara kesiapan dan kesempatan akan selalu berusaha keras Setiap diri yang percaya bahwa keberhasilan adalah titik pertemuan antara kesiapan dan kesempatan akan selalu berusaha keras anjayyyyyy",
      imageUrl: "/juara2.jpg",
    },
    {
      id: 5,
      title: "Post 3",
      content:
        "Siap diri yang percaya bahwa keberhasilan adalah titik pertemuan antara kesiapan dan kesempatan akan selalu berusaha keras Setiap diri yang percaya bahwa keberhasilan adalah titik pertemuan antara kesiapan dan kesempatan akan selalu berusaha keras anjayyyyyy",
      imageUrl: "/juara3.jpg",
    },
    {
      id: 6,
      title: "Post 2",
      content:
        "oke diri yang percaya bahwa keberhasilan adalah titik pertemuan antara kesiapan dan kesempatan akan selalu berusaha keras Setiap diri yang percaya bahwa keberhasilan adalah titik pertemuan antara kesiapan dan kesempatan akan selalu berusaha keras anjayyyyyy",
      imageUrl: "/juara2.jpg",
    },
    {
      id: 7,
      title: "Post 3",
      content:
        "Siap diri yang percaya bahwa keberhasilan adalah titik pertemuan antara kesiapan dan kesempatan akan selalu berusaha keras Setiap diri yang percaya bahwa keberhasilan adalah titik pertemuan antara kesiapan dan kesempatan akan selalu berusaha keras anjayyyyyy",
      imageUrl: "/juara3.jpg",
    },
  ];

  const handleCardClick = (card) => {
    setPopUpContent(card);
  };

  const handleClosePopUp = () => {
    setPopUpContent(null);
  };

  return (
    <div>
      <header className="bg-blue-dark pt-20">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-white sm:text-3xl">
                Blog KELFAST FC
              </h1>

              <p className="mt-1.5 text-sm text-white">
                Monggo silakan di pesan official merchandise kelfast
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <button
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
                type="button"
              >
                <span className="text-sm font-medium"> View Website </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>

              <button
                className="block rounded-lg bg-white px-5 py-3 text-sm font-medium border-yellow-500 text-blue-dark transition hover:bg-blue-dark  hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                type="button"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              content={card.content}
              imageUrl={card.imageUrl}
              onClick={() => handleCardClick(card)}
            />
          ))}
        </div>
      </div>

      {popUpContent && (
        <PopUp
          title={popUpContent.title}
          content={popUpContent.content}
          imageUrl={popUpContent.imageUrl}
          onClose={handleClosePopUp}
        />
      )}
    </div>
  );
}
