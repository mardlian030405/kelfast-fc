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
                ACADEMY FUTSAL TEAM
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
        <main className="flex flex-col items-center justify-center w-full flex-1 text-center py-5 text-white">
          <h1 className="text-6xl max-sm:text-4xl font-bold">
            HISTORY KELFAST FC
          </h1>

          <div className="my-6 text-center max-sm:mx-4 text-white max-w-2xl">
            <p className="my-4 text-justify">
              Setiap diri yang percaya bahwa keberhasilan adalah titik pertemuan
              antara kesiapan dan kesempatan akan selalu berusaha keras
              mempersiapkan dan memanfaatkan kesempatan. Bermula dari
              fundamental statement itulah Kelfast FC didirikan. Membentuk
              kesiapan melalui proses persiapan yakni latihan dan pemantaban
              emotional bounding dan memanfaatkan setiap kesempatan dengan terus
              konsisten melakukan uji tanding dan berkiprah dalam kompetisi
            </p>
            <p className="my-4 text-justify">
              Berawal dari awal tahun 2022 berkumpul karyawan-karyawan Sampeyan
              Group yang menyukai olahraga futsal bermain fun futsal bersama.
              Akhir tahun 2022 manajemen Sampeyan Group menginisiasi pembentukan
              tim futsal yang berisikan anak-anak muda kelompok usia U-18 yang
              anggotanya dipilih melalui sistem rekomendasi. Seiring berjalannya
              waktu, ketertarikan anak muda di wilayah Nganjuk untuk bergabung
              dengan Kelfast FC bertambah banyak. Dengan demikian sistem seleksi
              diberlakukan untuk mencari personal anggota tim. Demi terbentuknya
              tim yang baik secara permainan dan kebersamaan. Hingga saat ini
              (2023) Kelfast memiliki tim aktif kelompok usia U23, U19, U16
              serta kegiatan fun futsal U40
            </p>
            <p className="my-4 text-justify">
              Sampeyan Group mendukung penuh kegiatan Kelfast FC dari mulai
              latihan rutin, uji tanding, dan keikutsertaan dalam berbagai
              kompetisi. Bertujuan membangun keluarga dan tim yang selalu siap
              dalam memanfaatkan kesempatan di setiap ajang yang diikuti,
              meningkatkan keaktifan dan partisipasi positif dari anak-anak muda
              di kota Nganjuk, Jawa Timur dalam berkegiatan olahraga futsal,
              menemukan dan mengasah bakat-bakat dari anak-anak muda yang belum
              tersalurkan.
            </p>
            <p className="my-4 text-justify">
              Besar harapan ke depannya banyak pihak yang memberi dukungan untuk
              Kelfast FC baik dari segi sponsorship, materi kepelatihan, dan
              penyaluran pemain-pemain ke tingkat kompetisi yang lebih tinggi.
              Meski jalannya tak mudah, penuh terjal, dan semangat yang sudah
              pasti naik turun, kami Kelfast FC selalu berpedoman bahwa hal yang
              baik akan menghasilkan sesuatu yang baik pula. Prestasi hadir
              karena adanya kesiapan dan pemanfaatan kesempatan. Setelah semua
              otot, otak, dan keringat kami korbankan, selanjutnya dengan
              sepenuh hati kami bergantung kepada Allah Yang Maha Esa atas
              apapun yang akan diberikan untuk Kelfast dan orang-orang di
              dalamnya.
            </p>
            <p className="mt-4 font-extrabold">Kelfast, Jaya! Jaya! Jaya!</p>
          </div>
        </main>
      </section>
      <section className="bg-blue-dark">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-extrabold text-white sm:text-3xl">
              TEAM KELFAST FC
            </h2>
          </header>

          <ul className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-3">
            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <Image
                alt=""
                src={juara}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h3 className="mt-0.5 text-xl font-bold text-white">
                      KELFAST U23
                    </h3>
                  </a>
                </div>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <Image
                alt=""
                src={juara}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h3 className="mt-0.5 text-xl font-bold text-white">
                      KELFAST U19
                    </h3>
                  </a>
                </div>
              </div>
            </article>
            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <Image
                alt=""
                src={juara}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h3 className="mt-0.5 text-xl font-bold text-white">
                      KELFAST U16
                    </h3>
                  </a>
                </div>
              </div>
            </article>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
