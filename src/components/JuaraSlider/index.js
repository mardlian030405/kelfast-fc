"use client";
import Image from "next/image";
import juara from "/public/juara.png";
import juara2 from "/public/juara2.jpg";
import juara3 from "/public/juara3.jpg";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/app/globals.css";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="bg-blue-dark">
      <div className="container pt-7 max-sm:pt-10 max-w-max mt-5">
        <Slider {...settings}>
          <div>
            <Image
              className="rounded img block w-full max-sm:h-auto"
              src={juara}
              alt={`BANNER`}
            />
          </div>
          <div>
            <Image
              className="rounded img block w-full max-sm:h-auto"
              src={juara2}
              alt={`BANNER`}
            />
          </div>
          <div>
            <Image
              className="rounded img block w-full max-sm:h-auto"
              src={juara3}
              alt={`BANNER`}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SimpleSlider;
