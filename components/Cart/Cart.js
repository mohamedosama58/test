import { Fragment } from "react/cjs/react.production.min";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[
        {
          id: "p4",
          name: "Laptop DELL",
          description:"اشتري  لاب توب ديل باقل سعر موجود في السوق و مع ضمان 5 سنين",
          img: "/assests/Laptop.jpg",
          price: 13000
        }
      ].map((item)=><li>{item.name}</li>)}
    </ul>
  );
  return <Fragment><div className="backdrop" onClick={props.onClose}>
      </div>
      <div className="modal">
      {cartItems}
      <div>
          <span>الكمية</span>
          <span>35.2</span>
      </div>
      <div className="products_buttons">
          <button className="product_cart_button" onClick={props.onClose}>اغلاق</button>
          <button className="product_cart_button">اطلب</button>
      </div>
  </div>
  </Fragment>
};
export default Cart;
