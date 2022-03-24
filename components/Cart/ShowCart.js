import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react/cjs/react.production.min";
import { cartActions } from "../../components/store/cart";
import Cart from "./Cart";

const ShowCart = (props) => {
  const showCart = useSelector((state) => state.cart.isShown);
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(cartActions.showCart({ type: "NOT_SHOW" }));
  };
  return <Fragment>{showCart && <Cart onClose={onClose} />}</Fragment>;
};
export default ShowCart;
