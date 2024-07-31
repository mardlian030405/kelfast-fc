"use client";
import { useState } from "react";
import Image from "next/image";
import VideoCard from "../../components/VideoCard";

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
  <div className="fixed top-0 mx-10 inset-0 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg text-center ">
      <h2 className="text-xl ml-4 font-bold text-start mb-4">{title}</h2>
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-10/12 md:h-96 w-96 h-64 mb-4">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg relative inset-0"
          />
        </div>
        <p className="mb-4 mx-4 max-sm:text-sm text-justify">{content}</p>
      </div>

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
      title: "Coaching clinic kelfast fc",
      content:
        "Coaching clinic oleh dean gustian kelfast fc untuk meningkatkan kualitas permainan saat mengarungi tournament futsal yang akan datang serta mendapatkan motivasi oleh coach dean",
      imageUrl: "/blog1.jpg",
    },
    {
      id: 2,
      title: "Seleksi Kelfast U-13",
      content:
        "DICARI 15 Anak Laki-Laki Kelahiran Tahun 2010/2011/2012 Sehat Fisik, Hobi/Bakat Main Bola, Ada Pengalaman Ikut Kompetis Lebih Baik, Menguasai Dasar Permainan Bola Domisili Nganjuk (tidak kejauhan jika latihan di Nganjuk Kota) Komitmen & Rajin Latihan Futsal bersama Kelfast Futsal Club Diberi Izin dan Dukungan oleh Kedua Orang Tua Beberapa Fasilitas Untuk Yang Terpilih / Lolos Seleksi,Biaya Latihan Gratis 2x dalam 1 Minggu,Jersey / Seragam Tim Gratis (Bagi yg kurang mampu diberikan sepatu futsal gratis*), dan Biaya Sparring / Ikut Serta Kompetisi (dalam/Luar kota) Gratis",
      imageUrl:
        "https://instagram.fsub8-1.fna.fbcdn.net/v/t51.29350-15/410309492_3500007626905139_1186460993421857155_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDI0eDE4MjAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=BjHaOtdbWGUQ7kNvgEw4k7j&gid=88ebef6cec6b4108bc607b3db2b2abc0&edm=AGFyKLkBAAAA&ccb=7-5&ig_cache_key=MzI1ODAwNDQ3MzExNjU5MDkzOA%3D%3D.2-ccb7-5&oh=00_AYAWFM4cTWRLu-SQitNKoR5MEo5QdG4xVq5ErYVVAHCgIA&oe=66AE0D19&_nc_sid=5a0a6d",
    },
    {
      id: 3,
      title: "Kelfast U16 meraih juara 3 di Rosalia CUP",
      content:
        "Tidak ada yang lebih membanggakan daripada melihat kerja keras dan dedikasi kami akhirnya membuahkan hasil! Kelfast FC berhasil menjuarai Rosalia Futsal Cup, sebuah prestasi yang kami raih berkat semangat, kerjasama, dan determinasi yang tak tergoyahkan. Setiap tetes keringat, setiap strategi yang dirancang dengan cermat, dan setiap dukungan dari para penggemar telah membawa kami ke momen luar biasa ini. Terima kasih yang sebesar-besarnya kepada pelatih, manajemen, para pemain, dan tentu saja para suporter yang selalu setia mendukung kami. Kemenangan ini adalah untuk kalian semua! Mari kita terus berjuang dan menorehkan lebih banyak prestasi di masa depan. #KelfastFC #RosaliaFutsalCup #Champions #TeamWork #Victory",
      imageUrl:
        "https://instagram.fsub8-1.fna.fbcdn.net/v/t51.29350-15/432492162_924844449354546_3029459472931812545_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDI1NjAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=DOULokZAAXEQ7kNvgHtAmLd&gid=88ebef6cec6b4108bc607b3db2b2abc0&edm=AGFyKLkBAAAA&ccb=7-5&ig_cache_key=MzMyMTg0ODUwMjQwODkxNDQ5MQ%3D%3D.2-ccb7-5&oh=00_AYAxdUTJHnenjLe_ziE5YYqWTKceYKCX3zyuzTHtGtOG4Q&oe=66AE05D4&_nc_sid=5a0a6d",
    },
    {
      id: 4,
      title: "Post 2",
      content:
        "oke diri yang percaya bahwa keberhasilan adalah titik pertemuan antara kesiapan dan kesempatan akan selalu berusaha keras Setiap diri yang percaya bahwa keberhasilan adalah titik pertemuan antara kesiapan dan kesempatan akan selalu berusaha keras anjayyyyyy",
      imageUrl:
        "https://instagram.fsub8-1.fna.fbcdn.net/v/t51.29350-15/432540512_1995621987506722_7805268495414454534_n.jpg?stp=dst-jpg_e35_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDI1NjAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=LBJjYzV1UkAQ7kNvgF7nnTP&gid=88ebef6cec6b4108bc607b3db2b2abc0&edm=AGFyKLkBAAAA&ccb=7-5&ig_cache_key=MzMyMTg2NzM3OTgyMTgyMzQ5OQ%3D%3D.2-ccb7-5&oh=00_AYATfj9cFxSRp_A4Vdzq3S49iqaSAoZgKf-LwbKfq5bDCA&oe=66AE174B&_nc_sid=5a0a6d",
    },
    {
      id: 5,
      title: "Post 3",
      content:
        "Siap diri yang percaya bahwa keberhasilan adalah titik pertemuan antara kesiapan dan kesempatan akan selalu berusaha keras Setiap diri yang percaya bahwa keberhasilan adalah titik pertemuan antara kesiapan dan kesempatan akan selalu berusaha keras anjayyyyyy",
      imageUrl:
        "https://instagram.fsub8-1.fna.fbcdn.net/v/t51.29350-15/432438225_908306984355984_1298487451995429155_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDI1NjAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=YqWUg8bKMaQQ7kNvgFDZ7Qy&edm=ADDLYBMBAAAA&ccb=7-5&ig_cache_key=MzMyMTk1MjYyOTQ0NDg2Mzg0Ng%3D%3D.2-ccb7-5&oh=00_AYBmCZ4erAKzcbdPC2nn6O2XFZx-WfTdKZHZyjpNGVGqrA&oe=66AE301D&_nc_sid=56bdfd",
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

  const videos = [
    {
      videoUrl: "https://www.instagram.com/reel/C59wqZYPATc/embed",
      title: "Cuplikan Kelfast di Respati CUP",
    },
    {
      videoUrl: "https://www.instagram.com/reel/C1ZShrsvUpG/embed",
      title: "Cuplikan Seleksi pemain Kelfast U13",
    },
    {
      videoUrl: "https://www.instagram.com/reel/C6fLXdIP9e4/embed",
      title: "Cuplikan Kelfast on training routine",
    },
    {
      videoUrl: "https://www.instagram.com/reel/C59wqZYPATc/embed",
      title: "Cuplikan Kelfast di Respati CUP",
    },
    {
      videoUrl: "https://www.instagram.com/reel/C1ZShrsvUpG/embed",
      title: "Cuplikan Seleksi pemain Kelfast U13",
    },
    {
      videoUrl: "https://www.instagram.com/reel/C6fLXdIP9e4/embed",
      title: "Cuplikan Kelfast on training routine",
    },
  ];

  return (
    <div>
      <header className="pt-14">
        <div className="relative bg-cover bg-center h-[400px] max-sm:h-[150px] bg-[url('/juara2.jpg')] text-white">
          <div className="absolute inset-0 bg-opacity-50 bg-blue-dark"></div>
          <div className="relative container mx-auto flex flex-col items-center justify-center h-full">
            <div className="text-center">
              <h1 className="max-sm:text-2xl text-5xl font-bold">NEWS</h1>
              <a href="/#" className="max-sm:text-sm mt-4 text-lg">
                HOME / NEWS
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="p-4 bg-blue-light">
        <h1 className="text-4xl max-sm:text-3xl font-extrabold text-center pt-5 text-white mb-8">
          POST & GALLERY KELFAST FC
        </h1>

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

      <div className="bg-blue-dark min-h-auto p-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white mb-8">VIDEO</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center">
          {videos.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>
      </div>
    </div>
  );
}
