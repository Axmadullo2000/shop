import { useContext } from "react";
import { shopContext } from "../context";

export default function Cart(props) {
    const { order, showBasket = Function.prototype } = useContext(shopContext);

    const quantity = order.length;

    return (
        <div className="cart indigo darken-4"    onClick={ showBasket }>
            <i className="material-icons">add_shopping_cart</i>
            { quantity ? <span className="cart-quantity">{ quantity }</span> : 0 }
        </div>
    )
}
