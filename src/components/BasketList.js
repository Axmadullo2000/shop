import { useContext } from "react";

import { shopContext } from "../context";

import BasketItem from "./BasketItem";

function BasketList() {
  const { order = [], showBasket } = useContext(shopContext);

  const total = order.reduce(
    (sum, current) => sum + current.quantity * current.price,
    0
  );

  return (
    <div className="bsk">
      <ul className="collection">
        <li className="collection-item active">Basket</li>
        <span className="red closeContent">
          <i className="material-icons" onClick={ showBasket }>
            close
          </i>
        </span>
        {order.length ? (
          order.map((order) => (
            <BasketItem key={ order.id } {...order} />
          ))
        ) : (
          <li className="collection-item">Your basket is empty!</li>
        )}
        <li className="collection-item active">
          Total Cost: { total } <b>$</b>
        </li>
      </ul>
    </div>
  );
}

export default BasketList;
