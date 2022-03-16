import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart";
import Card from "../UI/Card";

const Product = (props) => {
    const dispatch=useDispatch();
  const addToCart = () => {
      dispatch(cartActions.showCart({type: 'SHOW'}));
  };
  return (
    <Card className="product">
      <div className="img_container">
        <img src={props.img} alt={props.description} />
      </div>
      <h3>{props.name}</h3>
      <p>{props.price}</p>
      <div className="products_buttons">
        <button className="product_detail_button">التفاصيل</button>
        <button className="product_cart_button" onClick={addToCart}>
          اضف الي السلة
        </button>
      </div>
    </Card>
  );
};
export default Product;
