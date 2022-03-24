import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartIcon from "../Cart/CartIcon";

const CartButton = (props) => {
  const numOfProducts = useSelector((state) =>
    state.cart.items.reduce((currNum, item) => {
      return currNum + item.amount;
    }, 0)
  );
  const items = useSelector((state) => state.cart.items);
  const [btnHigLighted, setBtnHighLighted] = useState(false);
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighLighted(true);
    const timer = setTimeout(() => {
      setBtnHighLighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  const cartClasses = `cart ${btnHigLighted ? "bump" : ""}`;

  return (
    <button className={cartClasses} onClick={props.showCart}>
      <span>{numOfProducts}</span>

      <CartIcon />
    </button>
  );
};
export default CartButton;
