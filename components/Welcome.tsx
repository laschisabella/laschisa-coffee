"use client";

import { useState, useRef, useEffect } from "react";
import {
  CaretCircleDown,
  ChatsCircle,
  List,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Logo: React.FC = () => (
  <div
    className="flex gap-2 relative bottom-1 sm:scale-100 scale-90"
    aria-label="Laschisa logo"
  >
    <Image src="/images/logo.png" alt="shop logo" width={35} height={35} />
    <span className="font-merriweather text-3xl font-bold text-themeBg lg:text-themeSecondary">
      laschisa
    </span>
  </div>
);

interface NavMenuProps {
  isOpen: boolean;
}

const NavMenu = React.forwardRef<HTMLDivElement, NavMenuProps>(
  ({ isOpen }, ref) => (
    <motion.nav
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`absolute top-8 left-1 z-20 lg:static lg:opacity-100 lg:translate-y-0 ${
        isOpen ? "block" : "hidden lg:block"
      }`}
    >
      <ul className="flex flex-col p-5 items-start bg-themeSecondary brightness-90 text-white rounded lg: font-bold lg:flex-row lg:gap-4 lg:bg-transparent lg:brightness-100 lg:text-themetext">
        <li className="transition hover:text-black border-b border-b-themetext py-2 w-full lg:border-none">
          <a href="#products" aria-label="Coffee section">
            Products
          </a>
        </li>
        <li className="transition hover:text-black border-b border-b-themetext py-2 w-full lg:border-none">
          <a href="#" aria-label="Brewing section">
            Brewing
          </a>
        </li>
        <li className="transition hover:text-black border-b border-b-themetext py-2 w-full lg:border-none">
          <a href="#" aria-label="Services section">
            Services
          </a>
        </li>
        <li className="transition hover:text-black py-2 w-full lg:border-none">
          <a href="#" aria-label="Inspiration section">
            Inspiration
          </a>
        </li>
      </ul>
    </motion.nav>
  )
);

NavMenu.displayName = "NavMenu";

const MainText: React.FC = () => (
  <header className="h-full flex flex-col justify-center items-start w-full">
    <span className="text-themeBg lg:text-themeTitle uppercase font-bold tracking-widest text-xs">
      coffee shop
    </span>
    <h1 className="brightness-150 lg:brightness-100 font-merriweather text-4xl md:text-5xl lg:text-7xl text-balance py-8 lg:py-16 lg:max-w-lg text-themeTitle">
      The Art of Coffee Crafting
    </h1>
    <p className="text-lg md:text-xl lg:text-2xl text-themeBg lg:text-themetext max-w-lg font-light opacity-80 text-balance">
      Discover exceptional blends that elevate your coffee experience.
    </p>
    <a href="#info">
      <CaretCircleDown
        weight="thin"
        size={60}
        className="brightness-150 lg:brightness-100 text-themeTitle my-10"
        aria-label="Scroll down to info"
      />
    </a>
  </header>
);

export default function Welcome() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setIsMobile(true);
      setIsOpen(false);
    } else {
      setIsMobile(false);
      setIsOpen(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-screen flex font-varta relative">
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10">
        <div className="flex flex-col h-full p-10 lg:mr-20">
          <div className="flex items-center justify-between gap-3 relative">
            <div className="lg:hidden">
              {isMobile && (
                <button
                  ref={buttonRef}
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
                >
                  <List size={32} className="text-themeBg" />
                </button>
              )}
            </div>
            <Logo />
            <NavMenu isOpen={isOpen} ref={menuRef} />{" "}
          </div>
          <MainText />
        </div>
      </div>
      <div className="w-full h-screen absolute l-0 lg:static lg:w-1/2 bg-black">
        <Image
          src="/images/home.jpg"
          alt="Coffee Mug"
          width={1000}
          height={1000}
          className="w-full h-full object-cover relative opacity-20 lg:opacity-100"
        />
        <ChatsCircle
          weight="fill"
          className="absolute bottom-7 right-6 lg:top-7 lg:right-10 text-5xl text-themeBg border-2 border-themeBg brightness-75 lg:brightness-100 rounded-full p-2"
          aria-label="Open chat"
        />
      </div>
    </div>
  );
}
