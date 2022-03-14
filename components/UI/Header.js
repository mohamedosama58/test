import Link from "next/link";
import { Fragment } from "react/cjs/react.production.min";
import CartButton from "./CartButton";
const Header = (props) => {
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
          <CartButton />
        </div>
      </header>
    </Fragment>
  );
};
export default Header;
