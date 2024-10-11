import { use } from "react"; // Certifique-se de que isso é suportado na versão do React que você está usando
import getCoffeeList, { CoffeeI } from "@coffee/data";
import ProductHeader from "@coffee/components/ProductHeader";
import Image from "next/image";
import {
  Clock,
  MapPin,
  Fire,
  Tag,
  Star,
  CheckCircle,
  XCircle,
  Cube,
} from "@phosphor-icons/react/dist/ssr";

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
  <div className="w-24 h-28 p-1 rounded-lg border border-themeBorder flex flex-col justify-between text-center text-themeText">
    <strong>{label}</strong>
    <Icon size={32} className={`mx-auto ${iconClassName}`} weight="fill" />
    <span>{value}</span>
  </div>
);

export default function ProductPage({ params }: { params: { id: string } }) {
  const coffee = use(fetchCoffeeData(params.id)); // Mantendo a lógica original com use

  if (!coffee) {
    return <h1>Product not found.</h1>;
  }

  return (
    <div>
      <ProductHeader />
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto py-20 flex gap-10">
          <Image
            src={coffee.bigImage}
            alt={`${coffee.title} image.`}
            width={500}
            height={500}
            className="w-1/2 h-[70vh] object-cover rounded-lg"
          />
          <div>
            <span className="rounded-full bg-themeSecondary text-white font-bold py-1 px-3 my-2 inline-block">
              {coffee.category}
            </span>
            <h1 className="text-6xl font-merriweather my-3 text-themeTitle">
              {coffee.title}
            </h1>
            <p className="text-xl text-balance font-light text-themeText">
              {coffee.description}
            </p>
            <div className="flex flex-wrap gap-2 max-w-sm my-5">
              <CoffeeDetail
                label="Preparation"
                value={coffee.preparationTime}
                Icon={Clock}
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
              <CoffeeDetail label="Size" value={coffee.size} Icon={Tag} />
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

            <p>Options: {coffee.options}</p>
            <p>Discount: {coffee.discount}</p>
            <p>Price: {coffee.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
