import { v4 as uuidv4 } from "uuid";

import iphone10 from "./Images/phone-1.png";
import iphone11 from "./Images/phone-2.png";
import iphone8 from "./Images/phone-3.png";
import iphone13 from "./Images/phone-4.png";

import watch1 from "./Images/watch-1.png";
import watch2 from "./Images/watch-2.png";
import watch3 from "./Images/watch-3.png";
import watch4 from "./Images/watch-4.png";

export const products = [
  {
    id: uuidv4(),
    name: "Iphone 10",
    price: 980,
    image: iphone10,
    category: "phones",
    quantity: 1,
  },
  {
    id: uuidv4(),
    name: "Xiaomi watch",
    price: 520,
    image: watch2,
    category: "watches",
    quantity: 1,
  },
  {
    id: uuidv4(),
    name: "Iphone 11",
    price: 1100,
    image: iphone11,
    category: "phones",
    quantity: 1,
  },
  {
    id: uuidv4(),
    name: "Iphone 8",
    price: 780,
    image: iphone8,
    category: "phones",
    quantity: 1,
  },

  {
    id: uuidv4(),
    name: " Pink watch",
    price: 870,
    image: watch1,
    category: "watches",
    quantity: 1,
  },
  {
    id: uuidv4(),
    name: "Iphone 13",
    price: 1500,
    image: iphone13,
    category: "phones",
    quantity: 1,
  },

  {
    id: uuidv4(),
    name: "Heavy watch",
    price: 680,
    image: watch2,
    category: "watches",
    quantity: 1,
  },
  {
    id: uuidv4(),
    name: "Spotted watch",
    price: 750,
    image: watch3,
    category: "watches",
    quantity: 1,
  },
  {
    id: uuidv4(),
    name: "Iphone 13",
    price: 1500,
    image: iphone13,
    category: "phones",
    quantity: 1,
  },
  {
    id: uuidv4(),
    name: "Black watch",
    price: 650,
    image: watch4,
    category: "watches",
    quantity: 1,
  },
];
