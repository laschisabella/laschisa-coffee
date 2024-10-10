import {
  GlobeHemisphereWest,
  Headset,
  HeartStraight,
  MagnifyingGlass,
  ShoppingCart,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function ProductHeader() {
  return (
    <header>
      <div className="bg-themeSecondary">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between py-2 px-4 sm:text-base text-sm flex-col-reverse sm:flex-row">
          <p className="text-themeBg hidden sm:block">
            Welcome to Laschisa Coffee Shop & Discover the finest coffee for
            your taste!
          </p>
          <div className="flex text-themeBg">
            <GlobeHemisphereWest
              className="text-lg relative top-px right-1"
              weight="fill"
            />
            <span className="font-bold">LANG</span>
            <select className="bg-transparent border-none outline-none relative left-2 bottom-px cursor-pointer">
              <option className="bg-themeSecondary">EN</option>
              <option className="bg-themeSecondary">ES</option>
              <option className="bg-themeSecondary">PT</option>
            </select>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
        <Link href={"/"} className="min-w-max">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Laschisa logo"
              width={50}
              height={50}
              className="w-8 sm:w-full"
            />
            <div className="flex-col sm:flex hidden">
              <span className="font-merriweather text-2xl font-bold text-themeSecondary relative top-0.5">
                laschisa
              </span>
              <span className="tracking-widest text-xs relative bottom-0.5 left-1 text-themeText">
                coffee shop
              </span>
            </div>
          </div>
        </Link>

        <div className="flex items-stretch w-full mx-5 max-w-2xl">
          <input
            type="text"
            placeholder="Search"
            className="p-1 sm:py-3 sm:px-6 w-full"
          />
          <button className=" bg-themeText px-3 hover:brightness-90 transition">
            <MagnifyingGlass className="text-lg sm:text-3xl text-themeBg" />
          </button>
        </div>

        <div className=" text-xl sm:text-3xl flex gap-3 text-themeText">
          <HeartStraight className="hover:brightness-50 transition cursor-pointer" />
          <div className="relative">
            <ShoppingCart className="hover:brightness-50 transition cursor-pointer" />
            <div className="rounded-full bg-themeTitle text-white text-xs flex justify-center items-center h-5 w-5 absolute -top-3 sm:-top-1 sm:-right-1 -right-2">
              <span className="relative top-px right-px">3</span>
            </div>
          </div>
          <Headset className="hover:brightness-50 transition cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
