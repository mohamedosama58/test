import Link from "next/link";
import { Fragment } from "react/cjs/react.production.min";
import CartButton from "./CartButton";
const Layout = (props) => {
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
      
      <footer className="footer">
        <div className="above_footer">
        <div className="head_footer">
          <h3>معلومات عنا</h3>
          <p>
            موقع اشتري هو موقع مختص في عمليات البيع و الشراء عبر الانترنت , مع
            موقعنا يمكنك التسوق من خلال الانترنت بكل سهولة وامان و يوجد كل
            المنجات من جميع الفئات
          </p>
        </div>
        <div className="social_footer">
          <h3>اتصل بنا</h3>
          <div>
              <a href="https://facebook.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                فيس بوك
              </a>
              <a href="facebook.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                فيس بوك
              </a>
        </div>
        </div>
        </div>
        <div className="foot_footer">
          <p>جميع الحقوق محفوظة موقع اشتري @ 2022</p>
        </div>
      </footer>
    </Fragment>
  );
};
export default Layout;
