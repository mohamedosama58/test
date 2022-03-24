import ProductForm from "../UI/ProductForm";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";
const CartItem = (props) => {
  const dispatch = useDispatch();
  const addToCartHandler = (amount) => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        amount: amount,
        name: props.name,
        price: props.price,
        key: props.id,
      })
    );
  };
  const removeFromCartHandler = (amount) => {
    dispatch(
      cartActions.removeItem({
        id: props.id,
        amount: amount,
        key: props.id,
      })
    );
  };
  const price = `${props.price} EGP`;
  return (
    <div className="cart_item">
      <div className="summary">
        <h2>{props.name}</h2>
        <div>
          <span className="cartitem_price">{price}</span>
          <span className="cartitem_amount">x {props.amount}</span>
        </div>
      </div>
      <ProductForm
        onAddToCart={addToCartHandler}
        onRemoveFromCart={removeFromCartHandler}
      />
    </div>
  );
};
export default CartItem;
