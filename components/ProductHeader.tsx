import { GlobeHemisphereWest } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function ProductHeader() {
  return (
    <header>
      <div className="bg-themeSecondary px-5 py-2">
        <div className="max-w-screen-xl mx-auto flex justify-between">
          <p className="text-themeBg">
            Welcome to Needus & Get the best product
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
      <div className="max-w-screen-xl mx-auto py-6">
        <Link href={"/"}>
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Laschisa logo"
              width={50}
              height={50}
            />
            <div className="flex flex-col">
              <span className="font-merriweather text-2xl font-bold text-themeSecondary relative top-0.5">
                laschisa
              </span>
              <span className="tracking-widest text-xs relative bottom-0.5 left-1 text-themetext">
                coffee shop
              </span>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
}
