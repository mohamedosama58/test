import {  useSelector } from "react-redux";
import { Fragment } from "react/cjs/react.production.min";
import ErrorModal from "../UI/ErrorModal";
import CartItem from "./CartItem";

const Cart = (props) => {
  const totalPrice=useSelector((state)=>state.cart.totalPrice);
  const items=useSelector((state)=>state.cart.items);
  const amountNotValid=useSelector((state)=>state.cart.notValid)
  const hasItems=items.length>0;
  const cartItems = (
    <ul>
{items.map((item)=><CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} id={item.id}/>)}
    </ul>
  );
  
  return <Fragment><div className="backdrop" onClick={props.onClose}>
      </div>
      <div className="modal">
      {amountNotValid && <ErrorModal />}
      {cartItems}
      <div className="total_price">
          <span>السعر الاجمالي</span>
          <span className="total">{`${totalPrice} EGP`}</span>
      </div>
      <div className="products_buttons_cart">
          {hasItems && <button className="product_cart_button_order">اطلب</button>}
          <button className="product_cart_button_close" onClick={props.onClose}>اغلاق</button>

      </div>
  </div>
  </Fragment>
};
export default Cart;
