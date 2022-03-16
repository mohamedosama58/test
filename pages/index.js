import { Fragment } from "react/cjs/react.production.min";
import { useRouter } from "next/router";
const HomePage = () => {
    const router=useRouter();
    const startButtonHandler=()=>{
router.push('/products');
    }
  return (
    <Fragment>
      <div className="home">
        <img src="/assests/slidehome.jpg" />
      </div>
      <div className="eshtry_container">
          <div className="eshtry_main">
          <div className="eshtry_content"> 
        <h3>اشتري اون لاين</h3>
        <p>
          موقع اشتري هو موقع مختص في عمليات البيع و الشراء عبر الانترنت , مع
          موقعنا يمكنك التسوق من خلال الانترنت بكل سهولة وامان و يوجد كل المنجات
          من جميع الفئات
        </p>
        <button className="start_button" onClick={startButtonHandler}> تسوق الان</button>
        </div>
        <img src="/assests/e4try.jpg" />
      </div>

      </div>
    </Fragment>
  );
};
export default HomePage;
