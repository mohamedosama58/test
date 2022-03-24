import { cartActions } from "../store/cart";
import ProductForm from "../UI/ProductForm";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ErrorModal from "../UI/ErrorModal";
const ProductDetail = (props) => {
    const noItems=useSelector((state)=>state.cart.noItems);
    const amountNotValid=useSelector((state)=>state.cart.notValid);
    const dispatch=useDispatch();
    const addToCartHandler=(amount)=>{
      dispatch(cartActions.addItemToCart({
          id: props.id,
          amount:amount,
          name:props.name,
          price: props.price
      }))
  }
  const removeFromCartHandler=(amount)=>{
    dispatch(cartActions.removeItem({
      id: props.id,
          amount:amount,
    
}))
  };
    return (
    <section className="product_detail">
              {noItems && <div className="error_modal"><p>Item out of the cart</p></div>}
              {amountNotValid && <ErrorModal/>}
        <div className="img_container">
      <img src={props.image} alt={props.name} />
      </div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{`${props.price}` +' EGP'}</p>
      <ProductForm  onAddToCart={addToCartHandler} onRemoveFromCart={removeFromCartHandler}/>
    </section>
  );
};
export default ProductDetail;
