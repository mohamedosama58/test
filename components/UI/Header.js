import Link from "next/link";
import { useDispatch } from "react-redux";
import { Fragment } from "react/cjs/react.production.min";
import { cartActions } from "../store/cart";
import CartButton from "./CartButton";
const Header = (props) => {
  const dispatch=useDispatch();
  const showCartHandler=()=>{
    dispatch(cartActions.showCart({type: 'SHOW'}));
  }
  return (
    <Fragment>
      <header className="header">
        <div className="logo">
          <Link href="/">اشتري</Link>
        </div>
        <div className="nav_list">
          <nav>
            <Link href="/">الرئيسية</Link>
            <Link href="/products">منتجاتنا</Link>
            <Link href="/complaints">الشكاوي</Link>
          </nav>
        </div>
        <div>
          <CartButton showCart={showCartHandler}/>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;
