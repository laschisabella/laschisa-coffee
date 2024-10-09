export interface CoffeeI {
  id: number;
  title: string;
  description: string;
  smallimage: string;
  bigimage: string;
  price: number;
}

const getCoffeeList = (): CoffeeI[] => [
  {
    id: 6,
    title: "Irish Coffee",
    description:
      "A warm blend of coffee, Irish whiskey, sugar, and cream, delivering a comforting, boozy treat.",
    smallimage: "/images/small/irish.png",
    bigimage: "/images/teste.png",
    price: 18.0,
  },
  {
    id: 7,
    title: "Latte",
    description:
      "A creamy coffee made with espresso and steamed milk, offering a mild, rich flavor with a velvety texture.",
    smallimage: "/images/small/latte.png",
    bigimage: "/images/teste.png",
    price: 10.0,
  },
  {
    id: 8,
    title: "Macchiato",
    description:
      "An espresso 'stained' with a small amount of foamed milk, providing a concentrated coffee flavor with a hint of creaminess.",
    smallimage: "/images/small/macchiato.png",
    bigimage: "/images/teste.png",
    price: 9.5,
  },
  {
    id: 1,
    title: "Amaretto Coffee",
    description:
      "A rich, almond-flavored coffee made with a splash of amaretto liqueur for a sweet and nutty kick.",
    smallimage: "/images/small/amaretto.png",
    bigimage: "/images/teste.png",
    price: 12.5,
  },
  {
    id: 2,
    title: "Americano",
    description:
      "A simple, strong coffee made by diluting an espresso shot with hot water, creating a light, yet bold flavor.",
    smallimage: "/images/small/americano.png",
    bigimage: "/images/teste.png",
    price: 8.0,
  },
  {
    id: 3,
    title: "Cocktail Coffee",
    description:
      "A coffee-based drink combined with alcohol, often served cold or with a mix of syrups, perfect for social occasions.",
    smallimage: "/images/small/cocktail.png",
    bigimage: "/images/teste.png",
    price: 15.0,
  },
  {
    id: 4,
    title: "Glace Coffee",
    description:
      "A coffee served over ice cream, typically a strong espresso poured over a scoop of vanilla or coffee-flavored ice cream.",
    smallimage: "/images/small/glace.png",
    bigimage: "/images/teste.png",
    price: 10.5,
  },
  {
    id: 5,
    title: "Iced Coffee",
    description:
      "A refreshing, chilled coffee brewed hot and served cold, often sweetened or with milk for a smooth finish.",
    smallimage: "/images/small/iced.png",
    bigimage: "/images/teste.png",
    price: 9.0,
  },
  {
    id: 9,
    title: "Mocha",
    description:
      "A delightful mix of espresso, steamed milk, and chocolate syrup, topped with whipped cream for a dessert-like coffee experience.",
    smallimage: "/images/small/mocha.png",
    bigimage: "/images/teste.png",
    price: 11.0,
  },
  {
    id: 10,
    title: "Caffè con Panna",
    description:
      "An espresso topped with a dollop of whipped cream, adding sweetness and texture to the strong coffee flavor.",
    smallimage: "/images/small/panna.png",
    bigimage: "/images/teste.png",
    price: 8.5,
  },
  {
    id: 11,
    title: "Caffè Romano",
    description:
      "A bold espresso served with a slice of lemon, giving the coffee a citrusy, zesty twist.",
    smallimage: "/images/small/romano.png",
    bigimage: "/images/teste.png",
    price: 7.5,
  },
  {
    id: 12,
    title: "Venetian Coffee",
    description:
      "A unique coffee blend often infused with spices and sometimes served with a hint of citrus for a sophisticated taste.",
    smallimage: "/images/small/venetian.png",
    bigimage: "/images/teste.png",
    price: 14.0,
  },
];

export default getCoffeeList;
