import { useContext } from "react";

import { shopContext } from "../context";

export default function BasketItem(props) {
  const { id, name, price, quantity } = props;

  const { incrementQuantity, decrementQuantity, removeFromBasket } = useContext(shopContext)

  return (
    <li className="collection-item" key={id}>
      <span className="active red description">
        {name} x {price} = <b>{quantity * price} $</b>
      </span>
      <div className="directLinks">
        <a
          href
          className="wave-effect waves-light btn flex"
          onClick={() => incrementQuantity(id)}
        >
          <i className="material-icons left">exposure_plus_1</i>
          Add
        </a>
        <a
          href
          className="wave-effect waves-light btn flex"
          onClick={() => decrementQuantity(id)}
        >
          <i className="material-icons left">exposure_minus_1</i>
          Remove
        </a>
        <a
          href
          className="wave-effect waves-light btn flex"
          onClick={() => removeFromBasket(id)}
        >
          <i className="material-icons">delete_forever</i>Delete
        </a>
      </div>
    </li>
  );
}
