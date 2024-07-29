"use client";
import Image from "next/image";
import store from "/public/store.png";
import { useState } from "react";

const Shop = () => {
  const handleAddToCart = () => {
    const productName = "Merchant 1";
    const productPrice = "Rp.0";
    const message = `Apakah merchandise ini ready kak ? :\n\nProduk: ${productName}\nHarga: ${productPrice}`;

    const whatsappUrl = `https://wa.me/6285791635708?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "6285791635708"; // Ganti dengan nomor WhatsApp tujuan
    const formattedMessage = `Nama saya ${name}%0A%0APesan: ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <header className="bg-blue-dark pt-20">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-white sm:text-3xl">
                OFFICIAL MERCHANDISE KELFAST FC
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
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
              <div className="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                    NEW COLLECTION
                  </h2>

                  <p className="mt-4 text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quas rerum quam amet provident nulla error!
                  </p>
                </header>

                <a
                  href="#"
                  className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                >
                  Shop All
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <a href="#" className="group block">
                    <Image
                      src={store}
                      alt=""
                      className="aspect-square w-full rounded object-cover"
                    />

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Coming Soon
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">Rp.0</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="group block">
                    <Image
                      src={store}
                      alt=""
                      className="aspect-square w-full rounded object-cover"
                    />

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Coming Soon
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">Rp.0</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Product Collection
            </h2>

            <p className="mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a href="#" className="group relative block">
              <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white">
                Save 10%
              </span>

              <Image
                src={store}
                alt=""
                className="aspect-square w-full rounded object-cover"
              />

              <div className="relative border border-gray-100 bg-white p-6">
                <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                  {" "}
                  New{" "}
                </span>

                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  Coming Soon
                </h3>

                <p className="mt-1.5 text-sm text-gray-700">Rp.0</p>

                <form className="mt-4">
                  <button
                    className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </form>
              </div>
            </a>
            <a href="#" className="group relative block">
              <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white">
                Save 10%
              </span>

              <Image
                src={store}
                alt=""
                className="aspect-square w-full rounded object-cover"
              />

              <div className="relative border border-gray-100 bg-white p-6">
                <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                  {" "}
                  New{" "}
                </span>

                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  Coming Soon
                </h3>

                <p className="mt-1.5 text-sm text-gray-700">Rp.0</p>

                <form className="mt-4">
                  <button
                    className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </form>
              </div>
            </a>
            <a href="#" className="group relative block">
              <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white">
                Save 10%
              </span>

              <Image
                src={store}
                alt=""
                className="aspect-square w-full rounded object-cover"
              />

              <div className="relative border border-gray-100 bg-white p-6">
                <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                  {" "}
                  New{" "}
                </span>

                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  Coming Soon
                </h3>

                <p className="mt-1.5 text-sm text-gray-700">Rp.0</p>

                <form className="mt-4">
                  <button
                    className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </form>
              </div>
            </a>
            <a href="#" className="group relative block">
              <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white">
                Save 10%
              </span>

              <Image
                src={store}
                alt=""
                className="aspect-square w-full rounded object-cover"
              />

              <div className="relative border border-gray-100 bg-white p-6">
                <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                  {" "}
                  New{" "}
                </span>

                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  Coming soon
                </h3>

                <p className="mt-1.5 text-sm text-gray-700">Rp.0</p>

                <form className="mt-4">
                  <button
                    className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </form>
              </div>
            </a>
          </ul>
        </div>
      </section>
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow-xl">
        <h2 className="text-2xl text-center font-bold mb-4">Send message</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Nama
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Pesan atau pertanyaan
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            ></textarea>
          </div>
          <div className="flex justify-center w-full">
            <button
              type="submit"
              className="bg-green-500 text-white font-bold py-2 px-4 rounded"
            >
              Send via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Shop;
