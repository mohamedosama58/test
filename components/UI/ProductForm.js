import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import ErrorModal from "./ErrorModal";
import Input from "./Input";

const ProductForm = (props) => {
  const amountNotValid=useSelector((state)=>state.cart.notValid);
  const amountInputRef = useRef();
  const addToCartHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;
    props.onAddToCart(enteredAmountNum);
  };
  const removeFromCartHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;
      props.onRemoveFromCart(enteredAmountNum);
    

  };
  return (
    <form className="product_form">
      <Input
        label="الكمية"
        ref={amountInputRef}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <div className="products_buttons">
        <button className="product_cart_button" onClick={removeFromCartHandler}>
          ازالة
        </button>
        <button className="product_cart_button" onClick={addToCartHandler}>
          {" "}
          اضافة{" "}
        </button>
      </div>
    </form>
  );
};
export default ProductForm;
