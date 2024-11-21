import { use } from "react";
import getCoffeeList, { CoffeeI } from "@coffee/data";
import ProductHeader from "@coffee/components/ProductHeader";
import Image from "next/image";
import {
  Clock,
  MapPin,
  Fire,
  Star,
  CheckCircle,
  XCircle,
  Cube,
  Coffee,
  Prohibit,
} from "@phosphor-icons/react/dist/ssr";
import CoffeeOptions from "@coffee/components/CoffeeOptions";

const fetchCoffeeData = async (id: string): Promise<CoffeeI | null> => {
  const coffeeList: CoffeeI[] = getCoffeeList();
  return coffeeList.find((c) => c.id.toString() === id) || null;
};

const CoffeeDetail = ({
  label,
  value,
  Icon,
  iconClassName,
}: {
  label: string;
  value: string | number;
  Icon: React.ElementType;
  iconClassName?: string;
}) => (
  <div className="w-24 h-24 p-2 text-sm rounded-3xl border border-themeBorder flex flex-col justify-between text-center text-themeText shadow-md">
    <strong>{label}</strong>
    <Icon className={`mx-auto text-3xl ${iconClassName}`} weight="fill" />
    <span>{value}</span>
  </div>
);

export default function ProductPage({ params }: { params: { id: string } }) {
  const coffee = use(fetchCoffeeData(params.id));

  if (!coffee) {
    return (
      <div>
        <ProductHeader />
        <div className="bg-white text-center py-20 flex flex-col items-center">
          <p>Product not found.</p>
          <Prohibit size={50} className="text-themeText" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <ProductHeader />
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto py-14 flex flex-col lg:flex-row lg:gap-20 justify-center items-start">
          <div className="w-full lg:w-2/5 h-[32rem] relative scale-90 hover:scale-100 transition-transform duration-300 cursor-zoom-in">
            <Image
              src={coffee.bigImage}
              alt={`${coffee.title} image.`}
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-ee-[60px] rounded-ss-[120px] shadow-lg opacity-90"
            />
            <div className="absolute top-6 left-5 border-8 border-white w-[92%] h-[92%] rounded-ee-[60px] rounded-ss-[120px]" />
          </div>
          <div className="max-w-md flex flex-col items-center gap-2 px-5">
            <div className="flex flex-row-reverse items-center gap-5 justify-between">
              <span className="rounded-full bg-themeSecondary shadow-md text-white font-bold py-1 px-3 my-2 inline-block">
                {coffee.category}
              </span>
              <h1 className="text-6xl font-merriweather my-3 text-themeTitle italic">
                {coffee.title}
              </h1>
            </div>
            <p className="text-xl font-light text-themeText">
              {coffee.description}
            </p>
            <div className="flex flex-wrap gap-4 my-5 max-w-sm mx-auto">
              <CoffeeDetail
                label="Preparation"
                value={coffee.preparationTime}
                Icon={Clock}
                iconClassName={"text-themeTitle"}
              />
              <CoffeeDetail
                label="Origin"
                value={coffee.origin}
                Icon={MapPin}
              />
              <CoffeeDetail
                label="Served"
                value={coffee.servingTemperature}
                Icon={coffee.servingTemperature == "Hot" ? Fire : Cube}
                iconClassName={
                  coffee.servingTemperature == "Hot"
                    ? "text-orange-700"
                    : "text-blue-200"
                }
              />
              <CoffeeDetail
                label="Size"
                value={coffee.size}
                Icon={Coffee}
                iconClassName={"text-themeSecondary"}
              />
              <CoffeeDetail
                label="Rating"
                value={coffee.rating}
                Icon={Star}
                iconClassName={"text-yellow-600"}
              />
              <CoffeeDetail
                label="Available"
                value={coffee.available ? "Yes" : "No"}
                Icon={coffee.available ? CheckCircle : XCircle}
                iconClassName={
                  coffee.available ? "text-green-700" : "text-red-500"
                }
              />
            </div>

            <CoffeeOptions coffee={coffee} />

            <div className="text-5xl text-themeTitle my-5 text-center">
              <span>$</span>
              <span>{coffee.price}</span>
            </div>

            <div className="flex gap-3 uppercase">
              <div className="text-themeText border border-themeText px-5 py-2 font-bold cursor-pointer transition hover:brightness-125 select-none">
                Add to favorites
              </div>
              <div className="text-white bg-themeText border border-themeText px-5 py-2 font-bold cursor-pointer transition hover:brightness-125 select-none">
                Add to cart
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
