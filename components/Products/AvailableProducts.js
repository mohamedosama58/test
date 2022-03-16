import { Fragment } from "react/cjs/react.production.min";
import Card from "../UI/Card";
import Product from "./Product";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "Iphone13",
    description: "اشتري ايفون 13 باقل سعر موجود في السوق و مع ضمان 5 سنين",
    img: "/assests/iphone13.jpg",
    price: "15,000 EGP",
  },
  {
    id: "p2",
    name: "AirPods Prp",
    description: "اشتري اير بودز باقل سعر موجود في السوق و مع ضمان 5 سنين",
    img: "/assests/Airpods.jpg",
    price: "3,000 EGP",
  },
  {
    id: "p3",
    name: "LG smart TV",
    description: "اشتري شاية اسمارت باقل سعر موجود في السوق و مع ضمان 5 سنين",
    img: "/assests/LgSmart.jpg",
    price: "5,000 EGP",
  },
  {
    id: "p4",
    name: "Laptop DELL",
    description: "اشتري  لاب توب ديل باقل سعر موجود في السوق و مع ضمان 5 سنين",
    img: "/assests/Laptop.jpg",
    price: "13,000 EGP",
  },
  {
    id: "p1",
    name: "Iphone13",
    description: "اشتري ايفون 13 باقل سعر موجود في السوق و مع ضمان 5 سنين",
    img: "/assests/iphone13.jpg",
    price: "15,000 EGP",
  },
  {
    id: "p2",
    name: "AirPods Prp",
    description: "اشتري اير بودز باقل سعر موجود في السوق و مع ضمان 5 سنين",
    img: "/assests/Airpods.jpg",
    price: "3,000 EGP",
  },
  {
    id: "p3",
    name: "LG smart TV",
    description: "اشتري شاية اسمارت باقل سعر موجود في السوق و مع ضمان 5 سنين",
    img: "/assests/LgSmart.jpg",
    price: "5,000 EGP",
  },
  {
    id: "p4",
    name: "Laptop DELL",
    description: "اشتري  لاب توب ديل باقل سعر موجود في السوق و مع ضمان 5 سنين",
    img: "/assests/Laptop.jpg",
    price: "13,000 EGP",
  },
  {
    id: "p1",
    name: "Iphone13",
    description: "اشتري ايفون 13 باقل سعر موجود في السوق و مع ضمان 5 سنين",
    img: "/assests/iphone13.jpg",
    price: "15,000 EGP",
  },
  {
    id: "p2",
    name: "AirPods Prp",
    description: "اشتري اير بودز باقل سعر موجود في السوق و مع ضمان 5 سنين",
    img: "/assests/Airpods.jpg",
    price: "3,000 EGP",
  },
  {
    id: "p3",
    name: "LG smart TV",
    description: "اشتري شاية اسمارت باقل سعر موجود في السوق و مع ضمان 5 سنين",
    img: "/assests/LgSmart.jpg",
    price: "5,000 EGP",
  },
  {
    id: "p4",
    name: "Laptop DELL",
    description: "اشتري  لاب توب ديل باقل سعر موجود في السوق و مع ضمان 5 سنين",
    img: "/assests/Laptop.jpg",
    price: "13,000 EGP",
  },
  {
    id: "p4",
    name: "Laptop DELL",
    description: "اشتري  لاب توب ديل باقل سعر موجود في السوق و مع ضمان 5 سنين",
    img: "/assests/Laptop.jpg",
    price: "13,000 EGP",
  },
];
const AvailableProducts = (props) => {
  const productList = DUMMY_PRODUCTS.map((product) => (
    <Product
      key={product.id}
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
