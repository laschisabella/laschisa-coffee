"use client";

import getCoffeeList from "@coffee/data";
import {
  CaretCircleLeft,
  CaretCircleRight,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const Trends = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:justify-between gap-5 p-8 text-center md-text-left">
      <div className="flex flex-col items-center lg:items-start">
        <h2 className="text-4xl font-merriweather text-themeSecondary">
          Be aware of the latest trends
        </h2>
        <p className="text-lg text-themeText font-thin py-2">
          Stay informed about new trends and our various offers.
        </p>
        <a
          href="#"
          className="text-themeTitle font-bold hover:text-themeSecondary transition"
        >
          Learn more <span>&gt;</span>
        </a>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="email@address.com"
          className="bg-themeBg px-6 py-3 placeholder:text-themeText"
        />
        <a
          href="#"
          className="bg-themeSecondary px-6 py-3 font-bold text-white"
        >
          Subscribe
        </a>
      </div>
    </section>
  );
};

const ProductsCarousel = () => {
  const coffeeList = getCoffeeList();
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (carouselRef.current) {
      setIsDragging(true);
      setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) {
      setIsDragging(false);
    }
  }, []);

  const scrollLeftButton = () => {
    if (carouselRef.current) {
      if (carouselRef.current.scrollLeft === 0) {
        carouselRef.current.scrollTo({
          left: carouselRef.current.scrollWidth,
          behavior: "smooth",
        });
      } else {
        carouselRef.current.scrollBy({ left: -450, behavior: "smooth" });
      }
    }
  };

  const scrollRightButton = () => {
    if (carouselRef.current) {
      if (
        carouselRef.current.scrollLeft + carouselRef.current.clientWidth >=
        carouselRef.current.scrollWidth
      ) {
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: 450, behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className="flex flex-col-reverse gap-5 p-8 items-center sm:items-start"
      id="products"
    >
      <div
        className="w-full flex whitespace-nowrap gap-4 overflow-hidden"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {coffeeList.map((coffee) => (
          <div
            key={coffee.id}
            className="w-48 flex flex-col justify-start items-center flex-shrink-0"
          >
            <div className="w-full h-48 flex justify-center items-center bg-coffeeBg rounded-t-md">
              <Image
                src={coffee.smallImage}
                alt="coffee item"
                width={100}
                height={100}
                className="h-full object-contain"
              />
            </div>
            <div className="p-5 bg-themeBg flex flex-col h-72 justify-between rounded-b-md w-full whitespace-normal">
              <div>
                <h2 className="pb-2 text-themeTitle font-bold">
                  {coffee.title}
                </h2>
                <p className="text-themeText w-full">{coffee.description}</p>
              </div>
              <Link
                href={`/products/${coffee.id}`}
                className="text-themeSecondary font-bold font-karla transition hover:text-black"
              >
                See more {">"}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full">
        <h1 className="text-4xl font-merriweather text-themeSecondary">
          Products
        </h1>
        <p className="text-lg text-themeText text-balance font-thin py-2">
          Discover our selection of exclusive coffees, carefully chosen to offer
          unique experiences with every sip. From bold flavors to subtle notes,
          we have something for every coffee lover. Come explore and find your
          favorite!
        </p>
        <div className="flex mt-4">
          <button onClick={scrollLeftButton} aria-label="Scroll left">
            <CaretCircleLeft
              size={50}
              weight="thin"
              className="text-themeTitle hover:text-themeSecondary transition"
            />
          </button>
          <button onClick={scrollRightButton} aria-label="Scroll right">
            <CaretCircleRight
              size={50}
              weight="thin"
              className="text-themeTitle hover:text-themeSecondary transition"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Products() {
  return (
    <div className="bg-white lg:py-8">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-10">
        <Trends />
        <ProductsCarousel />
      </div>
    </div>
  );
}
