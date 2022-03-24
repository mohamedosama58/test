import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";
import Card from "../UI/Card";
const Product = (props) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItem({
        id: props.id,
        name: props.name,
        price: props.price,
        amount: 1,
      })
    );
  };
  const router = useRouter();
  const detailsHandler = () => {
    router.push("/" + props.id);
  };

  return (
    <Card className="product">
      <div className="img_container">
        <img src={props.img} alt={props.description} />
      </div>
      <h3>{props.name}</h3>
      <p>{`${props.price} EGP`}</p>
      <div className="products_buttons">
        <button className="product_detail_button" onClick={detailsHandler}>
          التفاصيل
        </button>
        <button className="product_cart_button" onClick={addToCartHandler}>
          اضف الي السلة
        </button>
      </div>
    </Card>
  );
};
export default Product;
