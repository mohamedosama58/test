import { Fragment } from "react/cjs/react.production.min";
import AvailableProducts from "../../components/Products/AvailableProducts";
import {useDispatch, useSelector}  from 'react-redux';
import Cart from "../../components/Cart/Cart";
import { cartActions } from "../../components/store/cart";
function products(){
    const showCart=useSelector((state)=>state.cart.isShown);
    const dispatch=useDispatch();
    const onClose=()=>{
        dispatch(cartActions.showCart({type: 'NOT_SHOW'}));
    }
return(
    <Fragment>
        {showCart && <Cart onClose={onClose}/>}
        <div className="products_title"><h3>منتجاتنا</h3></div>
    <AvailableProducts/>
    </Fragment>
)
}
export default products;