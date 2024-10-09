import { use } from "react";
import getCoffeeList, { CoffeeI } from "@coffee/data";
import ProductHeader from "@coffee/components/ProductHeader";

const fetchCoffeeData = async (id: string) => {
  const coffeeList: CoffeeI[] = getCoffeeList();
  const coffee = coffeeList.find((c) => c.id.toString() === id);
  return coffee || null;
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const coffee = use(fetchCoffeeData(params.id));
  if (!coffee) {
    return <h1>Product not found.</h1>;
  }

  return (
    <div>
      <ProductHeader />
      <div className="py-20 bg-white flex justify-center">
        <h1>{coffee.title}</h1>
        <img src={coffee.smallimage} alt={coffee.title} />
        <p>{coffee.description}</p>
      </div>
    </div>
  );
}
