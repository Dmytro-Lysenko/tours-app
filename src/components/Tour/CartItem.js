import { useState, useContext } from "react";
import CartContext from "../../store/cart-context";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const [readMore, setReadMore] = useState(false);

  const toogleReadMoreHandler = () => {
    setReadMore(!readMore);
  };

  const deleteCarthandler = () => {
    cartCtx.deleteTour(props.id);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.country}>{props.country}</h1>
      <div className={classes.photo}>
        <img src={props.photo} alt={props.name} />
      </div>
      <h2 className={classes.title}>{props.name}</h2>
      <h1 className={classes.date}>{props.date}</h1>
      <p className={classes.description}>
        {readMore
          ? props.description
          : `${props.description.substring(0, 38)}...`}
        <button className={classes.buttonRead} onClick={toogleReadMoreHandler}>
          {!readMore ? " read more" : " hide"}
        </button>
      </p>
      <button className={classes.button} onClick={deleteCarthandler}>
        Delete tour
      </button>
    </div>
  );
};
export default CartItem;
