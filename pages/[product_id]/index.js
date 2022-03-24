import ProductDetail from "../../components/Products/ProductDetail";
import { useRouter } from "next/dist/client/router";
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

const Details = () => {
  const router = useRouter();
  const id=router.query.product_id;
  const filteredItemIndex = DUMMY_PRODUCTS.findIndex(
    (item) => item.id === id
  );
  const filteredItem=DUMMY_PRODUCTS[filteredItemIndex];
  return <ProductDetail image={filteredItem.img} name={filteredItem.name} description={filteredItem.description} price={filteredItem.price} key={filteredItem.id}/>;
};
export default Details;
