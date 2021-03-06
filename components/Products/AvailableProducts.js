import { Fragment } from "react/cjs/react.production.min";
import Card from "../UI/Card";
import Product from "./Product";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "Iphone13",
    description: "اشتري ايفون 13 باقل سعر موجود في السوق و مع ضمان 5 سنين",
    img: "/assests/iphone13.jpg",
    price: 5000,
  },
  {
    id: "p2",
    name: "AirPods Prp",
    description: "اشتري اير بودز باقل سعر موجود في السوق و مع ضمان 5 سنين",
    img: "/assests/Airpods.jpg",
    price: 3000,
  },
  {
    id: "p3",
    name: "LG smart TV",
    description: "اشتري شاية اسمارت باقل سعر موجود في السوق و مع ضمان 5 سنين",
    img: "/assests/LgSmart.jpg",
    price: 5000,
  },
  {
    id: "p4",
    name: "Laptop DELL",
    description: "اشتري  لاب توب ديل باقل سعر موجود في السوق و مع ضمان 5 سنين",
    img: "/assests/Laptop.jpg",
    price: 13000,
  },
  {
    id: "p5",
    name: "Iphone13",
    description: "اشتري ايفون 13 باقل سعر موجود في السوق و مع ضمان 5 سنين",
    img: "/assests/iphone13.jpg",
    price: 15000,
  },
  {
    id: "p6",
    name: "AirPods Prp",
    description: "اشتري اير بودز باقل سعر موجود في السوق و مع ضمان 5 سنين",
    img: "/assests/Airpods.jpg",
    price: 3000,
  },
  {
    id: "p7",
    name: "LG smart TV",
    description: "اشتري شاية اسمارت باقل سعر موجود في السوق و مع ضمان 5 سنين",
    img: "/assests/LgSmart.jpg",
    price: 5000,
  },
  {
    id: "p8",
    name: "Laptop DELL",
    description: "اشتري  لاب توب ديل باقل سعر موجود في السوق و مع ضمان 5 سنين",
    img: "/assests/Laptop.jpg",
    price: 13000,
  },
  {
    id: "p9",
    name: "Iphone13",
    description: "اشتري ايفون 13 باقل سعر موجود في السوق و مع ضمان 5 سنين",
    img: "/assests/iphone13.jpg",
    price: 15000,
  },
  {
    id: "p10",
    name: "AirPods Prp",
    description: "اشتري اير بودز باقل سعر موجود في السوق و مع ضمان 5 سنين",
    img: "/assests/Airpods.jpg",
    price: 3000,
  },
  {
    id: "p11",
    name: "LG smart TV",
    description: "اشتري شاية اسمارت باقل سعر موجود في السوق و مع ضمان 5 سنين",
    img: "/assests/LgSmart.jpg",
    price: 5000,
  },
  {
    id: "p12",
    name: "Laptop DELL",
    description: "اشتري  لاب توب ديل باقل سعر موجود في السوق و مع ضمان 5 سنين",
    img: "/assests/Laptop.jpg",
    price: 13000,
  },
  {
    id: "p13",
    name: "Laptop DELL",
    description: "اشتري  لاب توب ديل باقل سعر موجود في السوق و مع ضمان 5 سنين",
    img: "/assests/Laptop.jpg",
    price: 13000,
  },
];
const AvailableProducts = (props) => {
  const productList = DUMMY_PRODUCTS.map((product) => (
    <Product
      key={product.id}
      id={product.id}
      img={product.img}
      description={product.description}
      name={product.name}
      price={product.price}
    />
  ));

  return (
    <Fragment>
      <Card className="product_list">{productList}</Card>
    </Fragment>
  );
};
export default AvailableProducts;
