import React from "react";
import Image from "next/image";
import sponsor1 from "/public/sponsor 1.png";
import sponsor2 from "/public/sponsor 2.png";
import sponsor3 from "/public/sponsor5.png";
import sponsor4 from "/public/sponsor6.png";
import sponsor5 from "/public/sponsor7.png";
import sponsor6 from "/public/sponsor8.png";
import sponsor7 from "/public/Sponsor9.png";
const Sponsor = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Official Partners
            </h2>

            <p className="mt-4 text-gray-500 sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dolores laborum labore provident impedit esse recusandae facere
              libero harum sequi.
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col rounded-lg bg-white px-4 py-8 text-center">
                <a
                  href="https://www.instagram.com/sampeyan.motor/"
                  className="group relative block"
                >
                  <Image
                    src={sponsor1}
                    alt={`BANNER`}
                    style={{ width: "100%", height: "auto" }}
                  />
                </a>
              </div>

              <div className="flex flex-col rounded-lg bg-white px-4 py-8 text-center">
                <a
                  href="https://www.instagram.com/sampeyan.sepeda/"
                  className="group relative block"
                >
                  <Image
                    src={sponsor7}
                    alt={`BANNER`}
                    style={{ width: "100%", height: "auto" }}
                  />
                </a>
              </div>

              <div className="flex flex-col rounded-lg bg-white px-4 py-8 text-center">
                <a
                  href="https://www.instagram.com/sampeyan.ban/"
                  className="group relative block"
                >
                  <Image
                    src={sponsor3}
                    alt={`BANNER`}
                    style={{ width: "100%", height: "auto" }}
                  />
                </a>
              </div>
              <div className="flex flex-col rounded-lg bg-white px-4 py-8 text-center">
                <Image
                  src={sponsor4}
                  alt={`BANNER`}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <div className="flex flex-col rounded-lg bg-white px-4 py-8 text-center">
                <Image
                  src={sponsor5}
                  alt={`BANNER`}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="flex flex-col rounded-lg bg-white px-4 py-8 text-center">
                <Image
                  src={sponsor6}
                  alt={`BANNER`}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <div className="flex flex-col rounded-lg bg-white px-4 py-8 items-center">
                <a
                  href="https://www.instagram.com/jetmaticshop/#"
                  className="group relative block"
                >
                  <Image
                    src={sponsor2}
                    alt={`BANNER`}
                    style={{ width: "100%", height: "auto" }}
                  />
                </a>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsor;
