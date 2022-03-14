import CartIcon from "../Cart/CartIcon";
const CartButton = (props) => {
  return (
    <button className="cart">
      <span>3</span>

      <CartIcon />
    </button>
  );
};
export default CartButton;
