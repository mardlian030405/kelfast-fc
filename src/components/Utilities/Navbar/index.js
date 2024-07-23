"use client";
import Image from "next/image";
import logo from "/public/logo.png";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-blue-dark fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex max-sm:absolute max-sm:left-1/2 transform max-sm:-translate-x-1/2 md:items-center md:gap-12">
            <a className="block text-white" href="/#">
              <span className="sr-only">Home</span>
              <Image src={logo} alt="Logo" width={100} height={100} />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-white transition hover:text-white"
                    href="/About"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-white"
                    href="/Shop"
                  >
                    {" "}
                    Store{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-white"
                    href="/Squad"
                  >
                    {" "}
                    Squad{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-white"
                    href="/Posts"
                  >
                    {" "}
                    Blog{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                href="/Shop"
                className="container inline-flex items-center justify-center gap-1.5 rounded-lg bg-white hover:bg-blue-dark px-3 py-2 text-blue-dark transition hover:text-white focus:outline-none focus:ring"
                type="button"
                style={{ fontSize: "0.875rem" }} // Penyesuaian ukuran font
              >
                <span className="text-sm font-medium hidden sm:flex">
                  {" "}
                  View Merchandise{" "}
                </span>

                <svg
                  className="h-4 w-4 text-blue-dark hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="block md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <nav aria-label="Global">
              <ul className="mt-4 space-y-4 text-sm">
                <li>
                  <a
                    className="block text-white transition hover:text-white"
                    href="/About"
                  >
                    {" "}
                    ABOUT{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="block text-white transition hover:text-white shadow"
                    href="/Squad"
                  >
                    {" "}
                    TIM{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="block text-white transition hover:text-white shadow"
                    href="/Shop"
                  >
                    {" "}
                    STORE{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="block text-white transition hover:text-white"
                    href="/Posts"
                  >
                    {" "}
                    BLOG{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
