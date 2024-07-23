import React from "react";
import Image from "next/image";
import logo from "/public/logo.png";
import juara from "/public/juara.png";

const About = () => {
  return (
    <div>
      <section className="bg-blue-dark">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 max-sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative max-md:hidden h-auto overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src={logo}
                alt={`logo`}
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <div className="lg:py-24 max-sm:pt-10 max-sm:text-center">
              <h1 className="text-2xl font-extrabold sm:text-4xl text-white">
                PROFESSIONAL FUTSAL TEAM
              </h1>
              <h2 className="font-extrabold max-sm:text-center text-3xl sm:text-4xl text-yellow-400 sm:block">
                KELFAST FC
              </h2>

              <p className="mt-4 sm:text-2xl max-sm:text-center text-lg text-white">
                OFFICIAL PARTNERS SAMPEYAN GROUP
              </p>

              <a
                href="/About"
                className="mt-8 inline-block rounded bg-white px-12 py-3 text-sm font-medium text-green-800 transition hover:bg-blue-dark hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
              >
                OUR TEAM
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-light">
        <h2 className="text-3xl font-bold pt-12 text-center text-white sm:text-4xl">
          History KELFAST FC
        </h2>
        <div className="flex mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="background relative bg-blue-light h-64 overflow-hidden sm:h-80 lg:h-full">
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src={logo}
                alt={`logo`}
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <div className="flex items-center lg:py-16">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>
              <div className="space-y-4">
                <details
                  className="group border-s-4 border-green-700 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                  open
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                    <h2 className="text-lg font-medium text-gray-900">
                      Lorem ipsum dolor sit amet consectetur adipisicing?
                    </h2>

                    <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p className="mt-4 leading-relaxed text-gray-700">
                    Setiap diri yang percaya bahwa keberhasilan adalah titik
                    pertemuan antara kesiapan dan kesempatan akan selalu
                    berusaha keras mempersiapkan dan memanfaatkan kesempatan.
                    Bermula dari fundamental statement itulah Kelfast FC
                    didirikan. Membentuk kesiapan melalui proses persiapan yakni
                    latihan dan pemantaban emotional bounding dan memanfaatkan
                    setiap kesempatan dengan terus konsisten melakukan uji
                    tanding dan berkiprah dalam kompetisi
                  </p>
                </details>

                <details className="group border-s-4 border-blue-dark bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                    <h2 className="text-lg font-medium text-gray-900">
                      Lorem ipsum dolor sit amet consectetur adipisicing?
                    </h2>

                    <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p className="mt-4 leading-relaxed text-gray-700">
                    Berawal dari awal tahun 2022 berkumpul karyawan-karyawan
                    Sampeyan Group yang menyukai olahraga futsal bermain fun
                    futsal bersama. Akhir tahun 2022 manajemen Sampeyan Group
                    menginisiasi pembentukan tim futsal yang berisikan anak-anak
                    muda kelompok usia U-18 yang anggotanya dipilih melalui
                    sistem rekomendasi. Seiring berjalannya waktu, ketertarikan
                    anak muda di wilayah Nganjuk untuk bergabung dengan Kelfast
                    FC bertambah banyak. Dengan demikian sistem seleksi
                    diberlakukan untuk mencari personal anggota tim. Demi
                    terbentuknya tim yang baik secara permainan dan kebersamaan.
                    Hingga saat ini 2023 Kelfast memiliki tim aktif kelompok
                    usia U23, U19, U16 serta kegiatan fun futsal U40.
                  </p>
                  <p className="mt-4 leading-relaxed text-gray-700">
                    Sampeyan Group mendukung penuh kegiatan Kelfast FC dari
                    mulai latihan rutin, uji tanding, dan keikutsertaan dalam
                    berbagai kompetisi. Bertujuan membangun keluarga dan tim
                    yang selalu siap dalam memanfaatkan kesempatan di setiap
                    ajang yang diikuti, meningkatkan keaktifan dan partisipasi
                    positif dari anak-anak muda di kota Nganjuk, Jawa Timur
                    dalam berkegiatan olahraga futsal, menemukan dan mengasah
                    bakat-bakat dari anak-anak muda yang belum tersalurkan.
                  </p>
                </details>

                <details className="group border-s-4 border-blue-dark bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                    <h2 className="text-lg font-medium text-gray-900">
                      Lorem ipsum dolor sit amet consectetur adipisicing?
                    </h2>

                    <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p className="mt-4 leading-relaxed text-gray-700">
                    Besar harapan ke depannya banyak pihak yang memberi dukungan
                    untuk Kelfast FC baik dari segi sponsorship, materi
                    kepelatihan, dan penyaluran pemain-pemain ke tingkat
                    kompetisi yang lebih tinggi. Meski jalannya tak mudah, penuh
                    terjal, dan semangat yang sudah pasti naik turun, kami
                    Kelfast FC selalu berpedoman bahwa hal yang baik akan
                    menghasilkan sesuatu yang baik pula. Prestasi hadir karena
                    adanya kesiapan dan pemanfaatan kesempatan. Setelah semua
                    otot, otak, dan keringat kami korbankan, selanjutnya dengan
                    sepenuh hati kami bergantung kepada Allah Yang Maha Esa atas
                    apapun yang akan diberikan untuk Kelfast dan orang-orang di
                    dalamnya. Kelfast, Jaya! Jaya! Jaya!
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-dark">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-extrabold text-white sm:text-3xl">
              KELFAST FC
            </h2>

            <p className="mx-auto mt-4 max-w-md font-bold text-white">
              KELFAST FC, KELFAST U23, dan KELFAST U17
            </p>
          </header>

          <ul className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-3">
            <article className="group">
              <Image
                alt=""
                src={juara}
                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
              />

              <div className="bg-white rounded-md mt-4 p-4">
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-900">
                    Finding the Journey to Mordor
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </article>
            <article className="group">
              <Image
                alt=""
                src={juara}
                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
              />

              <div className="bg-white rounded-md mt-4 p-4">
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-900">
                    Finding the Journey to Mordor
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </article>
            <article className="group">
              <Image
                alt=""
                src={juara}
                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
              />

              <div className="bg-white rounded-md mt-4 p-4">
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-900">
                    Finding the Journey to Mordor
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </article>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
