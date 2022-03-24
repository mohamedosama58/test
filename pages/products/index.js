import { Fragment } from "react/cjs/react.production.min";
import ShowCart from "../../components/Cart/ShowCart";
import AvailableProducts from "../../components/Products/AvailableProducts";

function products(){

return(
    <Fragment>
        <div className="products_title"><h3>منتجاتنا</h3></div>
    <AvailableProducts/>
    </Fragment>
)
}
export default products;